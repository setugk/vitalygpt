# UI Components & Patterns

Design guidelines for specific UI components and interaction patterns.

---

## Toast messages UX

Toast notifications should display for 2-7 seconds with fade animations of 200-400ms in and 700-1500ms out, with duration calculated at 50ms per character to ensure readability. They work best for passive notifications like successful uploads or state changes, but perform poorly for critical errors or actionable decisions since users often miss them or don't finish reading before they disappear. Toast messages have significant usability issues including poor discoverability, interference with keyboard navigation, and content blocking, making persistent alternatives like sticky headers or inline messages preferable for important communications.

**Full post:**

🍞 Design Guidelines For Toast Messages UX. With practical guidelines to keep in mind when designing toasts and snackbars for notifications ↓ ✅ Toasts notify users about updates, change of state, errors.
✅ Often they include an option to undo or cancel a process. ✅ Their purpose is to not interrupt users from their main task.
🤔 Yet they often turn the interface into a race against time.
🤔 They often appear far away from user’s focus of attention.
🤔 They block nav/content, get overlooked on large screens. ✅ English readers read 250–300 words/min, with 5.8ch/word.
✅ Animate fade in at 200–400ms, fade out at 700–1500ms.
✅ Keep the toast visible for at least 2s, but at most 7s.
✅ Show duration = 50ms × [number of characters] (for English).
↳ 10 words → 10 × 5.8ch/word = 58ch × 50ms → 2900ms. ✅ Consider toasts only for passive warnings or updates.
✅ Keep them visible until the user navigates away (or dismisses).
✅ Better: show a prominent message at the top of the page.
✅ Better: show an updating status in a persistent/sticky header.
✅ Better: show update inline, where the action happened.
🚫 Don’t use toasts for actionable decisions or error messages. Personally, I’ve seen toasts performing fairly well to gently remind users about a successful event (e.g. finished uploading) or change of state (e.g. exported). But for them to be effective, they must be noticed at the time when they appear. However, they perform very poorly to communicate errors, especially when they disappear automatically. In fact, toasts have quite a few usability issues: – Users haven’t finished reading them, yet they are gone
– Poor discoverability when displayed on corners of the screen
– Very distracting when displayed top center of the screen
– Usually appear far away from the action a user has taken
– Lengthy messages block large areas of content and nav
– Not enough space for detailed help, images, videos
– They don’t receive focus and are hard to use via keyboard
– They do interrupt the work, especially when frequent For critical and severe messaging that users should act upon, you might be better off without a toast message. For passive messaging, toasts *might* work, but don’t rely on people noticing them. At best, keep them persistent and allow users to dismiss them. And for frequent notifications, consider a sticky status bar or display messages next to the action they relate to. Useful resources: The Problem With Toast Messages And What To Do Instead, by Adam Silver
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_design-guidelines-for-toast-messages-ux-activity-7235182514091274240-qwfp?utm_source=share&utm_medium=member_ios) · Vitaly Friedman · 2026-06-15
**Tags:** Interaction Design, Vitaly, visual thinking, design-guidelines, ux-design, web-design, ui-notifications

---

## Design pattern guidelines mega repository

Vitaly Friedman has compiled a comprehensive collection of UX guidelines and design patterns covering nearly all common interface elements, from dashboards and data tables to filters and onboarding flows. The resource includes two main sections: Interface Design Patterns with topics like animations, modals, and navigation, and Inclusive Design guidelines addressing accessibility for users with various needs including colorblindness, dyslexia, and autism. This updated post serves as a centralized reference guide for designers seeking best practices and design solutions across a wide range of UI components and user considerations.

**Full post:**

