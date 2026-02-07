# Productivity Hub - Technical Details

## Development Progress Summary

**Last Updated:** February 7, 2026  
**Current Version:** v15_3-Alpha  
**Current Model:** Opus 4.6  
**Previous Versions:** v6 → v9.8 (Sonnet 4.5), v10.0-alpha → v11.2-alpha (Opus 4.5), v12.0-alpha → v12.7-alpha (Opus 4.6), v14-Beta (Opus 4.6), v15-Alpha → v15_3-Alpha (Opus 4.6)

---

## 📦 Latest Release

**productivity-hub-v15_3-alpha.html**

### All Features:
- ✅ IndexedDB storage with automatic persistence
- ✅ Isolated FocusTimer (no app re-renders, `onTick` callback for sidebar timer)
- ✅ Quick-add bars, sticky headers, completed items persistence
- ✅ Edit/Delete lists (context menu), empty state handling
- ✅ **Test App Feature** — 59 automated tests with report generation
- ✅ **Desktop Mode** — Sidebar nav (1280px+), full-width layouts, compact items
- ✅ **Desktop Side-by-Side Focus** — Timer left (340px) + Focus Queue right on wide
- ✅ **Desktop Dashboard Review** — 2-column grid layout on wide
- ✅ **Sidebar Timer Indicator** — Live countdown replaces Focus label when timer running, pulsing dot
- ✅ **Right-Click Context Menus** — Clarify → TaskMenu, Capture → NoteMenu, Confirm → EditModal
- ✅ **PWA Install System** — Install guide, beforeinstallprompt handling, deployment files
- ✅ **Unified Interaction Model** — ⋮ 3-dot menu + ☐ header checkbox (left-side) + tap actions + right-click (desktop)
- ✅ **Capture** — Bullet journal with day sections, tap-to-edit (scroll guard), ⋮ NoteMenu, ☐ bulk select, copy+strike to Clarify, auto-clear struck notes (30 days)
- ✅ **Clarify** — Eisenhower Matrix with colorful quadrant headers, ⋮ TaskMenu, ☐ bulk select, drag-and-drop (desktop), tap to toggle done/undone
- ✅ **Focus** — Pomodoro timer + Focus Queue (3–5 tasks, Deep Work), side-by-side on wide
- ✅ **Confirm** — Checklists with sections, tap to toggle done, ⋮ edit modal with delete option, ☐ bulk select, linked to Clarify tasks
- ✅ **Review** — Weekly stats, streak heatmap, matrix overview, pattern insights, next actions, 2-col dashboard on wide
- ✅ **Streak Heatmap** — GitHub-style 13-week grid, 5-level color intensity, tap-for-details, streak counters
- ✅ **Day Rotation** — Auto-archives daily stats to dHist, resets counters on date change
- ✅ **Explainer** — Workflow guide, Bullet Journal, GTD Review, Pomodoro, Deep Work, Eisenhower, Desktop Mode
- ✅ **Welcome & About** — First-launch welcome overlay + ? icon About modal
- ✅ **Sample Data** — Onboarding seed data on first launch
- ✅ **Task ↔ Checklist Linking** — Link Clarify tasks to Confirm checklists, bidirectional navigation, all-done suggestion
- ✅ **Task 3-Dot Menu** — Consolidated actions: Edit, Done/Undone, → Focus, Link/Open Checklist, Delete
- ✅ **Workflow Navigation** — Capture → Clarify → Focus → Confirm → Review → More
- ✅ Default theme: System, default quadrant: Eliminate
- ✅ **Dark mode polish** — Cohesive dark mode across all tabs
- ✅ **Brighter text** — `text-bark-700 dark:text-cream-100 font-medium` for item text across all sections
- ✅ **Fixed emoji encoding** — All double-encoded UTF-8 emojis corrected (cp1252→UTF-8 reversal)

---

## ✅ Completed Features (All Versions)

### Phase 1: Foundation (v6 - v8)
- Core app structure (React single-page, Tailwind CSS)
- Pomodoro Focus Timer with work/break cycles
- To-Do with Eisenhower Matrix (Urgent/Important quadrants)
- Lists with sections and checkboxes
- Reminders with time/date and calendar export (.ics + Google Calendar)
- Notes with title/content
- Archive system (swipe to archive, restore/delete)
- Stats tracking (daily/weekly pomodoros, tasks, focus time)
- Theme support (Light/Dark/System)
- Swipe gestures, action menus, Focus Queue (drag-to-reorder, max 5)

