# Chat pathway (locked in)

Written by Kerry, saved here as written. **Applied to `index.html`** (inline chips, header button, eight-chip spine, slot rule, closer). Chip 5 was confirmed on 2026-10-08.
This file replaced the earlier chip wording and tree (an older review document, since removed from the repo; see git history).

New requirements in this version:
- Chips appear **inline with the response**, not in a row at the bottom of the chat window.
- **Schedule a call** is a persistent header button plus a call to action inside the last chip. It is no longer a chip.
- Eight chips in a fixed spine, with a slot rule that decides which three show after every tap.

---

## Welcome (2 messages) ✅

1. Hi there! I'm Java, Kerry's product portfolio assistant.
2. I'm a big fan of her work. Select a question below and I'll show you why.

Opening chips: Who is Kerry? / What has Kerry shipped? / How does Kerry build with AI?

---

## 1. Who is Kerry? ✅

Kerry is an AI product manager and systems thinker who turns real user problems into products at scale. She sees the pattern across problems, finds the building blocks they share, then builds them to be reused, from internal tools for a single team to core experiences on a platform with 550K+ users.

## 2. How did Kerry get into product? ✅

**Bubble 1 (1/2):** Kerry started as a high school science teacher, then moved into EdTech as an instructional designer, where she developed curriculum and taught herself to automate manual workflows for her team. One recurring task that used to take over an hour now takes five minutes, a productivity gain of 1,000%+.

**Bubble 2 (2/2):** Her habit of turning one-off fixes into repeatable systems evolved into a career in product management, first for internal tools, then for core product experiences.

## 3. What has Kerry shipped? ✅

Kerry has shipped both customer-facing products and internal tools at Kiddom. Cadence is a planning and automated scheduling experience on a platform with 550K+ users. Her internal tools include the AI Tree Tool, which expanded a library of 400+ curriculum products from English into Spanish, and a builder that made state-specific products 45% faster to create.

[ View all case studies ] (Cadence, AI Tree Tool, and the builder are linked in the text)

## 4. How does Kerry build with AI? ✅

Kerry prototypes. A working prototype gets a team aligned faster than a written PRD alone, so she builds early and often, using AI to go from idea to something people can click.

Starting from her prototype, her team developed Bilingual View & Print (linked to its case study) in under four weeks. This portfolio, including me, Java, was built with AI too.

## 5. How does Kerry evaluate AI features? ✅ (confirmed)

**Bubble 1 (1/3):** Kerry treats evaluation as part of the build.

**Bubble 2 (2/3):** When early translations in the AI Tree Tool (linked to its case study) varied in quality across age groups, she redesigned the approach around age-specific prompts. She partnered with subject matter experts to develop a quality rubric and with ML engineers to define inference guidelines.

**Bubble 3 (3/3):** Outputs went through up to three rounds of expert review and refinement, each a pass or fail with notes on why and where the engine should look for better context, to drive higher-fidelity results before launch.

## 6. How does Kerry work with teams? ✅

**Bubble 1 (1/2):** Kerry works like a teammate who builds. She brings prototypes to engineers, designers, and subject matter experts so everyone reacts to something real.

**Bubble 2 (2/2):** She's technical enough to weigh tradeoffs with engineers, and she works across customer success, data science, marketing, and sales to turn user insights and launch metrics into the next product decision. She pitches to product leadership and keeps stakeholders current on the pipeline and post-launch results.

## 7. What does Kerry do outside of work? ✅

Outside of work, Kerry forages for mushrooms, grows fruit trees she brings indoors every winter, and loves a good puzzle. She coached a FIRST Robotics team for six years and, true to form, builds small tools for her own daily routines.

## 8. What is Kerry looking for next? ✅ (confirmed)

Kerry is looking for product roles with AI at the center of a clearly defined product area, on small teams where experts collaborate openly and execute with ownership.

She works best in remote roles with Central time zone overlap, and is open to hybrid roles in the Chicago area. If that sounds like a fit, Kerry would love to learn more about the role.