🪴 UX Guidelines For... Almost Everything! Design patterns and best practices, from dashboards and data tables to filters and onboarding — now updated, all in one single post ↓ ✤ Interface Design Patterns AI: https://lnkd.in/e7mA4Rq5
Accordion: https://lnkd.in/edbe3YMw
Animation: https://lnkd.in/edujesBM
Authentication: https://lnkd.in/eq_bb8BY
Autocomplete: https://lnkd.in/eWHvhX89
Back Button: https://lnkd.in/eJmyxrqH
Cancel: https://lnkd.in/eU8EZYXD
Carousels: https://lnkd.in/ejxsRANp
Confirm vs. Undo: https://lnkd.in/e3r9YzEv
Context Menus: https://lnkd.in/eu9p2Nce
Dashboards: https://lnkd.in/eDWaJAeJ
Data Grids: https://lnkd.in/e3UkthxP
Data Tables (Desktop): https://lnkd.in/ePWbJfXW
Data Tables (Mobile): https://lnkd.in/eGfrEzDC
Data Viz: https://lnkd.in/eKZsW8-B
Drag’n’drop: https://lnkd.in/ezdaNsqp
Edge cases: https://lnkd.in/eeyrpp7m
Error Messages: https://lnkd.in/emprqntH
FAQ: https://lnkd.in/dyxifbkQ
Feedback: https://lnkd.in/eqhRtmDu
Filters: https://lnkd.in/e9QRdqsq
Hidden vs. Disabled: https://lnkd.in/erYsA-PP
Infinite Scroll: https://lnkd.in/e2E_TwEK
Live validation: https://lnkd.in/e7erH-vF
Loading: https://lnkd.in/ebFqUrRP
Localization: https://lnkd.in/ezCD6MpJ
Modals: https://lnkd.in/ecXzreWc
Multi-Lingual UX: https://lnkd.in/ekvCDMEC
Navigation: https://lnkd.in/eikbBNzr
Notifications: https://lnkd.in/eCqxKHkY
Onboarding: https://lnkd.in/eFZw3Mgz
Offboarding: https://lnkd.in/eBRgB_hR
Pagination: https://lnkd.in/e9tq-57r
Personalization: https://lnkd.in/eZ2h7_92
Placeholders: https://lnkd.in/eXCKUenb
Pricing Pages: https://lnkd.in/ebZHm83j
Progress Steps: https://lnkd.in/eAVwKtjM
Reviews: https://lnkd.in/etciENfd
QR: https://lnkd.in/em6GU_CA
Search: https://lnkd.in/e2v7E2uq
Sliders: https://lnkd.in/eQMEgSPN
Sorting: https://lnkd.in/eT_RWrmT
Sticky menus: https://lnkd.in/eeuaQ-qf
Sustainability: https://lnkd.in/ee8w-sj7
Toasts: https://lnkd.in/eiJngitb
Transitions: https://lnkd.in/eHwHSQDG
Voice and Tone: https://lnkd.in/e6r4cC8Y ✤ Inclusive Design Accessibility: https://lnkd.in/ekq2q7Zb
Autism: https://lnkd.in/ekujAteM
Children: https://lnkd.in/eh3fv-US
Colorblindness: https://lnkd.in/eqjvPgSZ
Color contrast: https://lnkd.in/ecWS4ue7
Dyscalculia: https://lnkd.in/e8wyMWp4
Dyslexia: https://lnkd.in/ei9mncR7
Legibility: https://lnkd.in/eEarXzD8
Left-Handed Users: https://lnkd.in/eWyzRdy5
Mental Health: https://lnkd.in/eEaXjs9x
Older Adults: https://lnkd.in/e54f2FT2
Screen readers: https://lnkd.in/eaviMFkf
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-design-activity-7237357391791489024-y0sg?utm_source=share&utm_medium=member_ios) · Vitaly Friedman · 2026-06-15
**Tags:** Components, Interaction Design, Vitaly, visual thinking, Accessibility, ui-guidelines, design-patterns, ux-design

---

## Badges vs Pills vs Tags vs Chips

This UX design guide distinguishes between static components (badges, static tags, and data tags) used for status updates and information display, and interactive components (filter tags, selection tags, chips, and pills) used for links, filters, and actions. Key principles include ensuring non-interactive components don't resemble buttons and vice versa, using explicit naming conventions like "Filter tags" or "Status badges" to avoid confusion, and maintaining proper spacing and touch target sizes for accessibility. Design systems typically only need these two main categories to effectively communicate feedback, notifications, and interactive elements to users across designers, engineers, and end users.

**Full post:**

🏷️ Badges vs. Pills vs. Chips vs. Tags. How they are different, what purpose they serve, and how to choose the right one ↓ ✅ We distinguish between static and interactive UI components.
✅ Badges are always static, but tags can be static or interactive.
✅ Badges relay status and updates (e.g. draft, new, pending, -7% ↘).
✅ Static tags show topics with keywords and labels (e.g. Accessibility).
✅ Interactive tags are often used for links, filters, selection, actions. ✅ Display tags ← visually represent data (keywords, labels, details).
✅ Data tags ← numerical data, reading time, file size (e.g. PDF 262 KB).
✅ Filter tags ← show active filters, with an option to remove and clear.
✅ Selection tags ← filter content and input information (chips/pills).
✅ Chips and pills are visual style conventions for interactive tags. 🚫 Don’t display non-interactive components as buttons.
🚫 Don’t display interactive components as static labels.
✅ Prefer adjectives or nouns for non-interactive tags.
✅ Use 48×48px as a min touch target size on mobile.
✅ Use at least 8px spacing between interactive elements. While there is quite a bit of confusion about the difference between all these variants, design systems typically distinguish between 2 of them — static indicators (usually badges, pills, data tags) and interactive links or buttons (usually action/selection tags, filter tags, chips). For feedback indicators, notification counts and status updates, we use badges. For interactive indicators and filters that can be edited or removed, we use tags — which are also sometimes called chips. They can also function as radio buttons or checkboxes. And most of the time, that’s all you really need. And: when naming these components, try to be as explicit as possible to avoid confusion down the line. “Filter tags” are more obvious than “filters” or generic “tags”. Also, “Status badges” are way more obvious than “badges” or “pills”. It should work for everyone — designers, engineers and end users — as long as static labels don’t look like interactive buttons, and the other way around. ✤ Badges/Tags in Design Systems: Cedar: https://lnkd.in/egyjaBuY 👍
GE: https://lnkd.in/e3H25gVK
Gusto: https://lnkd.in/eHYUTTWC
Queensland: https://lnkd.in/e5egfvY6
Kiwi: https://lnkd.in/eX5muakU
ServiceNow: https://lnkd.in/e3pDg7s6 👍
Škoda: https://lnkd.in/eRtRG83t
Uber: https://lnkd.in/eUXiV4Eh 👍 --- ✤ Useful resources: Designing A System For Badges, by Lukas Vilkus
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-design-activity-7261651652414246913-QccV?utm_source=share&utm_medium=member_desktop) · Vitaly Friedman · 2026-06-15
**Tags:** Vitaly, visual thinking, design-systems, ui-components, ux-design

---

## Designing better sorting UX