### Phase 2: Polish & UX (v9.0 - v9.8) — Sonnet 4.5
- **v9.0** — IndexedDB migration + Isolated FocusTimer
- **v9.2** — Quick-add bars + Sticky headers
- **v9.3** — 35 automated tests
- **v9.4** — Desktop responsive mode (768px+ breakpoint)
- **v9.5** — Completed items persistence (stay visible with strikethrough)
- **v9.6** — Focus Queue max 5 + drag-to-reorder
- **v9.7** — Edit/Delete lists via long-press menu
- **v9.8** — Empty states + PWA install system

### Phase 3: Batch Selection (v10.0 - v11.0) — Opus 4.5
- **v10.0** — Selection mode architecture (plan + state)
- **v10.1** — Selection UI (checkboxes + header count)
- **v10.2** — Selection actions (bulk done + bulk delete)
- **v11.0-alpha** — Polish, exit on empty, confirm gate (≥3 items), tests 35→35

### Phase 4: UX Polish (v11.1 - v11.2) — Opus 4.5
- **v11.1-alpha** — Tab reorder (Capture first) + Help consolidation
- **v11.2-alpha** — Bullet journal Quick Notes + Remove Reminders tab

### Phase 5: Workflow Redesign (v12.0 - v12.7) — Opus 4.6

### v12.7-alpha
- **Task ↔ Checklist Linking** — Bidirectional link between Clarify tasks and Confirm checklists
- **Task Long-Press Menu** — Centered modal with: Edit, → Focus Queue, 📋 Link/Open Checklist, Delete

### v12.6-alpha
- **Welcome & About Modal** — First-launch overlay + About modal
- **Onboarding Sample Data** — Seeds on first launch

### v12.5-alpha
- **Streak Heatmap** — GitHub-style 13-week × 7-day grid in Review tab
- **Day Rotation Logic** — Archives daily stats, resets counters
- **Tests:** 35 → 39

### v12.4-alpha
- **Dark mode cohesion pass** — Unified dark mode across all tabs

### v12.3-alpha
- **Explainer rewrite** — Full workflow guide, daily routines, methodology deep-dives

### v12.2-alpha
- **Matrix Drag-and-Drop** — `draggable` on tasks, quadrant drop targets
- **Review Tab** — Weekly stats/chart, matrix overview, dynamic insights

### v12.1-alpha
- **Tap-to-edit** — Clarify/Confirm: tap → EditModal. Capture: tap → inline edit
- **Workflow rename** — To-Do→Clarify, Quick→Capture, Lists→Confirm

### v12.0-alpha
- **Archive removed** — Clear Completed (🧹) button
- **Default quadrant** → `'nn'` (Eliminate)

### Phase 6: Beta Release (v14) — Opus 4.6

### v14-Beta
- **Version bump:** v12.7-alpha → v14-Beta (major version jump reflects maturity)
- **Capture UX Overhaul:**
  - Single tap → inline edit, Long-press → NoteMenu popup
  - Checkbox (top-right) → selection mode
  - Bulk actions: Move to Clarify, Strikethrough, Delete
  - Strikethrough timestamp (`struckAt`) + auto-clear (30 days)
- **Tests:** 39 → 46

### Phase 7: Unified Interaction Model (v15) — Opus 4.6

### v15-Alpha
- **Version bump:** v14-Beta → v15-Alpha (major interaction model overhaul)
- **Unified Interaction Model across all sections:**
  - **Removed all long-press** from Capture, Clarify, Confirm
  - **Removed all swipe gestures** from all sections (Swipe component deleted)
  - **Added ⋮ 3-dot menu** (MoreV icon) to every item row (always visible, prominent color)
  - **Header ☐ checkbox moved to LEFT** side in all sections (Capture, Clarify, Confirm)
  - **Touch overlap fix** — `data-menu-btn` attribute prevents ⋮ tap from triggering parent edit
  - **Scroll guard** on Capture tap-to-edit (10px threshold, closure-based, no hooks violation)
- **Interaction patterns per section:**
  - Capture: Tap to edit inline, ⋮ → Edit/Promote to Clarify/Strikethrough/Delete
  - Clarify: Tap to toggle done/undone, ⋮ → Done/Undone/Edit/Focus/Link/Delete, drag (desktop)
  - Confirm: Tap to toggle done, ⋮ → opens edit modal with Delete button
- **Tests:** 46 → 52

### Phase 8: Desktop Enhancement (v15_1 - v15_3) — Opus 4.6

