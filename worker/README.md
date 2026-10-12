# Availability Worker

A Cloudflare Worker that publishes Kerry's **open time slots** and nothing else.
It calls Google Calendar's `freeBusy` endpoint, which returns only busy start/end
times (no titles, attendees, locations or descriptions), subtracts them from
working hours, and returns the gaps. Busy ranges are discarded inside the Worker.

The OAuth token uses the `calendar.freebusy` scope, the narrowest Calendar scope.
It cannot read event details even if the secrets leaked.

## One-time setup

1. **Google Cloud:** create a project, enable the *Google Calendar API*, configure the
   OAuth consent screen (External, add your own email as a test user), and create an
   OAuth client ID of type *Web application* with redirect URI
   `https://developers.google.com/oauthplayground`.
2. **Get a refresh token:** open <https://developers.google.com/oauthplayground>, click the gear,
   tick *Use your own OAuth credentials*, paste the client ID and secret. In Step 1 enter the scope
   `https://www.googleapis.com/auth/calendar.freebusy`, authorize, then in Step 2 exchange the code
   and copy the **refresh token**.
   While the consent screen is in "Testing", refresh tokens expire after 7 days. Click
   *Publish app* (fine for a personal, single-user app) to make the token long-lived.
3. **Deploy:**
   ```
   cd worker
   npm install
   npx wrangler secret put GOOGLE_CLIENT_ID
   npx wrangler secret put GOOGLE_CLIENT_SECRET
   npx wrangler secret put GOOGLE_REFRESH_TOKEN
   npx wrangler deploy
   ```
4. **Point the site at it:** set `AVAILABILITY_URL` in `index.html` (search `AVAILABILITY_URL`)
   to the Worker URL printed by `wrangler deploy`. While it is empty, Java's "Schedule a call"
   answer shows no availability block.

## Configuration

Edit the `[vars]` block in `wrangler.toml`: time zone, working hours and days, how many days
ahead to show, minimum notice, minimum slot length, and `ALLOWED_ORIGIN` (the sites allowed to
call the Worker). `CALENDAR_ID` is `primary`. Responses are cached for 10 minutes.

## Other calendars

To treat interview invites on another Google calendar as busy too, add its ID to the
`items` list in `loadBusy` in `src/index.js` and merge the busy arrays.

## Tests

`npm test` runs the slot logic tests (Node 20+, no dependencies).