Effective sorting UX design requires understanding that sorting is a "soft boundary" that re-arranges options, while filtering is a "hard boundary" that reduces them. Rather than using generic directional labels like "high to low," sorting options should focus on user value with context-specific language (e.g., "Best customer ratings" instead of "Ratings high to low"). Users benefit from 20-75 options on desktop, category-specific sorting types, and sorting controls positioned near filters, while avoiding technical abbreviations and hiding popular sorting options behind icons or overlays.

**Full post:**

🗃️ Designing Better Sorting UX. When and how people sort, with practical UX techniques to help users find what they need, faster ↓ ✅ Filtering is a hard boundary that helps users reduce options.
✅ Sorting is a soft boundary that helps users re-arrange options.
✅ Users often need a “comfortable range” of options to find insights.
✅ It often means 20–75 options on desktop, fewer on mobile.
✅ Set up key filters for each category as sort types in that category. 🚫 Alphabetical order is rarely the most useful sorting type.
✅ Default sorting gives users a perception about the entire list.
✅ The first 10–20 items should reflect the diversity of categories.
✅ Category-specific sorting is most valuable and most underutilized.
✅ Keep sorting and filtering close to each other, or merge them. 🚫 Avoid complex abbreviations and technical labels (“DESC/ASC”).
✅ Use a “Sort by” dropdown, “Sort” buttons or “Sort and Filter”-menu.
✅ In data tables and grids, additionally use column sorting.
✅ There, also allow to combine sorting types, ordered by priority.
✅ Use faceted sorting to let users set a relevant area to sort in.
🚫 Don’t hide most popular sorting options behind an icon or overlay. Sorting labels often focus on generic direction, rather than user’s value, which makes sorting unnecessarily confusing. Instead of “Ratings (high to low)”, use “Best customer ratings” or “Highest ratings”. Instead of “TV display depth: low to high”, use “TVs by thinnest display”. Usually there is a very strong connection between categories, filters, data columns and sorting. And often it’s a good idea to explore how we can reuse active (selected) filters as sorting types. E.g. if a user filters by duration or publishing time, consider sorting by duration or publishing time as well. Also, if you can, avoid technical abbreviations and wordy labels such as “Descending/Ascending” with “Low to high ↑“ and ”High to low ↓”. And: don’t implement sorting by rating as average from high to low — always mix average rating and the number of ratings. In fact, users strongly prefer higher number of ratings with slightly lower average. Sorting is often overlooked. Yet it’s a critical feature when users don’t have a hard boundary in mind, or the has low relevance or when they lack domain knowledge. Design custom sorting options for user’s context and you’ll be surprised how effective it is in driving users to answers they are looking for. [Useful resources in the comments ↓] #ux #sorting

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-sorting-share-7391441402758602752-L680?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Vitaly, visual thinking, ux-design, ui-patterns, sorting, filtering

---

## Error states

Effective error message design requires categorizing errors by type and impact level, then tailoring messaging accordingly—using warmth for annoying errors, clear instructions for enraging ones, and accountability for critical failures. UI design must address both slips (unintended actions) and mistakes (misunderstandings) through constraints, autocomplete, examples, and forgiving formatting, while avoiding common pitfalls like relying solely on red color, using technical jargon, or obscuring user input during error recovery. Best practices include positioning errors appropriately (above inputs in forms, within rows in tables), allowing users to override non-critical messages, and using error summaries with links instead of auto-scrolling. Investing time in auditing, measuring, and iterating on error messages can significantly reduce user abandonment and improve completion rates, making it one of the highest-impact UX improvements a company can make.

**Full post:**

❌ How To Design Better Error Messages UX. With useful guidelines to rethink, rewrite and redesign error messages to help users recover and succeed ↓ 🚫 Not all errors have the same impact, so are error messages.
✅ Catalog errors: system failures, user errors, partial, total.
✅ Grade errors by impact: annoying, enraging, critical.
✅ For annoying errors, explain what happened and add warmth.
✅ For enraging errors, explain and provide clear instructions.
✅ For critical errors, own the problem, apologize and resolve. ✅ UIs must support 2 types of errors: slips and mistakes.
✅ Slips: users try to perform one action but do another.
✅ Mistakes: users don’t understand how the system works.
✅ Fix slips ← constraints, autocomplete, smart presets, good defaults.
✅ Fix mistakes ← examples, confirmations, forgiving formatting. 🚫 Never rely on red color alone — always include an icon.
🚫 Avoid auto-scrolling or sudden jumps: use error summary with links.
🚫 Never cover user’s input and errors when users are fixing errors.
🚫 Avoid technical jargon, ‘please’, ‘sorry’, ‘valid’, ‘invalid’, ‘forbidden’.
✅ In forms, showing errors above input, in tables within the row.
✅ Always allow users to override non-critical error messages. Error messages are often an afterthought, yet they can make or break the experience when things go south. Spending time and effort on crafting helpful, adaptive error messages is probably one of the best investments a company might make to reduce abandonment and drive conversions. Audit and study where your error messages are coming from. Build a spreadsheet on why they occur, how they are phrased and how they can be rephrased to be more helpful and impactful. Measure how often errors occur, user’s error recovery rate, completion rates and abandonment. Once you know where your users fail, start iterating and testing new messaging. Even a minor improvement can be enough to guide people on the right path and boost recovery rates. That’s the impact only few features can deliver. Useful resources: How To Write Any Error Message, by Rhiannon Jones
https://lnkd.in/eA4agUBJ Writing Clearer Error Messages, by Amy Leak
https://lnkd.in/ekkmbS4V Error Message Stop Words, on Gov.uk
https://lnkd.in/e5RksRuc Preventing User Errors: Usability Guidelines, by Page Laubheimer (attached)
https://lnkd.in/eWDsgDhC The Art of the Error Message, by Marina Posniak
https://lnkd.in/edPk7wHf Designing Better Error Messages UX, by yours truly Vitaly Friedman
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-errors-activity-7394488133377228800-R2mn?utm_source=share&utm_medium=member_ios&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Interaction Design, Vitaly, Writing, user-experience, ux-design, web-design, error-messages, usability