### v15_1-Alpha
- **Sidebar Navigation (1280px+):** Vertical nav replaces bottom tab bar, Help at bottom
- **`useWide()` hook:** 1280px breakpoint detection
- **Full-width layouts:** `max-w-5xl` (was `max-w-2xl`)
- **Compact items:** `.gcard` padding reduced on wide
- **Multi-column grids:** Confirm 2-col, Clarify 2-col (768px+)
- **CSS overhaul:** Split media queries (768px tablet, 1280px desktop), removed most `!important`
- **Focus Queue drag guard:** `draggable={desk}` added
- **Stale CSS cleanup:** Removed `.reminder-card`, `.note-card`
- **Done task tap → toggle undone** (Clarify tap behavior changed from EditModal to done/undone toggle)

### v15_2-Alpha
- **Focus side-by-side layout (wide):** Timer + compact stats (340px left), Focus Queue (right)
- **Review dashboard grid (wide):** 2-column layout — stats/chart/matrix left, heatmap/insights/actions right
- **Right-click context menus:** Clarify → TaskMenu, Capture → NoteMenu, Confirm → EditModal
- **Sidebar timer indicator:** Live countdown replaces Focus tab label when running, pulsing dot (green=work, blue=break)
- **Mobile tab bar timer:** Same countdown + pulsing dot on mobile bottom nav
- **`onTick` callback:** FocusTimer reports `{left, run, mode}` to parent via stable `useCallback`
- **`fmtSidebar` helper:** Compact time format (e.g., "23:45")
- **Compact timer CSS:** `.timer-display` 3.5rem at 1280px+

### v15_3-Alpha ← CURRENT
- **Version bump** to v15_3-Alpha
- **Fixed emoji encoding:** All double-encoded UTF-8 emojis throughout file corrected (cp1252/Latin-1 → UTF-8 reversal)
- **Updated help documentation:**
  - Clarify: mentions tap-to-toggle done/undone, right-click (desktop)
  - Focus: mentions side-by-side layout, sidebar timer countdown
  - Review: mentions 2-column dashboard on desktop
  - Capture Migration: replaced long-press with right-click, reordered ⋮ first
  - New "Desktop Mode" explainer section (sidebar, layouts, right-click, live timer, drag)
  - AboutModal Clarify description updated (removed "Long-press")
- **Tests:** 52 → 59 (added: Wide Desktop Hook, Timer Info State, Focus Side-by-Side Wide, Review Dashboard Grid Wide, Sidebar Timer Format, Right-Click Context Menu, Compact Timer CSS)
- **Updated technical details** document

---

## 🔮 Future Features

### 🖱️ Right-Click Enhancement (Revisit)
Right-click currently opens ⋮ menu equivalent. Could add position-aware context menu in future.

### 📱 Mobile Gestures (Revisit)
If needed in future, could re-add swipe gestures selectively where they don't conflict.

### 🔄 Recurring Tasks
- Daily/weekly/monthly recurrence rules on Clarify tasks
- Auto-recreate on schedule, completion tracking

### 📋 Task Templates
- Save task+subtask combos as reusable templates
- Quick-create from template library

### 🏷️ Tags & Filters
- Add tags to tasks/notes, filter views by tag
- Cross-section tag search

### 🔍 Command Palette Search
Global search across all sections with keyboard shortcut activation.

### 💾 Storage Enhancement
Make data more resilient beyond IndexedDB browser storage.

### Completed (moved from Future)
- ~~📋 To-Do Absorbs Archive~~ → v12.0
- ~~📝 Rename Lists → Checklist~~ → v12.0
- ~~⚡ Quick Actions Refinement~~ → v12.1
- ~~🔗 Cross-Section Integration~~ → v12.1
- ~~🖱️ Matrix Drag-and-Drop~~ → v12.2
- ~~📊 Review Tab~~ → v12.2
- ~~🔥 Streak Heatmap~~ → v12.5
- ~~🎯 Unified Interaction Model~~ → v15
- ~~🖥️ Desktop Mode~~ → v15_1

---

## 📝 Feature Specifications

### Versioning System
- **Rule:** Small features increment minor (15_1 → 15_2), big features increment major (15 → 16)
- **Format:** `v15-Alpha`, `v15_1-Alpha`, etc.
- **Alpha tag:** Current release stage (reverted from Beta due to major interaction changes)
- **Current:** v15_3-Alpha