[ Book a quick intro call ]

Prefer email? Contact Kerry at [address].

---

## Closer (after the last chip) ❌ removed

**Removed.** After the eighth chip is answered, nothing further appears: no closer message and no chips.

## Persistent: header button

[ Schedule a call ] stays visible throughout. Tapping it does not open the booking page directly: Java first answers with chip 8 ("What is Kerry looking for next?"), with the visitor bubble reading "Schedule a call". The button inside that answer reads **Book a quick intro call**, is left-aligned under the text, and opens the booking link in a new tab. Tapping the header button again repeats the answer. It is ignored while Java is still welcoming or answering.

---

## Still open

1. ~~Chip 5: "led" vs. "designed" for the evaluation framework.~~ Resolved: new confirmed wording above.
2. ~~Chip 8: trim and voice pass.~~ Confirmed by Kerry.
3. ~~Closer.~~ Removed.
4. Voice pass across all chips: an earlier offer to make them read as one narrator. Chips 1 and 4 have the most voice now, and 2, 3, 6, and 7 are plainer. Do you want that pass?
5. ~~Placeholder: your email address in chip 8.~~ Filled with nguyenkerry1@gmail.com, the address already on the site. Change it if you want a different one.

---

## The pathway

"Schedule a call" is now the persistent header button plus the in-chip CTA, so it is no longer a chip, and the spine is 8 chips.

### The spine

1. Who is Kerry?
2. How did Kerry get into product?
3. What has Kerry shipped?
4. How does Kerry build with AI?
5. How does Kerry evaluate AI features?
6. How does Kerry work with teams?
7. What does Kerry do outside of work?
8. What is Kerry looking for next?

### The slot rule (applies after every tap)

- **Slot 1:** the next unvisited chip after the one just tapped (wrapping from the end back to the start). This keeps the story logical.
- **Slots 2 and 3:** the earliest unvisited chips on the spine. This guarantees nothing is orphaned.
- Never show a visited chip. If fewer than three remain, show only what's left.
- When all eight are visited, Java shows the closer and the Schedule a call button.
- **Skip counter:** a chip shown twice and ignored drops to the back of the queue, so slots 2 and 3 don't stay stuck on the same two.

Welcome (fixed): Who is Kerry? / What has Kerry shipped? / How does Kerry build with AI?

### Walkthrough 1: starts with Who

| Tapped | Chips shown |
|---|---|
| (Welcome) | Who / Shipped / AI |
| Who | How / Shipped / AI |
| How | Shipped / AI / Eval |
| Shipped | AI / Eval / Teams |
| AI | Eval / Teams / Outside |
| Eval | Teams / Outside / Looking |
| Teams | Outside / Looking |
| Outside | Looking |
| Looking | Closer |

### Walkthrough 2: starts with Shipped

| Tapped | Chips shown |
|---|---|
| (Welcome) | Who / Shipped / AI |
| Shipped | AI / Who / How |
| AI | Eval / Who / How |
| Eval | Teams / Who / How |
| Teams | Outside / Who / How |
| Outside | Looking / Who / How |
| Looking | Who / How |
| Who | How |
| How | Closer |

### Walkthrough 3: starts with AI

| Tapped | Chips shown |
|---|---|
| (Welcome) | Who / Shipped / AI |
| AI | Eval / Who / How |
| Eval | Teams / Who / How |
| Teams | Outside / Who / How |
| Outside | Looking / Who / How |
| Looking | Who / How / Shipped |
| Who | How / Shipped |
| How | Shipped |
| Shipped | Closer |

### What this shows

- Eval and Teams are reachable from every start, which was the original concern. Eval always follows AI, and Teams follows Eval.
- A recruiter who starts with proof (Shipped or AI) still sees "Who" and "How" in slots 2 and 3 until they tap them, so the origin story is never lost.
- "Looking for next" comes late on every path, but anyone who stops early has the header button.
- Kerry removed the closer. The "Closer" rows in the walkthroughs now mean nothing further is shown. Walkthrough 3 shows the wrap-around: after Looking, the unvisited chips (Who, How, Shipped) come back.

