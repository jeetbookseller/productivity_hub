# productivity_hub v16.9-Alpha

Copyright © 2026 Jeet Bookseller. All Rights Reserved. This code is for demonstration purposes only. It may not be used, modified, or distributed for commercial or non-commercial purposes without my explicit written permission.

Web app at: https://jeetbookseller.github.io/productivity_hub/productivity_hub.html

Technical details of the App on: https://jeetbookseller.github.io/productivity_hub/technical_details.md

### Full Feature Set
- Capture (Bullet Journal + shared ActionMenu with Copy Text + right-click + checkbox bulk select + copy+strike to Clarify + auto-clear) → Clarify (Eisenhower + shared ActionMenu + right-click + tap done/undone + drag desktop) → Focus (Pomodoro + Queue + side-by-side tablet+ + sidebar timer) → Confirm (Checklists + shared ActionMenu + right-click + tap-done + 2-col desktop) → Review (Stats + Streak Heatmap + Insights + responsive dashboard)
- Unified interactions: 3-dot action menu + right-click on all items, checkbox bulk select (left), no long-press, no swipe
- Shared UI primitives: reusable `ActionMenu` + `ConfirmDialog` with confirm-gated single-item delete flows
- Responsive dedup complete (P0): settings cards deduped with shared responsive wrapper; review/main layout JSX deduped using shared render helpers
- Desktop (1280px+): sidebar nav, full-width, compact items, live timer in Focus tab label
- Tablet (768px+): side-by-side Focus (equal flex-1 cols), 2-col Clarify/Confirm/Settings, constrained QuickAdd, Explainer 2-col grid
- Settings: Theme + Timer + Data + Install as App + Desktop Mode; always-expanded cards on tablet+, collapsible on mobile
- Explainer: 7 collapsible accordion sections on mobile, always-expanded 2-col grid on tablet+
- Data/test: Export/Import, Theme default System, cohesive dark mode, Test Suite (17 tests: 3 unit + 14 integration)

### Workflow Model
```text
Capture → Clarify → Focus → Confirm → Review → Repeat
   │          │        │        │          │
   │          │        │        │          └─ Weekly stats, streak heatmap, insights, suggestions
   │          │        │        └─ Checklists with sections
   │          │        └─ Pomodoro timer + Focus Queue (3-5 tasks)
   │          └─ Eisenhower Matrix prioritization + drag-and-drop
   └─ Bullet journal quick notes + strikethrough + → Clarify
```
