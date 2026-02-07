# productivity_hub v15-Alpha

Copyright © 2026 Jeet Bookseller. All Rights Reserved. This code is for demonstration purposes only. It may not be used, modified, or distributed for commercial or non-commercial purposes without my explicit written permission.

Web app at: https://jeetbookseller.github.io/productivity_hub/productivity_hub.html

Progress Summary on: https://jeetbookseller.github.io/productivity_hub/progress_summary.md

### All Features:
- ✅ IndexedDB storage with automatic persistence
- ✅ Isolated FocusTimer (no app re-renders)
- ✅ Quick-add bars, sticky headers, completed items persistence
- ✅ Edit/Delete lists (context menu), empty state handling
- ✅ **Test App Feature** — 52 automated tests with report generation
- ✅ **Desktop Mode** — Responsive layout optimized for 768px+ screens
- ✅ **PWA Install System** — Install guide, beforeinstallprompt handling, deployment files
- ✅ **Unified Interaction Model** — ⋮ 3-dot menu + ☐ header checkbox (left-side) + tap actions across all sections
- ✅ **Capture** — Bullet journal with day sections, tap-to-edit (scroll guard), ⋮ NoteMenu, ☐ bulk select, copy+strike to Clarify, auto-clear struck notes (30 days)
- ✅ **Clarify** — Eisenhower Matrix with colorful quadrant headers, ⋮ TaskMenu, ☐ bulk select, drag-and-drop (desktop), done/undone toggle
- ✅ **Focus** — Pomodoro timer + Focus Queue (3–5 tasks, Deep Work)
- ✅ **Confirm** — Checklists with sections, tap to toggle done, ⋮ edit modal with delete option, ☐ bulk select, linked to Clarify tasks
- ✅ **Review** — Weekly stats (prominent chart titles), streak heatmap, matrix overview, pattern insights, next actions
- ✅ **Streak Heatmap** — GitHub-style 13-week grid, 5-level color intensity, tap-for-details, streak counters
- ✅ **Day Rotation** — Auto-archives daily stats to dHist, resets counters on date change
- ✅ **Explainer** — Workflow guide, Bullet Journal, GTD Review, Pomodoro, Deep Work, Eisenhower
- ✅ **Welcome & About** — First-launch welcome overlay + ? icon About modal
- ✅ **Sample Data** — Onboarding seed data on first launch (updated for v15 interaction model)
- ✅ **Task ↔ Checklist Linking** — Link Clarify tasks to Confirm checklists, bidirectional navigation, all-done suggestion
- ✅ **Task 3-Dot Menu** — Consolidated actions: Edit, Done/Undone, → Focus, Link/Open Checklist, Delete
- ✅ **Workflow Navigation** — Capture → Clarify → Focus → Confirm → Review → More
- ✅ Default theme: System, default quadrant: Eliminate
- ✅ **Dark mode polish** — Cohesive dark mode across all tabs
- ✅ **Brighter text** — `text-bark-700 dark:text-cream-100 font-medium` for item text across all sections

### Workflow Model
```
Capture → Clarify → Focus → Confirm → Review → Repeat
   │          │        │        │          │
   │          │        │        │          └─ Weekly stats, streak heatmap, insights, suggestions
   │          │        │        └─ Checklists with sections
   │          │        └─ Pomodoro timer + Focus Queue (3-5 tasks)
   │          └─ Eisenhower Matrix prioritization + drag-and-drop
   └─ Bullet journal quick notes + strikethrough + → Clarify

