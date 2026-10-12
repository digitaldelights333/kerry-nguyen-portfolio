// Pure availability logic: turns Google "busy" ranges into open slots.
// No network, no Workers APIs, so it can be unit tested with `node --test`.

const MIN = 60 * 1000;

// Offset (ms) of `tz` from UTC at the instant `utcMs`.
function tzOffset(utcMs, tz) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, hourCycle: 'h23',
    year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
  }).formatToParts(new Date(utcMs));
  const p = Object.fromEntries(parts.map((x) => [x.type, +x.value]));
  const asUtc = Date.UTC(p.year, p.month - 1, p.day, p.hour, p.minute, p.second);
  return asUtc - Math.floor(utcMs / 1000) * 1000;
}

// Wall-clock time in `tz` -> UTC ms. Second pass handles DST changeovers.
export function zonedToUtc(y, m, d, hh, mm, tz) {
  const guess = Date.UTC(y, m - 1, d, hh, mm);
  const first = guess - tzOffset(guess, tz);
  return guess - tzOffset(first, tz);
}

function ymdInZone(utcMs, tz) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' })
      .formatToParts(new Date(utcMs)).map((x) => [x.type, +x.value]));
  return [p.year, p.month, p.day];
}

const parseHM = (s) => { const [h, m] = s.split(':').map(Number); return [h, m || 0]; };

function mergeBusy(busy) {
  const sorted = busy.map((b) => [Date.parse(b.start), Date.parse(b.end)])
    .filter(([s, e]) => Number.isFinite(s) && Number.isFinite(e) && e > s)
    .sort((a, b) => a[0] - b[0]);
  const out = [];
  for (const [s, e] of sorted) {
    const last = out[out.length - 1];
    if (last && s <= last[1]) last[1] = Math.max(last[1], e); else out.push([s, e]);
  }
  return out;
}

/**
 * opts: { now (ms), timezone, workStart 'HH:MM', workEnd 'HH:MM', workDays [1..7, Mon=1],
 *         daysAhead, minNoticeHours, minSlotMinutes, snapMinutes }
 * Returns [{ start, end }] as ISO UTC strings.
 */
export function computeOpenSlots(busy, opts) {
  const { now, timezone: tz, daysAhead, workDays } = opts;
  const [sh, sm] = parseHM(opts.workStart);
  const [eh, em] = parseHM(opts.workEnd);
  const earliest = now + opts.minNoticeHours * 60 * MIN;
  const snap = (opts.snapMinutes || 15) * MIN;
  const minLen = (opts.minSlotMinutes || 30) * MIN;
  const merged = mergeBusy(busy);

  const [y0, m0, d0] = ymdInZone(now, tz);
  const slots = [];
  for (let i = 0; i <= daysAhead; i++) {
    const day = new Date(Date.UTC(y0, m0 - 1, d0 + i));   // calendar date only; tz-independent
    const dow = day.getUTCDay() === 0 ? 7 : day.getUTCDay();
    if (!workDays.includes(dow)) continue;
    const y = day.getUTCFullYear(), m = day.getUTCMonth() + 1, d = day.getUTCDate();
    let cursor = Math.max(zonedToUtc(y, m, d, sh, sm, tz), earliest);
    const end = zonedToUtc(y, m, d, eh, em, tz);
    if (cursor >= end) continue;

    const push = (s, e) => {
      s = Math.ceil(s / snap) * snap;
      if (e - s >= minLen) slots.push({ start: new Date(s).toISOString(), end: new Date(e).toISOString() });
    };
    for (const [bs, be] of merged) {
      if (be <= cursor) continue;
      if (bs >= end) break;
      if (bs > cursor) push(cursor, bs);
      cursor = Math.max(cursor, be);
      if (cursor >= end) break;
    }
    if (cursor < end) push(cursor, end);
  }
  return slots;
}