### One thing to decide

In walkthroughs 2 and 3, a recruiter taps "Looking for next" at step 5 or 6 while Who and How are still unvisited. Should the Schedule a call CTA show again after the last chip, or is the CTA in the Looking chip plus the header button enough? Suggested: enough. It is the conversion point, so it is Kerry's call.

---

## Bubble breaks and counters

Answers can be split into separate chat bubbles, each with its own typing dots, so long answers read like a person texting. Every bubble in a multi-bubble answer shows a small muted counter in its lower right corner: 1/2, 2/2, or 1/3, 2/3, 3/3. Single-bubble answers show none.

Split now: **chip 2** (2 bubbles), **chip 5** (3), **chip 6** (2), **chip 8** (3: roles, location, then the invite with the booking button and email line).

Pacing: when a bubble finishes, the next bubble appears almost immediately as typing dots, and its text follows after a reading delay of about 0.7s plus 0.08s per word of the previous bubble (3s at most; halved when text is typed out). The delay uses real time even with Reduce motion on, so bubbles never appear all at once.

## Look and feel

- Java's header motion runs on a 60 second loop. At 0s, 15s, 30s and 45s Java waves 3 times, blinks 3 times and tilts their head once. Steam rises at 0s and 30s. Java is still the rest of the time.
- Bubbles use an iMessage-style pointer (short, about 9px, curved like the Messages tail): a small tail hangs below the bottom corner on the speaker's side while all four bubble corners stay rounded. Java's tails point down-left toward the mug, the visitor's down-right toward a generic user icon. The tail is a small drawn shape using the bubble colors (#EFEBE6 fill and #D5CFC7 outline for Java, #B85450 for the visitor), so it needs updating if those colors change.
- The visitor's question (the chip text, or "Schedule a call" from the header) appears as a right-aligned bubble with a generic user icon (a neutral head-and-shoulders circle), mirroring Java's avatar.
- Chat links to case studies ("Cadence", "AI Tree Tool", "builder", "Bilingual View & Print") open the detailed view (the modal) on the new case studies grid. "View all case studies" scrolls to the grid.

## Build notes

- **Booking link:** `SCHEDULE_URL` in `index.html` is the Google Calendar appointment schedule, https://calendar.app.google/T8VRGxhvNJ9Gtgd47. The button inside chip 8's answer opens it in a new tab.
- The header button is right-aligned in the chat header and asks the chip 8 question. The booking button appears inside chip 8's answer.
- Chips are inline in the conversation, directly under the latest message.
- **Skip counter** is built but switched off (`SKIP_AFTER = Infinity`). With it on, "Who" and "How" would drop out of slots 2 and 3 after being ignored, which contradicts the walkthroughs and the "origin story is never lost" point. All three walkthroughs replay exactly with it off.
- Card updates (550K+ on Cadence, Spanish translation on the AI Tree Tool card) are the next step. The chat already says 550K+.

## Booking page (Google Calendar appointment schedule)

Link: https://calendar.app.google/T8VRGxhvNJ9Gtgd47

- Title: **Intro call with Kerry Nguyen**.
- Length: **20 minutes**. Informational call to gauge interest and see if the role is a fit.
- Note shown on the booking page and in confirmation emails:

  > This is a 20-minute informational call to learn about the role and determine if we are a good fit. I'm looking for product roles with AI at the center, remote, or hybrid in the Chicago area. Please come ready to cover the team, the scope of the role, and the total compensation package.
  >
  > Looking forward to our quick chat!

- Booking form: first name, last name and email, plus a required question about the company and role. Suggested wording: "Which company and role is this call about?"
- Settings: a minimum notice (such as 24 hours) and a daily cap. Google Meet on if wanted.
- Button copy: header says **Schedule a call**; the button inside the answer says **Book a quick intro call**. If a duration is added to the label, it must match the Google Calendar duration.
