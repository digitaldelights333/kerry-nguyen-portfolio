// Cloudflare Worker: returns Kerry's open time slots, never event details.
// It asks Google's freeBusy endpoint (scope calendar.freebusy), which only ever
// returns busy start/end times, then inverts them against working hours.

import { computeOpenSlots } from './slots.js';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const FREEBUSY_URL = 'https://www.googleapis.com/calendar/v3/freeBusy';
const CACHE_SECONDS = 600;

async function accessToken(env) {
  const res = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: env.GOOGLE_CLIENT_ID,
      client_secret: env.GOOGLE_CLIENT_SECRET,
      refresh_token: env.GOOGLE_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  if (!res.ok) throw new Error('token refresh failed: ' + res.status);
  return (await res.json()).access_token;
}

async function loadBusy(env, token, from, to) {
  const calendarId = env.CALENDAR_ID || 'primary';
  const res = await fetch(FREEBUSY_URL, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timeMin: new Date(from).toISOString(),
      timeMax: new Date(to).toISOString(),
      items: [{ id: calendarId }],
    }),
  });
  if (!res.ok) throw new Error('freeBusy failed: ' + res.status);
  const data = await res.json();
  const cal = data.calendars && data.calendars[calendarId];
  if (!cal || (cal.errors && cal.errors.length)) throw new Error('freeBusy calendar error');
  return cal.busy || [];
}

function cors(env, request) {
  const allowed = (env.ALLOWED_ORIGIN || '').split(',').map((s) => s.trim()).filter(Boolean);
  const origin = request.headers.get('Origin');
  const h = { Vary: 'Origin' };
  if (origin && allowed.includes(origin)) h['Access-Control-Allow-Origin'] = origin;
  return h;
}

export default {
  async fetch(request, env, ctx) {
    const headers = cors(env, request);
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: { ...headers, 'Access-Control-Allow-Methods': 'GET' } });
    }
    if (request.method !== 'GET') return new Response('Method not allowed', { status: 405, headers });

    const cache = caches.default;
    const cacheKey = new Request(new URL(request.url).origin + '/availability');
    let cached = await cache.match(cacheKey);
    if (!cached) {
      try {
        const now = Date.now();
        const daysAhead = +env.DAYS_AHEAD || 21;
        const token = await accessToken(env);
        const busy = await loadBusy(env, token, now, now + (daysAhead + 2) * 86400000);
        const slots = computeOpenSlots(busy, {
          now,
          timezone: env.TIMEZONE || 'America/Chicago',
          workStart: env.WORK_START || '09:00',
          workEnd: env.WORK_END || '17:00',
          workDays: (env.WORK_DAYS || '1,2,3,4,5').split(',').map(Number),
          daysAhead,
          minNoticeHours: +env.MIN_NOTICE_HOURS || 24,
          minSlotMinutes: +env.MIN_SLOT_MINUTES || 30,
          snapMinutes: 15,
        });
        // Only open slots leave the Worker. Busy ranges are discarded here.
        const body = JSON.stringify({
          timezone: env.TIMEZONE || 'America/Chicago',
          generatedAt: new Date(now).toISOString(),
          slots,
        });
        cached = new Response(body, {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': `public, max-age=${CACHE_SECONDS}` },
        });
        ctx.waitUntil(cache.put(cacheKey, cached.clone()));
      } catch (err) {
        console.error(err.message);   // message only; no tokens or calendar data
        return new Response(JSON.stringify({ error: 'unavailable' }), {
          status: 502, headers: { ...headers, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
        });
      }
    }
    const out = new Response(cached.body, cached);
    for (const [k, v] of Object.entries(headers)) out.headers.set(k, v);
    return out;
  },
};
