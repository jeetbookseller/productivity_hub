# productivity_hub v15-Alpha

Copyright © 2026 Jeet Bookseller. All Rights Reserved. This code is for demonstration purposes only. It may not be used, modified, or distributed for commercial or non-commercial purposes without my explicit written permission.

Web app at: https://jeetbookseller.github.io/productivity_hub/productivity_hub.html

Technical details of the App on: https://jeetbookseller.github.io/productivity_hub/technical_details.md

**Full Feature Set:**
- Capture (Bullet Journal + ⋮ NoteMenu + right-click + ☐ bulk select + copy+strike to Clarify + auto-clear) → Clarify (Eisenhower + ⋮ TaskMenu + right-click + tap done/undone + drag desktop) → Focus (Pomodoro + Queue + side-by-side wide + sidebar timer) → Confirm (Checklists + ⋮ edit+delete + right-click + tap-done) → Review (Stats + Streak Heatmap + Insights + 2-col dashboard wide)
- Unified: ⋮ 3-dot + right-click on all items, ☐ header checkbox (left) for bulk select, no long-press, no swipe
- Desktop (1280px+): Sidebar nav, full-width, side-by-side Focus, 2-col Review, compact items, live timer
- Explainer guide (Workflow, Bullet Journal, GTD Review, Pomodoro, Deep Work, Eisenhower, Desktop Mode)
- Desktop Mode, PWA Install, Test Suite (59 tests), Export/Import, Theme (default: System)
- Cohesive dark mode with muted gradients, brighter item text across all tabs

### Workflow Model
```
Capture → Clarify → Focus → Confirm → Review → Repeat
   │          │        │        │          │
   │          │        │        │          └─ Weekly stats, streak heatmap, insights, suggestions
   │          │        │        └─ Checklists with sections
   │          │        └─ Pomodoro timer + Focus Queue (3-5 tasks)
   │          └─ Eisenhower Matrix prioritization + drag-and-drop
   └─ Bullet journal quick notes + strikethrough + → Clarify

