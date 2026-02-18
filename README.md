# productivity_hub v16.11-Alpha

Copyright © 2026 Jeet Bookseller. All Rights Reserved. This code is for demonstration purposes only. It may not be used, modified, or distributed for commercial or non-commercial purposes without my explicit written permission.

Web app at: https://jeetbookseller.github.io/productivity_hub/productivity_hub.html

Technical details of the App on: https://jeetbookseller.github.io/productivity_hub/technical_details.md

###Full Feature Set:
- Capture (Bullet Journal + ⋮ NoteMenu with Copy Text + right-click + ☐ bulk select + copy+strike to Clarify + auto-clear) → Clarify (Eisenhower + ⋮ TaskMenu + right-click + tap done/undone + drag desktop) → Focus (Pomodoro + Queue + side-by-side tablet+ + sidebar timer) → Confirm (Checklists + ⋮ edit+delete + right-click + tap-done + 2-col desktop) → Review (Stats + Streak Heatmap + Insights + 2-col dashboard wide)
- Unified: ⋮ 3-dot + right-click on all items, ☐ header checkbox (left) for bulk select, no long-press, no swipe
- Desktop (1280px+): Sidebar nav, full-width, 2-col Review, compact items, live timer
- Tablet (768px+): Side-by-side Focus (equal flex-1 cols), 2-col Clarify/Confirm/Settings (flexbox), constrained QuickAdd, Explainer 2-col grid
- Settings: Theme + Timer + Data + Install as App + Desktop Mode; flexbox 2-col on tablet+ with always-expanded cards; collapsible on mobile
- Explainer: 7 collapsible accordion sections on mobile, always-expanded 2-col grid on tablet+
- Test Suite (77 tests, cleaned), Export/Import, Theme (default: System), cohesive dark mode; modal exit animations, debounced writes, tab/item transitions

### Workflow Model
```
Capture → Clarify → Focus → Confirm → Review → Repeat
   │          │        │        │          │
   │          │        │        │          └─ Weekly stats, streak heatmap, insights, suggestions
   │          │        │        └─ Checklists with sections
   │          │        └─ Pomodoro timer + Focus Queue (3-5 tasks)
   │          └─ Eisenhower Matrix prioritization + drag-and-drop
   └─ Bullet journal quick notes + strikethrough + → Clarify