### UI Patterns Established (v15+)
- **⋮ 3-dot menu:** Always-visible vertical dots on every item (Capture notes, Clarify tasks, Confirm checklist items)
- **Right-click (desktop):** Opens same menu as ⋮ on all item rows
- **Tap actions:** Capture = inline edit, Clarify = toggle done/undone, Confirm = toggle done
- **☐ Header checkbox (LEFT):** Enters selection mode with per-item checkboxes on left
- **No long-press:** Removed from all sections
- **No swipe:** Removed from all sections
- **Scroll guard:** 10px touch movement threshold prevents accidental edits during scrolling
- **data-menu-btn:** Attribute on ⋮ buttons prevents touch event propagation to parent edit handlers
- **Glass effect:** Backdrop blur for headers/modals
- **Empty states:** Illustrated SVG + helpful message
- **Quick-add bars:** Bottom input with auto-focus
- **Sticky headers:** `top-0` on wide (no fixed header), `top-14/16` on mobile
- **Batch selection:** Header checkbox → checkboxes + bulk action bar
- **Bullet journal notes:** Day sections + Enter-to-add + tap-to-edit + ⋮ NoteMenu + strikethrough with auto-clear
- **Matrix drag-and-drop:** HTML5 Drag API (desktop only) for quadrant re-prioritization
- **Heatmap grid:** 13-week × 7-day grid, tap-to-inspect, streak counters
- **Desktop layout (1280px+):** Sidebar nav, full-width content, multi-column grids, compact items
- **Desktop Focus:** Side-by-side timer (340px) + queue
- **Desktop Review:** 2-column dashboard grid
- **Sidebar timer:** Live countdown replaces Focus label when running, pulsing dot
- **Dark mode:** QUADS config has `dclr`/`dbdr`/`dtxt` properties; all visible text uses `dark:` variants

### Desktop Layout Architecture
```
< 768px  (mobile):   Bottom tab bar, single column, touch-first
768px+   (tablet):   2-col Clarify grid, font bump, scrollbar
1280px+  (wide):     Sidebar nav, 5xl content, side-by-side Focus, 
                     2-col Review, compact items, right-click menus
```

### Workflow Model
```
Capture → Clarify → Focus → Confirm → Review → Repeat
   │          │        │        │          │
   │          │        │        │          └─ Weekly stats, streak heatmap, insights, suggestions
   │          │        │        └─ Checklists with sections, tap-to-done, ⋮ edit+delete
   │          │        └─ Pomodoro timer + Focus Queue (3-5 tasks), side-by-side on wide
   │          └─ Eisenhower Matrix + ⋮ menu + tap done/undone + drag (desktop) + right-click
   └─ Bullet journal quick notes + ⋮ menu + right-click + copy+strike to Clarify + ☐ bulk
```

### Color Scheme
- **Sage (green):** Primary actions, success, timer, selection, heatmap intensity, work mode dot
- **Terracotta (orange):** Delete, warnings, streak counter, today ring, Do First quadrant
- **Ocean (blue):** Capture/Notes, info, Review, Schedule quadrant, break mode dot
- **Lavender (purple):** Secondary, Eliminate quadrant, test badge
- **Bark (brown):** Text (bark-700 for items), backgrounds
- **Sand/Cream:** Light backgrounds, Delegate quadrant
- **Dark mode:** Muted/translucent variants (e.g. `terracotta-500/30`, `ocean-400/30`)

---

## 🐛 Known Issues

- **Desktop truncation override:** Uses `!important` CSS for `.truncate`
- **Drag-and-drop mobile:** HTML5 Drag API doesn't work on touch; use EditModal quadrant picker
- **dHist backfill:** Existing users from pre-v12.5 will have empty heatmap history
- **struckAt backfill:** Notes struck before v14-Beta lack `struckAt` timestamp
- **Checklist tab management:** Right-click context menu for rename/delete; may need ⋮ on tabs in future
- **Timer re-renders:** `onTick` fires every second, updating App state. Mitigated by stable `useCallback` ref and `React.memo` on FocusTimer

---

## 🔧 Technical Stack

### Core Technologies
- React 18 (production CDN), Tailwind CSS (CDN), Babel (in-browser), IndexedDB, Single-file HTML

