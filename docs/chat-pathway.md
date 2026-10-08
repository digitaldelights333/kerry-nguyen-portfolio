# Chat pathway (locked in)

Written by Kerry, saved here as written. **Applied to `index.html`** (inline chips, header button, eight-chip spine, slot rule, closer). Chip 5 was confirmed on 2026-10-08.
This file replaces the chip wording and tree in `docs/chat-answers-review.md`, which is kept for history.

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

Kerry is an AI product manager and systems thinker who turns real user problems into products at scale. She builds foundations that compound, where one solution becomes the base for the next, from internal tools for a single team to core experiences on a platform with over 550K users.

## 2. How did Kerry get into product? ✅

Kerry started as a high school science teacher, then moved into EdTech as an instructional designer, where she developed curriculum and taught herself to automate manual workflows for her team. One recurring task that used to take over an hour now takes five minutes, a productivity gain of 1,000%+. Her habit of turning one-off fixes into repeatable systems evolved into a career in product management, first for internal tools, then for core product experiences.

## 3. What has Kerry shipped? ✅

Kerry has shipped both customer-facing products and internal tools at Kiddom. Cadence is a planning and automated scheduling experience on a platform with 550K+ users. Her internal tools include the AI Tree Tool, which expanded a library of 400+ curriculum products from English into Spanish, and a builder that made state-specific products 45% faster to create.

[ View all case studies ] (Cadence, AI Tree Tool, and the builder are linked in the text)

## 4. How does Kerry build with AI? ✅

Kerry prototypes. A working prototype gets a team aligned faster than a written PRD alone, so she builds early and often, using AI to go from idea to something people can click.

With a prototype to build from, the team developed Bilingual View & Print in under four weeks. This portfolio, including me, Java, was built with AI too.

## 5. How does Kerry evaluate AI features? ✅ (confirmed)

Kerry treats evaluation as part of the build. When early translations in the AI Tree Tool varied in quality across age groups, she redesigned the approach around age-specific prompts. She partnered with subject matter experts to develop a quality rubric and with ML engineers to define inference guidelines. Outputs then went through up to three rounds of expert review and refinement, each a pass or fail with notes on why and where the engine should look for better context, to drive higher-fidelity results before launch.

## 6. How does Kerry work with teams? ✅

Kerry works like a teammate who builds. She brings prototypes to engineers, designers, and subject matter experts so everyone reacts to something real. She's technical enough to weigh tradeoffs with engineers, and she works across customer success, data science, marketing, and sales to turn user insights and launch metrics into the next product decision. She pitches to product leadership and keeps stakeholders current on the pipeline and post-launch results.

## 7. What does Kerry do outside of work? ✅

Outside of work, Kerry forages for mushrooms, grows fruit trees she brings indoors every winter, and loves a good puzzle. She coached a FIRST Robotics team for six years and, true to form, builds small tools for her own daily routines.

## 8. What is Kerry looking for next? ⚠️ trim pass pending

Kerry is looking for product roles with AI at the center, where she can turn real user problems into products at scale. She's drawn to teams building AI-powered experiences for the people who use them every day, and she brings hands-on experience building with AI herself.

Based in the Central time zone, Kerry is interested in remote roles and available for hybrid roles in the Chicago area.

If that sounds like a fit, Kerry would love to hear about the role.

[ Schedule a call ]

Prefer email? Reach Kerry at [address].

---

## Closer (after the last chip) ⚠️ pick one

Option A (my pick): "That's the full tour! If Kerry sounds like a fit, she'd love to hear about the role." [ Schedule a call ]

## Persistent: header button

[ Schedule a call ] stays visible throughout.

---

## Still open

1. ~~Chip 5: "led" vs. "designed" for the evaluation framework.~~ Resolved: new confirmed wording above.
2. Chip 8: trim and voice pass. It's the longest chip left, and it still says "looking for" in two sentences in a row (which was approved). It's also the last place to check the cheerleader tone.
3. Closer: confirm A, and whether to add the email fallback line.
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
- The closer appears only after all eight chips. Walkthrough 3 shows the wrap-around: after Looking, the unvisited chips (Who, How, Shipped) come back.

### One thing to decide

In walkthroughs 2 and 3, a recruiter taps "Looking for next" at step 5 or 6 while Who and How are still unvisited. Should the Schedule a call CTA show again after the last chip, or is the CTA in the Looking chip plus the header button enough? Suggested: enough. It is the conversion point, so it is Kerry's call.

---

## Build notes

- **Schedule a call** is a placeholder. `SCHEDULE_URL` in `index.html` is `'#'` and the button does nothing until a booking link is set.
- The header button is right-aligned in the chat header. The same button appears inside chip 8 and in the closer.
- Chips are inline in the conversation, directly under the latest message.
- **Skip counter** is built but switched off (`SKIP_AFTER = Infinity`). With it on, "Who" and "How" would drop out of slots 2 and 3 after being ignored, which contradicts the walkthroughs and the "origin story is never lost" point. All three walkthroughs replay exactly with it off.
- Card updates (550K+ on Cadence, Spanish translation on the AI Tree Tool card) are the next step. The chat already says 550K+.