---

## Designing conversational UX

Designing effective voice UX requires understanding that people use voice interfaces selectively—avoiding them in public or for sensitive data but embracing them in learning apps and car interfaces. Key design practices include creating detailed conversation flows for both happy and unhappy paths, designing distinct VUI personas with specific tone and vocabulary, prioritizing accessibility for diverse speech patterns, and keeping responses concise with no more than three options at a time to account for audio's linear nature. Successful voice UX demands patience in handling long silences, thick accents, and natural speech patterns while deliberately shaping tone and personality to build user trust, as poor voice design risks low adoption rates due to users' negative experiences with automated systems.

**Full post:**

🔮 Designing Voice UX (Guides + Figma Kits). Practical guidelines to design better voice UX for products that support or rely on audio input ↓ 🤔 People avoid voice UIs in public spaces, or for sensitive data.
✅ But do use them with audio assistants, learning apps, in-car UIs.
✅ Good conversations always move forward, not backwards.
🤔 The way we speak is different from the way we write.
🤔 What people say isn’t always what they mean by saying it. ✅ First, we define relevant user stories for the product.
✅ Sketch key use cases, then add detours, then edge cases.
✅ Design VUI personas: tone of voice, words, sentence structure.
✅ Listen to related human conversations, transcribe them.
✅ Write conversation flows for happy and unhappy paths. ✅ Add markers (Finally, Now, Next) to structure the dialogue.
✅ Accessibility: support shaky voices and speech impediments.
✅ Allow users to slow down or speed up output, or rephrase.
✅ Adjust speech patterns, e.g. speaking to children differently. 🚫 There are no errors or “wrong input” in human interactions. Designing for voice requires patience and resilience. We need to design for long silences, thinking pauses, thick accents, slangs and contradictions. Because audio output is short, we must always rank and prioritize options. Also, editing or refining conversation turns is hard, so we need to give people time to think. In practice, 8–10s is a good time for people to respond. Many people have been “burnt” with horrible, poorly designed automated phone systems. If your voice UX comes across even nearly as bad, don’t be surprised by a very low usage or retention rate. We can’t replicate a long scrollable list in audio, so answers must be short, with max 3 options at a time. Instead of listing more options, ask one direct question and then branch out. Re-prompt or reframe when certainty is low. Finally, people choose their voice assistant based on the personality it conveys, and the friendliness it projects. So be deliberate in how you shape the tone, word choice and the melody of the voice. If you don’t, users will do it for you. Study how your customers speak. How exactly they explain the tasks your product must perform. The closer you get to a personal human interaction, the easier it will be to earn people’s trust. --- ✤ Useful resources: Voice Principles, by Ben Sauer
https://lnkd.in/eZH6QWxb Voice UI Design System, by Orange
https://lnkd.in/ezP-9QUu Designing A Voice Persona, by James Walsh
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_designing-voice-ux-guides-figma-kits-activity-7395109773924376577-TwfZ?utm_source=share&utm_medium=member_ios&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Interaction Design, Vitaly, Writing, ux-design, voice-ux, conversational-ui

---

## Design complex data tables

This article provides practical techniques for designing usable and efficient complex data tables by starting with user needs and utilizing a comprehensive interaction checklist. Key design considerations include implementing filtering, sorting, search functionality, and allowing users to customize column visibility and arrangement while testing for long titles and localization issues. The guide recommends offering compact, comfortable, and condensed viewing modes, and emphasizes replacing hover actions with standalone buttons on each row for better discoverability and reduced user errors. Additional options like map or list view alternatives may be necessary for very complex tables to help users compare data more efficiently.

**Full post:**