### State Management
- `usePersistedState` — auto-persistence to IndexedDB + localStorage sync
- `ThemeProv` — `S.getSync()` initial + async IndexedDB load, default `'system'`
- `useDesk()` — desktop breakpoint detection (768px+)
- `useWide()` — wide desktop breakpoint detection (1280px+)
- `timerInfo` — `{left, run, mode}` state lifted from FocusTimer via `onTick` callback
- `onTimerTick` — stable `useCallback` ref to prevent FocusTimer re-renders
- `fmtSidebar` — compact timer format helper (`m:ss`)
- `React.useReducer` in FocusTimer, `React.memo` for performance
- `selMode`/`selSection`/`selIds`/`bulkConfirm` — batch selection
- `editingNote` — inline note editing
- `noteMenu` — NoteMenu 3-dot context menu state
- `taskMenu` — TaskMenu 3-dot context menu state
- `dragQ` — matrix drag-and-drop source tracking

### Storage Structure
```
IndexedDB: 'ProductivityHub' / Store: 'data'
Keys: todos, lists, notes, focus, theme, preset, customT, poms, met, dHist, fHist, tab, seenAbout
Todo fields: id, text, quad, cat, deadline, subtasks, poms, done, linkedList (optional)
Note fields: id, text, crAt, struck, struckAt (timestamp for auto-clear)
Test keys: __TEST__* (auto-cleaned)
Removed: arc, reminders, Swipe component
```

### Components
| Component | Purpose |
|-----------|---------|
| `App` | Main application with conditional wide/mobile layout |
| `FocusTimer` | Isolated Pomodoro timer (memo + useReducer + onTick callback) |
| `Heatmap` | GitHub-style streak heatmap (13-week grid, tap-to-inspect) |
| `SelCheck` / `BulkActionBar` / `BulkDeleteConfirm` | Batch selection UI |
| `EditModal` | Create/edit tasks, lists, notes (with onDelete for list items) |
| `HelpModal` | Compact App Navigation popup (? icon) |
| `AboutModal` | Welcome overlay (first launch) + About modal (? icon) |
| `TaskMenu` | 3-dot task menu in Clarify (Edit, Done/Undone, Focus, Link, Delete) |
| `NoteMenu` | 3-dot note menu in Capture (Edit, Promote to Clarify, Strikethrough, Delete) |
| `LinkPicker` | Modal to link/unlink/create checklists for tasks |
| `TestRunner` | Test suite (59 tests, 9 categories) |
| `QuickAdd` / `Chart` | Input, visualization |
| `ListMenu` / `DeleteConfirmation` / `Subtasks` | List management |
| `Empty.*` / `ThemeProv` / `I.*` | Empty states, theme, icons (includes MoreV) |

### CSS Architecture
```
@media (min-width: 768px)   → Tablet: 2-col Clarify, font bump, scrollbar
@media (min-width: 1280px)  → Wide: confirm-grid, compact .gcard, compact .timer-display
```

---

## 📞 Context for New Session

- **User:** Jeet
- **Project:** Productivity Hub web app (React single-page HTML)
- **Development style:** Iterative, version-based, incremental str_replace edits
- **Current phase:** Alpha (desktop enhancement). Stabilizing after desktop layout overhaul.
- **Working file:** `productivity-hub-v15_3-alpha.html` (~189KB, ~2224 lines)
- **Key constraint:** Output token limits require incremental edits, not full-file rewrites
- **Encoding note:** File had double-encoded UTF-8 emojis (cp1252→UTF-8 chain). Fixed in v15_3.
- **Versioning:** Small features → minor bump (15_1, 15_2), big features → major bump (15, 16, 17)

**Full Feature Set:**
- Capture (Bullet Journal + ⋮ NoteMenu + right-click + ☐ bulk select + copy+strike to Clarify + auto-clear) → Clarify (Eisenhower + ⋮ TaskMenu + right-click + tap done/undone + drag desktop) → Focus (Pomodoro + Queue + side-by-side wide + sidebar timer) → Confirm (Checklists + ⋮ edit+delete + right-click + tap-done) → Review (Stats + Streak Heatmap + Insights + 2-col dashboard wide)
- Unified: ⋮ 3-dot + right-click on all items, ☐ header checkbox (left) for bulk select, no long-press, no swipe
- Desktop (1280px+): Sidebar nav, full-width, side-by-side Focus, 2-col Review, compact items, live timer
- Explainer guide (Workflow, Bullet Journal, GTD Review, Pomodoro, Deep Work, Eisenhower, Desktop Mode)
- Desktop Mode, PWA Install, Test Suite (59 tests), Export/Import, Theme (default: System)
- Cohesive dark mode with muted gradients, brighter item text across all tabs

---

**End of Progress Summary**
