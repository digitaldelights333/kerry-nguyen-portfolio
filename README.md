# Kerry Nguyen — Portfolio

A single-page portfolio showcasing 0→1 learning products built at classroom, statewide, and nationwide scale.

Live site: https://digitaldelights333.github.io/kerry-nguyen-portfolio/

Static HTML, no build step. Open `index.html` locally or serve the directory.

## Analytics

GoatCounter is installed (cookieless, no consent banner needed). The snippet
sits just above `</head>` in `index.html`.

- **Dashboard:** https://digitaldelights333.goatcounter.com
- **Tracking started:** 2026-09-02

## Event tracking (PostHog)

Question chips and case study cards send named events to PostHog (cookieless,
no consent banner). The project key is set in `index.html` (search `POSTHOG_KEY`).
Localhost is ignored. Events are sent through `track(name, props)`.

| Event | Properties |
|---|---|
| `chip_clicked` | `chip_id`, `chip_text`, `via` (`chip` / `header_schedule`), `position`, `questions_asked_before` |
| `case_opened` | `case_id`, `case_title`, `source` (`grid` / `chat_link` / `case_connection`) |
| `case_unavailable_clicked` | `case_id`, `case_title` (an "In review" card that has no details yet) |
| `case_details_expanded` | `case_id` (the "Key decision" toggle) |
| `case_link_clicked` | `case_id`, `link_type` (`video` / `docs`) |
| `schedule_clicked` | `location` (`header` / `chat_answer`) |

Query them in PostHog under Product analytics (Trends, Funnels) or the SQL editor.

### Viewing all traffic since launch

The dashboard defaults to a recent window. To see everything, set the start
date field at the top of the dashboard to `2026-09-02` and leave the end date
as today.

### Excluding your own visits

Already done for the browser used at setup. To exclude another browser or
device, load the site once with `#toggle-goatcounter` appended:

    https://digitaldelights333.github.io/kerry-nguyen-portfolio/#toggle-goatcounter

Requests from localhost and private networks are ignored automatically, so
local previews never count.

### Backing up the data

There is no automated export. If the numbers ever matter enough to archive,
use the manual CSV export in GoatCounter's settings.

### Editing this repo

Pull before editing. This repo gets changes from more than one machine, and
a stale local clone will make `git push` fail.

Case cards are tracked by their `id` in the `CASES` list, so a new card is tracked automatically.
When a card goes live (drops `soon`), its clicks switch from `case_unavailable_clicked` to `case_opened`.