🍱 How To Design Complex Data Tables (https://lnkd.in/eR26E5ZP), a practical overview of techniques to design usable and efficient data tables in complex applications. A neat refresher, neatly put together by Dmitry Sergushkin. Design always starts with observing, collecting and prioritizing user needs. Complex data tables are no exception there. One of the helpers that I’ve found a while back is the wonderful little tree diagram (checklist) by Slava Shestopalov, which covers all the interaction details and features that we might actually need in a complex data table. Full data table diagram, by Slava Shestopalov: https://lnkd.in/e2jEYrJX
Practical guide (full article): https://lnkd.in/ejziB6h2 With the diagram, we explore the usual suspects first: filtering, sorting, search, complex functionality (drag-n-drop, resizing, bulk features), editing logic (read-only, comment-only, editable), permissions, customization. Then, we decide on types of table cells, default states and default arrangement of columns. Typically filter section lives above the data table but it might not be necessary. As Dmitry suggests, we could instead allow users to choose and construct their own filter combination by adding relevant filters to their selection. Also, live filtering above each column could help filter the table faster. We never know in detail what data will live in those tables, so we need to check for very long technical titles and localization — pseudolocalization can help with that, and so do very long and very short titles. It might be a good idea to consider compact, comfortable and condensed modes as well. Finally, the more complex the table, the more likely it is that we’ll need an option to show, hide and reshuffle columns in the table to help people compare more efficiently. If needed, perhaps switching to a map view or list view might be necessary, too. And: I always try to avoid row hover actions as they often cause errors and rage clicks. Instead, try to use a standalone button, or few buttons, on each row instead. It’s better for discoverability, but also helps people act on each row faster. --- ✤ Useful resources: How to Create Data Tables in Figma (+ Figma file), by Jordan Hughes
https://lnkd.in/eAVuzbfw Enterprise UX: Data Tables, by Stéphanie Walter
https://lnkd.in/erDycsH9 How Screen Readers Navigate Data Tables, by Léonie Watson
https://lnkd.in/eCQRrz6c [more in comments ↓] | 29 comments on LinkedIn

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_how-to-design-complex-data-tables-https-activity-7402621373245984768-WCJ3?utm_source=share&utm_medium=member_ios&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Interaction Design, Vitaly, visual thinking, user-experience, ui-design, data-tables, web-design

---

## Badges vs pills vs chips vs tags

This guide distinguishes between different UI component types used in design systems: badges are static indicators that relay status and updates, while tags can be static (showing topics/keywords) or interactive (used for links, filters, and selections). Interactive tags include chips and pills for visual styling, as well as filter and selection tags that allow user interaction. The key principle is ensuring static components don't visually resemble interactive buttons and vice versa, while using explicit naming conventions like "Status badges" or "Filter chips" to maintain clarity across designers, engineers, and end users.

**Full post:**

🏷️ Badges vs. Pills vs. Chips vs. Tags. How they are different, what purpose they serve, and how to choose the right one ↓ ✅ We distinguish between static and interactive UI components.
✅ Badges are always static, but tags can be static or interactive.
✅ Badges relay status and updates (e.g. draft, new, pending, -7% ↘).
✅ Static tags show topics with keywords and labels (e.g. Accessibility).
✅ Interactive tags are often used for links, filters, selection, actions. ✅ Display tags ← visually represent data (keywords, labels, details).
✅ Data tags ← numerical data, reading time, file size (e.g. PDF 262 KB).
✅ Filter tags ← show active filters, with an option to remove and clear.
✅ Selection tags ← filter content and input information (chips/pills).
✅ Chips and pills are visual style conventions for interactive tags. 🚫 Don’t display non-interactive components as buttons.
🚫 Don’t display interactive components as static labels.
✅ Prefer adjectives or nouns for non-interactive tags.
✅ Use 48×48px as a min touch target size on mobile.
✅ Use at least 8px spacing between interactive elements. While there is quite a bit of confusion about the difference between all these variants, design systems typically distinguish between 2 of them — static indicators (usually badges, pills, data tags) and interactive links or buttons (usually action/selection tags, filter tags, chips). For feedback indicators, notification counts and status updates, we use badges. For interactive indicators and filters that can be edited or removed, we use tags — which are also sometimes called “chips” (could also be radio buttons or checkboxes). And most of the time, that’s all you really need. And: when naming these components, try to be as explicit as possible. “Filter chips” are more obvious than “filters” or generic “tags”. Also, “Status badges” are way more obvious than “badges” or “pills”. It should work for everyone — designers, engineers and end users — as long as static labels don’t look like interactive buttons, and the other way around. --- ✤ Badges in Design Systems: Cedar: https://lnkd.in/egyjaBuY 👍
eBay: https://lnkd.in/du9WvmXq
GE: https://lnkd.in/e3H25gVK
Nordhealth: https://lnkd.in/dEWfVdY9
Queensland: https://lnkd.in/dFFvETu6
ServiceNow: https://lnkd.in/e3pDg7s6 👍
Škoda: https://smashed.by/skoda
Twilio: https://lnkd.in/dcSxXfGc 👍
Uber: https://lnkd.in/eUXiV4Eh 👍
Visa: https://lnkd.in/dcjSthA2 👍
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_badges-vs-pills-vs-chips-vs-tags-activity-7404792650186588160-pWgv?utm_source=share&utm_medium=member_ios&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Vitaly, visual thinking, design-systems, Interaction Design, ui-design, component-design

---

## Healthcare UX

Healthcare UX is a critical but often overlooked design discipline, with the industry growing 10.40% annually yet lagging significantly in user experience due to fragmented, legacy systems that prioritize policymakers and providers over patients. Healthcare workers operate in data-heavy, high-stakes environments where they frequently lack choice in systems and must create workarounds to compensate for poor design, confusing navigation, and generic error messages. The summary highlights essential design considerations including information architecture without room for error, privacy protection, and grouping users by tasks rather than job titles during testing. Multiple resources, design systems, and books are provided to support designers working to improve healthcare UX through better design practices and tools.

**Full post:**

💝 Healthcare UX Design Playbook (+ Figma Kits). With practical guides, design systems and case studies on medical products and healthcare systems ↓ ✅ Healthcare grows 10.40% per year, but lags behind in UX.
✅ Mostly focused on policymakers, providers, insurance.
✅ Patients are often overlooked as “secondary users”.
✅ Users often work in a data-heavy, interruptive environment.
✅ Healthcare UX is information design without room for error. ✅ Healthcare workers typically can’t choose what they use.
✅ Most systems are fragmented, inconsistent, legacy-ridden.
✅ In testing, group healthcare users by their tasks, not job titles.
✅ Protect identity, names, images, contacts, employer, practice. Healthcare is one of the industries that often doesn’t get the attention that it rightfully deserves. Many healthcare systems are painfully slow, error-prone and difficult to use — and used by people who make critical decisions about health every single day. It’s not uncommon to see healthcare workers applying all kinds of ingenious workarounds to get those systems to work, despite generic error messages, confusing navigation and broken search. Unfortunately, it often ends up in a poor experience for patients. 💎 Healthcare Design Systems: Doctolib: https://lnkd.in/enSUKdsS 👍
Health Design System (Gov.au): https://lnkd.in/gdGfY68Z
GE Healthcare: https://lnkd.in/gBXHzck5 👍
Health Community Toolkit: https://lnkd.in/gj_RhXHH
Healthblocks: https://lnkd.in/eqMF-qvS
NHS (Figma): https://lnkd.in/e8q9iBnH 👍
NordHealth: https://nordhealth.design 👍
OpenSRP: https://docs.opensrp.io
Queensland: https://lnkd.in/eiFB3rcF 👍 --- 🧲 Useful resources: Digital Health Product Design Playbook, via Alex Bilstein
https://playbook.hanno.co What Working In Healthcare Design Is Like, by Chris Kiess
https://lnkd.in/em5j_BC4 Healthcare UX Research: Getting Started, by Jim Ross
https://lnkd.in/ehnB-bgQ Building a Design System For Healthcare, by Better
https://lnkd.in/eZrE7hyv Health UI Kit (Figma), by Apple
https://lnkd.in/eWPYVYp8 Healthcare UX (Notion), by Alex Bilstein 👍
https://designwith.care --- 📚 Useful books: ⌾ Design For Care, by Peter Jones
⌾ Health Design Thinking, by Bon Ku, Ellen Lupton
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-healthcare-activity-7408420724744577025-y5FF?utm_source=share&utm_medium=member_ios&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Interaction Design, Vitaly, user-experience, design-systems, ux-design, healthcare

---

## Modal vs pages decision tree

This content provides a UX decision tree for choosing between modals and pages in user interface design. Modals work best for short, self-contained tasks and high-priority interactions, while pages are preferable for complex, multi-step processes that require full user attention. The guide emphasizes that modals should be used sparingly to prevent errors and data loss, but should generally be avoided for error messages, notifications, onboarding, and complex tasks, as they are often disruptive and prevent users from comparing information or navigating freely. Best practices include using non-blocking dialogs by default, allowing users to close modals easily, and considering alternatives like side drawers or accordions to maintain context without blocking the entire UI.

**Full post:**

Modal vs. Page: UX Decision Tree (https://lnkd.in/dvqJEijU), a helpful decision tree with a practical guide on how to choose between interrupting a flow or adding a new page. Kindly shared by Ryan Neufeld. Decision tree (High-Res PNG): https://lnkd.in/dKvrde7v --- Modals help keep the context of the current screen. We use them for single, self-contained tasks where users should jump in, complete a task, and return to where they were. They do work well for high-priority, short interactions (e.g. alerts, destructive actions, timeouts). Wizards or tabbed navigation within modals doesn’t work too well, even in complex enterprise products — side panels or drawers typically work better. Often users have to compare or reference data points, but modals block this behavior, so they re-open the same page in multiple tabs instead. For more complex flows and multi-step processes pages work best. Page also works best when it demands user’s full attention without reference to the previous screen. Drawers work for sub-tasks that are too complex for a simple modal, but don’t need a full page navigation. --- 🚫 Modals are often disruptive, invasive and confusing.
🚫 They make it difficult to compare and copy-paste.
✅ Yet modals allow users to maintain multiple contexts.
✅ Useful to prevent irreversible errors and data loss.
✅ Useful if sending users to a new page would be disruptive. ✅ Show a modal only if users will value the disruption.
✅ By default, prefer non-blocking dialogs (“non-modals”).
✅ Allow users to minimize, hide or restore dialog later.
✅ Use a modal to slow users down, e.g. verify complex input.
✅ Give a way out with “Close”, ESC key, click outside the box. 🚫 Avoid modals for error messages.
🚫 Avoid modals for feature notifications.
🚫 Avoid modals for onboarding tutorials.
🚫 Avoid modals for complex, lengthy multi-step-tasks.
🚫 Avoid multiple nested modals and use prev/next instead.
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_modal-vs-page-ux-decision-tree-https-activity-7417845782365560832-yhCa?utm_source=share&utm_medium=member_ios&rcm=ACoAAAedtLEBej9lid5LHaT1t_HU5bsQdM5QCJ0) · Vitaly Friedman · 2026-06-15
**Tags:** Interaction Design, Vitaly, visual thinking, best-practices, ux-design, web-design, user-interface

---

## Practical guide to designing icons

This practical guide to icon design provides essential guidelines for creating consistent UI icons using an 8-pixel grid system at sizes of 16, 24, or 32 pixels. Key principles include maintaining uniform icon sizes, aligning objects to the pixel grid, using single colors for UI icons and two colors for branding, and employing filled icons for recognition while stroked icons work better for fine details. The guide emphasizes optical balance over mathematical precision, noting that squares visually outweigh circles and triangles, which should be sized larger or wider to appear balanced. Additional resources are provided covering icon design fundamentals, practical techniques for achieving visual balance, and best practices for maintaining scalable icon systems in design.

**Full post:**

🪴 A Practical Guide To Designing Icons (+ Figma templates). Guidelines and kits for icons in design systems and UIs ↓ ✅ Use the 8-pixel grid to build icons at 16, 24 or 32px.
✅ All icons should be the same size when you build them.
✅ Start adding sizes when you need more detail/complexity.
✅ Start with the largest size and then go down from there.
✅ Use 1 color for UI icons (black), 2 colors for brand. ✅ Always align objects to the pixel grid to stay consistent.
✅ For optical grid, add padding at the edge = stroke weight.
✅ Use filled icons for easier recognition, stroked for tiny details. ✅ For border, use sharp corner, 0.5px or 2px corner radius.
✅ Size must be in proportion to container where an icon lives. ✅ For optical balance, always trust your eye over your math.
✅ The easiest test for visual balance is by blurring the items.
✅ In same size, squares always outweigh circles and triangles.
✅ Circles and triangles should be higher/wider to look balanced.
✅ Draw a circle around triangular icons to properly align them. 🌱 Getting Started A Complete Guide To Iconography, by Bonnie Kate Wolf
https://lnkd.in/ejkCYZfe Free Video Course on Icon Design, by Matt D. Smith
https://introtoicons.com/ Figma Icon Starter Kit Template, by Gavin McFarland
https://lnkd.in/eTzNkwsG Figma Icon Grid Templates (iOS, Android, Web), by Trevor Kay
https://lnkd.in/esCV_SPh Grids and Keyshapes (+ Figma template)
https://lnkd.in/eEgVTa65 Fundamentals of Icon Design, by Noah Jacobus
https://lnkd.in/eCjvbzEt Seven Principles of Icon Design, by Helena Zhang
https://lnkd.in/eijpavqw 🌳 Practicing Icon Design Designing Well-Balanced UI Icons, by Slava Shestopalov
https://lnkd.in/ed3fg_8d Optical Effects In UIs, by Slava Shestopalov
https://lnkd.in/e43muuJm Pixel-Snapping, by Helena Zhang
https://lnkd.in/enQfVVKW Grids & Keylines, by Helena Zhang
https://lnkd.in/e2-ZqjCS Practical Insights In Icon Design, by Filip Greš
https://lnkd.in/ecdVEgCt 🌲 Icons In Design Systems How We Design And Scale A System of Icons, by Elena Searcy
https://lnkd.in/er5tF2_y How To Maintain Icon Libraries, by Rafael Sepeda Errera
https://lnkd.in/dKEgHda4 Spotify Case Study: Icon System Refresh
https://lnkd.in/eeEACW_H Customize Icons To Complement Fonts, by Gleb Stroganov
https://lnkd.in/eGYvRjMk How To Integrate And Style Icon Systems, by Claudia Romano
https://lnkd.in/egrkD3EH #ux #design | 36 comments on LinkedIn

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-design-activity-7156559022618267648-F6ZC?utm_source=share&utm_medium=member_ios) · Vitaly Friedman · 2026-06-15
**Tags:** Iconography, visual thinking, design-systems, ui-design, icon-design, ux-design

---

## UX Guidelines for almost everything

Vitaly Friedman has compiled a comprehensive collection of UX design guidelines and best practices covering interface design patterns (such as dashboards, data tables, filters, onboarding, and search) as well as inclusive design principles for accessibility. The resource includes curated links to detailed articles on topics ranging from AI interfaces and animations to features like carousels, modals, and pagination, along with guides for designing for users with various disabilities and needs. This centralized repository serves as a go-to reference for designers seeking evidence-based UX solutions and represents contributions from the broader UX community's research and case studies.

**Full post:**

🪴 UX Guidelines For... Almost Everything! Design patterns and best practices, from dashboards, data tables and filters to onboarding, sorting and search UX — all in one single post, from my recent writings ↓ ✤ Interface Design Patterns AI: https://lnkd.in/eXP-_ZSb
Animation: https://lnkd.in/edujesBM
Authentication: https://lnkd.in/eq_bb8BY
Autocomplete: https://lnkd.in/eTdvjJ4V
Back Button UX: https://lnkd.in/eJmyxrqH
Cancel UX: https://lnkd.in/eU8EZYXD
Carousels: https://lnkd.in/ejxsRANp
Context Menus: https://lnkd.in/eu9p2Nce
Dashboards: https://lnkd.in/eDWaJAeJ
Data Grids: https://lnkd.in/e3UkthxP
Data Tables (Desktop): https://lnkd.in/ePWbJfXW
Data Tables (Mobile): https://lnkd.in/eGfrEzDC
Data Visualization: https://lnkd.in/ebDrrQic
Design systems: https://lnkd.in/ePYzgDxX
Drag’n’Drop: https://lnkd.in/ezdaNsqp
Error Messages: https://lnkd.in/emprqntH
FAQ: https://lnkd.in/dyxifbkQ
Filters: https://lnkd.in/e9QRdqsq
Infinite Scroll: https://lnkd.in/e2E_TwEK
Loading Indicators: https://lnkd.in/epYtMHpQ
Localization: https://lnkd.in/ezCD6MpJ
Modals: https://lnkd.in/ecXzreWc
Multi-Lingual UX: https://lnkd.in/ekvCDMEC
Navigation: https://lnkd.in/eikbBNzr
Onboarding: https://lnkd.in/eFZw3Mgz
Pagination: https://lnkd.in/e9tq-57r
Pricing Pages: https://lnkd.in/ebZHm83j
Progress Steps: https://lnkd.in/eAVwKtjM
Reviews and Ratings: https://lnkd.in/etciENfd
Search: https://lnkd.in/e2v7E2uq
Sorting: https://lnkd.in/eT_RWrmT
Sticky menus: https://lnkd.in/eeuaQ-qf
Table of Contents: https://lnkd.in/eSgeFh_3
Transitions: https://lnkd.in/eHwHSQDG
UI inspiration: https://lnkd.in/eD6uVF2A ✤ Inclusive Design Accessibility: https://lnkd.in/ekq2q7Zb
Autism: https://lnkd.in/ekujAteM
Colorblindness: https://lnkd.in/eqjvPgSZ
Color contrast: hhttps://lnkd.in/ecWS4ue7
Dyscalculia: https://lnkd.in/e8wyMWp4
Dyslexia: https://lnkd.in/ei9mncR7
Ethical design: https://lnkd.in/eiPdeZcB
Legibility: https://lnkd.in/eEarXzD8
Left-Handed Users: https://lnkd.in/eWyzRdy5
LGBTQI: https://lnkd.in/eumCiYrk
Mental Health: https://lnkd.in/eEaXjs9x
Older Adults: https://lnkd.in/e54f2FT2
Screen readers: https://lnkd.in/eaviMFkf
Sustainability: https://lnkd.in/etGZbrk9
Target sizes: https://lnkd.in/ePuc3mbJ
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-design-activity-7135206435843399680-U27Z?utm_source=share&utm_medium=member_desktop) · Vitaly Friedman · 2026-06-15
**Tags:** Accessibility, Interaction Design, Layout, visual thinking, user-experience, design-patterns, ux-design, web-design

---

## UX Guidelines for almost everything

Vitaly Friedman has compiled a comprehensive collection of UX design guidelines and best practices covering interface design patterns such as dashboards, data tables, filters, onboarding, and search functionality. The resource also includes extensive guidance on inclusive design principles, addressing accessibility needs for users with various disabilities and conditions including autism, colorblindness, dyslexia, and older adults. This consolidated resource serves as a single reference point for designers seeking established UX patterns and ethical design practices drawn from years of published research and case studies.

**Full post:**

🪴 UX Guidelines For... Almost Everything! Design patterns and best practices, from dashboards, data tables and filters to onboarding, sorting and search UX — all in one single post, from my recent writings ↓ ✤ Interface Design Patterns AI: https://lnkd.in/eXP-_ZSb
Animation: https://lnkd.in/edujesBM
Authentication: https://lnkd.in/eq_bb8BY
Autocomplete: https://lnkd.in/eTdvjJ4V
Back Button UX: https://lnkd.in/eJmyxrqH
Cancel UX: https://lnkd.in/eU8EZYXD
Carousels: https://lnkd.in/ejxsRANp
Context Menus: https://lnkd.in/eu9p2Nce
Dashboards: https://lnkd.in/eDWaJAeJ
Data Grids: https://lnkd.in/e3UkthxP
Data Tables (Desktop): https://lnkd.in/ePWbJfXW
Data Tables (Mobile): https://lnkd.in/eGfrEzDC
Data Visualization: https://lnkd.in/ebDrrQic
Design systems: https://lnkd.in/ePYzgDxX
Drag’n’Drop: https://lnkd.in/ezdaNsqp
Error Messages: https://lnkd.in/emprqntH
FAQ: https://lnkd.in/dyxifbkQ
Filters: https://lnkd.in/e9QRdqsq
Infinite Scroll: https://lnkd.in/e2E_TwEK
Loading Indicators: https://lnkd.in/epYtMHpQ
Localization: https://lnkd.in/ezCD6MpJ
Modals: https://lnkd.in/ecXzreWc
Multi-Lingual UX: https://lnkd.in/ekvCDMEC
Navigation: https://lnkd.in/eikbBNzr
Onboarding: https://lnkd.in/eFZw3Mgz
Pagination: https://lnkd.in/e9tq-57r
Pricing Pages: https://lnkd.in/ebZHm83j
Progress Steps: https://lnkd.in/eAVwKtjM
Reviews and Ratings: https://lnkd.in/etciENfd
Search: https://lnkd.in/e2v7E2uq
Sorting: https://lnkd.in/eT_RWrmT
Sticky menus: https://lnkd.in/eeuaQ-qf
Table of Contents: https://lnkd.in/eSgeFh_3
Transitions: https://lnkd.in/eHwHSQDG
UI inspiration: https://lnkd.in/eD6uVF2A ✤ Inclusive Design Accessibility: https://lnkd.in/ekq2q7Zb
Autism: https://lnkd.in/ekujAteM
Colorblindness: https://lnkd.in/eqjvPgSZ
Color contrast: hhttps://lnkd.in/ecWS4ue7
Dyscalculia: https://lnkd.in/e8wyMWp4
Dyslexia: https://lnkd.in/ei9mncR7
Ethical design: https://lnkd.in/eiPdeZcB
Legibility: https://lnkd.in/eEarXzD8
Left-Handed Users: https://lnkd.in/eWyzRdy5
LGBTQI: https://lnkd.in/eumCiYrk
Mental Health: https://lnkd.in/eEaXjs9x
Older Adults: https://lnkd.in/e54f2FT2
Screen readers: https://lnkd.in/eaviMFkf
Sustainability: https://lnkd.in/etGZbrk9
Target sizes: https://lnkd.in/ePuc3mbJ
[...]

**Source:** [LinkedIn](https://www.linkedin.com/posts/vitalyfriedman_ux-design-activity-7135206435843399680-U27Z) · Vitaly Friedman · 2026-06-15
**Tags:** Accessibility, Interaction Design, Layout, visual thinking, design-patterns, ux-design, ui-guidelines
