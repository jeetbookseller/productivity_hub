# Productivity Hub - Technical Details

## Development Progress Summary

**Last Updated:** February 11, 2026
**Current Version:** v16.1-Alpha
**Current Model:** Opus 4.6
**Previous Versions:** v6 → v9.8 (Sonnet 4.5), v10.0-alpha → v11.2-alpha (Opus 4.5), v12.0-alpha → v12.7-alpha (Opus 4.6), v14-Beta (Opus 4.6), v15-Alpha → v15_5-Alpha (Opus 4.6), v15_6 → v16-Alpha (Opus 4.6), v16.1-Alpha (Opus 4.6)

---

## 📦 Latest Release

**productivity_hub.html** (v16.1-Alpha)

### All Features:
- ✅ IndexedDB storage with automatic persistence
- ✅ Isolated FocusTimer (no app re-renders, `onTick` callback for sidebar timer)
- ✅ Quick-add bars, sticky headers, completed items persistence
- ✅ Edit/Delete lists (context menu), empty state handling
- ✅ **Test App Feature** — 55 automated tests with report generation
- ✅ **Desktop Mode** — Sidebar nav (1280px+), full-width layouts, compact items
- ✅ **Tablet Mode** — Side-by-side Focus, 2-col Settings flexbox, constrained QuickAdd (768px+)
- ✅ **Desktop Side-by-Side Focus** — Timer (flex-1) + Focus Queue (flex-1) on tablet+
- ✅ **Desktop Dashboard Review** — 2-column grid layout on wide
- ✅ **Sidebar Timer Indicator** — Live countdown replaces Focus label when timer running, pulsing dot
- ✅ **Right-Click Context Menus** — Clarify → TaskMenu, Capture → NoteMenu, Confirm → EditModal
- ✅ **PWA Install System** — Install guide, beforeinstallprompt handling, deployment files
- ✅ **Unified Interaction Model** — ⋮ 3-dot menu + ☐ header checkbox (left-side) + tap actions + right-click (desktop)
- ✅ **Capture** — Bullet journal with day sections, tap-to-edit (scroll guard), ⋮ NoteMenu (with Copy Text), ☐ bulk select, copy+strike to Clarify, auto-clear struck notes (30 days)
- ✅ **Clarify** — Eisenhower Matrix with colorful quadrant headers, ⋮ TaskMenu, ☐ bulk select, drag-and-drop (desktop), tap to toggle done/undone
- ✅ **Focus** — Pomodoro timer + Focus Queue (3–5 tasks, Deep Work), side-by-side on tablet+
- ✅ **Confirm** — Checklists with sections, tap to toggle done, ⋮ edit modal with delete option, ☐ bulk select, linked to Clarify tasks
- ✅ **Review** — Weekly stats, streak heatmap, matrix overview, pattern insights, next actions, 2-col dashboard on wide
- ✅ **Streak Heatmap** — GitHub-style 13-week grid, 5-level color intensity, tap-for-details, streak counters
- ✅ **Day Rotation** — Auto-archives daily stats to dHist, resets counters on date change
- ✅ **Explainer** — Collapsible sections on mobile (7 accordion cards), always-expanded 2-col grid on desktop
- ✅ **Settings** — 2-column flexbox on tablet+ (Theme/Data/Desktop left, Timer/Install right); collapsible Install+Desktop on mobile only
- ✅ **Welcome & About** — First-launch welcome overlay (IndexedDB-aware check) + ? icon About modal
- ✅ **Sample Data** — Onboarding seed data on first launch
- ✅ **Task ↔ Checklist Linking** — Link Clarify tasks to Confirm checklists, bidirectional navigation, all-done suggestion
- ✅ **Task 3-Dot Menu** — Consolidated actions: Edit, Done/Undone, → Focus, Link/Open Checklist, Delete
- ✅ **Workflow Navigation** — Capture → Clarify → Focus → Confirm → Review → More
- ✅ Default theme: System, default quadrant: Eliminate
- ✅ **Dark mode polish** — Cohesive dark mode across all tabs
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

### Phase 8: Desktop Enhancement (v15_1 - v15_5) — Opus 4.6

### v15_1-Alpha
- **Sidebar Navigation (1280px+):** Vertical nav replaces bottom tab bar, Help at bottom
- **`useWide()` hook:** 1280px breakpoint detection
- **Full-width layouts:** `max-w-5xl` (was `max-w-2xl`)
- **Compact items:** `.gcard` padding reduced on wide
- **Multi-column grids:** Confirm 2-col, Clarify 2-col (768px+)
- **CSS overhaul:** Split media queries (768px tablet, 1280px desktop), removed most `!important`
- **Focus Queue drag guard:** `draggable={desk}` added
- **Done task tap → toggle undone** (Clarify tap behavior changed from EditModal to done/undone toggle)

### v15_2-Alpha
- **Focus side-by-side layout (wide):** Timer + compact stats (340px left), Focus Queue (right)
- **Review dashboard grid (wide):** 2-column layout
- **Right-click context menus:** Clarify → TaskMenu, Capture → NoteMenu, Confirm → EditModal
- **Sidebar timer indicator:** Live countdown replaces Focus tab label when running, pulsing dot
- **`onTick` callback:** FocusTimer reports `{left, run, mode}` to parent via stable `useCallback`

### v15_3-Alpha
- **Fixed emoji encoding:** All double-encoded UTF-8 emojis throughout file corrected
- **Updated help documentation** for all new desktop features
- **Tests:** 52 → 59

### v15_4-Alpha
- **Compact desktop items:** Reduced padding, smaller checkboxes/text/gaps on md+
- **Wider tablet content area:** `max-w-2xl` → `max-w-5xl`
- **No max-width on wide desktop:** Content fills full width with `px-8` padding
- **Collapsible Settings sections:** Install as App and Desktop Mode as collapsible cards
- **Desktop Mode moved from Explainer to Settings**

### v15_5-Alpha
- **Confirm 2-column layout on desktop/tablet:** `rListContent()` extracted as reusable renderer
- **Each column self-contained:** Own title, + button, linked task banner, quick-add input

### Phase 9: Responsive Layout & UX Polish (v15_6 - v16) — Opus 4.6

### v15_6-Alpha
- **Startup popup fix:** Welcome modal no longer shows on every refresh; uses direct IDB check instead of `usePersistedState` sync fallback
- **Settings too wide on desktop:** Added 2-column grid layout at 1280px+
- **Clarify QuickAdd constrained:** Limited to matrix column width on wide desktop
- **Focus timer equal columns:** Changed from fixed `w-[340px]` to `flex-1 min-w-0` for equal width
- **Copy Text in Capture ⋮ menu:** New "Copy Text" button copies note text to clipboard with toast confirmation

### v15_7-Alpha
- **Tablet mode gets desktop features:** Settings 2-col, QuickAdd constrained, Focus side-by-side now trigger at `desk` (768px+) instead of `wide` (1280px+)
- **Explainer desktop formatting:** Max-width 5xl container, 2-column card grid on tablet+

### v15_8-Alpha
- **Settings 2-column flexbox layout:** Left column (Theme, Data, Desktop Mode) + Right column (Timer Duration, Install as App) with independent card heights
- **Conditional collapsibles:** Install as App and Desktop Mode always-expanded on tablet+, collapsible accordion on mobile only

### v15_9-Alpha
- **Explainer collapsible sections on mobile:** 7 accordion cards (Workflow, Daily, Bullet Journal, GTD, Pomodoro, Deep Work, Matrix) default collapsed with chevron toggle
- **Desktop Explainer unchanged:** All sections fully expanded, no chevrons, non-interactive headers
- **`helpExp` state + `toggleHelp` helper** for accordion toggle

### v16-Alpha
- **Version bump:** v15_9 → v16 (major responsive layout overhaul complete)
- **Test cleanup:** Removed 7 stale/trivial tests (Reminder CRUD, Wide Desktop Hook, Right-Click Context Menu, Compact Timer CSS, Batch Select Left Position), added 3 new tests (Settings Flexbox Desk, Explainer Collapsible State, Explainer Desktop Always Open), updated Focus Side-by-Side test for `desk` breakpoint
- **Tests:** 59 → 55 (net reduction from removing stale tests)

### v16.1-Alpha ← CURRENT
- **v17 Refactor Step 1 (merged):** Extracted `useAppData()` custom hook from App — all shared persisted state and CRUD handlers moved out of App into a standalone hook
- **v17 Refactor Step 2 (merged):** Created `AppDataCtx` context, `AppDataProv` provider, and `useApp()` convenience hook — render root wrapped with provider, App now reads shared state from context
- **v17 Refactor Step 3 (merged):** Extracted `CaptureSection` as standalone component from `rNotes()` — all capture-local state (newBullet, editingNote, noteMenu, bulletRef, notesByDate), functions (addBullet, handleBulletKeyDown, formatDateHeader, deleteBullet, updateBullet, toggleStrike, noteToTodo), effects (auto-clear struck notes 30d), and NoteMenu rendering now self-contained. Uses `useApp()` for shared state, receives selection props from App
- **Version stays v16.1-Alpha** while refactor is in progress (no UI changes, internal restructuring only)

---

## 🔮 Future Features

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
- ~~📱 Responsive Tablet/Desktop~~ → v16

---

## 📝 Feature Specifications

### Versioning System
- **Rule:** Small features increment minor (15_1 → 15_2), big features increment major (15 → 16)
- **Format:** `v16-Alpha`, `v15_1-Alpha`, etc.
- **Alpha tag:** Current release stage
- **Current:** v16.1-Alpha (v17 refactor in progress)

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
- **Bullet journal notes:** Day sections + Enter-to-add + tap-to-edit + ⋮ NoteMenu (Edit, Copy Text, Promote, Strikethrough, Delete) + auto-clear
- **Matrix drag-and-drop:** HTML5 Drag API (desktop only) for quadrant re-prioritization
- **Heatmap grid:** 13-week × 7-day grid, tap-to-inspect, streak counters
- **Desktop layout (1280px+):** Sidebar nav, full-width content (no max-w), multi-column grids, compact items
- **Tablet layout (768px+):** 5xl content area, Focus side-by-side, 2-col Clarify + Confirm + Settings
- **Confirm 2-col:** `rListContent()` renders each checklist; `grid grid-cols-2` on desktop with selected + next list
- **Focus layout (tablet+):** Side-by-side with equal `flex-1` columns (timer left, queue right)
- **Desktop Review:** 2-column dashboard grid
- **Sidebar timer:** Live countdown replaces Focus label when running, pulsing dot
- **Settings layout (tablet+):** 2-column flexbox — left (Theme, Data, Desktop Mode always-expanded), right (Timer, Install as App always-expanded); mobile keeps collapsible accordions for Install + Desktop Mode
- **Explainer layout:** 2-col grid on tablet+, collapsible accordion sections on mobile with `helpExp` state
- **Dark mode:** QUADS config has `dclr`/`dbdr`/`dtxt` properties; all visible text uses `dark:` variants

### Desktop Layout Architecture
```
< 768px  (mobile):   Bottom tab bar, single column, touch-first, 
                     collapsible Settings + Explainer sections
768px+   (tablet):   Side-by-side Focus, 2-col Clarify/Confirm/Settings,
                     5xl content, font bump, always-expanded Settings cards,
                     Explainer 2-col grid (always expanded)
1280px+  (wide):     Sidebar nav, full-width content (no max-w), 
                     2-col Review, compact items, right-click menus
```

### Workflow Model
```
Capture → Clarify → Focus → Confirm → Review → Repeat
   │          │        │        │          │
   │          │        │        │          └─ Weekly stats, streak heatmap, insights, suggestions
   │          │        │        └─ Checklists with sections, tap-to-done, ⋮ edit+delete
   │          │        └─ Pomodoro timer + Focus Queue (3-5 tasks), side-by-side on tablet+
   │          └─ Eisenhower Matrix + ⋮ menu + tap done/undone + drag (desktop) + right-click
   └─ Bullet journal quick notes + ⋮ menu + right-click + copy text + copy+strike to Clarify + ☐ bulk
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

### Emoji Encoding
- **Original issue:** File was double-encoded (UTF-8 bytes misread as cp1252, then re-saved as UTF-8), producing garbled sequences like `ðŸ"²` instead of `📲`
- **Fix applied in v15_4:** Python script using `char_to_byte()` with cp1252 reverse mapping to recover original UTF-8 bytes, then decode properly
- **Rule for future edits:** When editing via Python `str_replace` or file writes, always read/write with `encoding='utf-8'` and use proper Unicode emoji characters directly (e.g. `📲`, `🍎`, `→`, `•`). Never mix encoding methods.
- **If emojis appear garbled again:** Run the cp1252→UTF-8 reversal fix (see v15_4 development notes). The telltale sign is `ð` (U+00F0) appearing where emojis should be.

### Core Technologies
- React 18 (production CDN), Tailwind CSS (CDN), Babel (in-browser), IndexedDB, Single-file HTML

### State Management
- `usePersistedState` — auto-persistence to IndexedDB + localStorage sync
- `useAppData()` — custom hook extracting all shared persisted state and CRUD handlers from App (v17 refactor Step 1). Returns: `lists`, `setLists`, `todos`, `setTodos`, `reminders`, `setReminders`, `notes`, `setNotes`, `focus`, `setFocus`, `activeF`, `setActiveF`, `preset`, `setPreset`, `customT`, `setCustomT`, `tSet`, `poms`, `setPoms`, `met`, `setMet`, `fHist`, `setFHist`, `dHist`, `setDHist`, `toast`, `showT`, `tab`, `setTab`, `selList`, `setSelList`, `handleTimerComplete`, `handleUpdatePoms`, `clearCompleted`, `addFocus`, `doneFocus`, `doneList`, `doneTodo`, `undoneTodo`, `deleteTodo`, `linkTask`, `unlinkTask`, `openLinkedList`, `createAndLink`, `deleteListItem`, `deleteReminder`, `updateListName`, `deleteList`, `saveItem`, `seedSampleData`, `wkData`, `doneCount`
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
- `settExp` — collapsible sections in Settings (`{pwa, desk}`) — mobile only
- `helpExp` — collapsible sections in Explainer — mobile only
- `toggleHelp(key)` — helper to toggle Explainer accordion sections

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
| `App` | Main application shell — layout, routing, selection state, modals |
| `AppDataProv` | Context provider wrapping App — shares `useAppData()` via `AppDataCtx` |
| `CaptureSection` | Bullet journal capture tab — local state, NoteMenu, auto-clear, uses `useApp()` |
| `FocusTimer` | Isolated Pomodoro timer (memo + useReducer + onTick callback) |
| `Heatmap` | GitHub-style streak heatmap (13-week grid, tap-to-inspect) |
| `SelCheck` / `BulkActionBar` / `BulkDeleteConfirm` | Batch selection UI |
| `EditModal` | Create/edit tasks, lists, notes (with onDelete for list items) |
| `HelpModal` | Compact App Navigation popup (? icon) |
| `AboutModal` | Welcome overlay (first launch, IndexedDB-aware) + About modal |
| `TaskMenu` | 3-dot task menu in Clarify (Edit, Done/Undone, Focus, Link, Delete) |
| `NoteMenu` | 3-dot note menu in Capture (Edit, Copy Text, Promote to Clarify, Strikethrough, Delete) |
| `LinkPicker` | Modal to link/unlink/create checklists for tasks |
| `TestRunner` | Test suite (55 tests, 9 categories) |
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
- **Current phase:** Alpha. v17 refactor in progress — extracting App into sub-components (Steps 1-3 of 9 complete).
- **Working file:** `productivity_hub.html` (~195KB, ~2153 lines)
- **Key constraint:** Output token limits require incremental edits, not full-file rewrites
- **Encoding note:** File had double-encoded UTF-8 emojis (cp1252→UTF-8 chain). Fixed in v15_4.
- **Versioning:** Small features → minor bump (15_1, 15_2), big features → major bump (15, 16, 17)

**Full Feature Set:**
- Capture (Bullet Journal + ⋮ NoteMenu with Copy Text + right-click + ☐ bulk select + copy+strike to Clarify + auto-clear) → Clarify (Eisenhower + ⋮ TaskMenu + right-click + tap done/undone + drag desktop) → Focus (Pomodoro + Queue + side-by-side tablet+ + sidebar timer) → Confirm (Checklists + ⋮ edit+delete + right-click + tap-done + 2-col desktop) → Review (Stats + Streak Heatmap + Insights + 2-col dashboard wide)
- Unified: ⋮ 3-dot + right-click on all items, ☐ header checkbox (left) for bulk select, no long-press, no swipe
- Desktop (1280px+): Sidebar nav, full-width, 2-col Review, compact items, live timer
- Tablet (768px+): Side-by-side Focus (equal flex-1 cols), 2-col Clarify/Confirm/Settings (flexbox), constrained QuickAdd, Explainer 2-col grid
- Settings: Theme + Timer + Data + Install as App + Desktop Mode; flexbox 2-col on tablet+ with always-expanded cards; collapsible on mobile
- Explainer: 7 collapsible accordion sections on mobile, always-expanded 2-col grid on tablet+
- Test Suite (55 tests, cleaned), Export/Import, Theme (default: System), cohesive dark mode

---

## 🔧 v17 Refactor — Simplification & UI Smoothness

**Goal:** Reduce codebase complexity, eliminate duplication, improve maintainability and UI smoothness while keeping the exact same feature set.

---

### Priority 1: Extract App into Sub-Components + useAppData Hook (~300 lines net savings)

**Problem:** App component (~900 lines) contains ALL state, handlers, and render functions
**Solution:** 8-step extraction into standalone components + shared context

#### Step-by-Step Breakdown

| Step | Description | Status |
|------|-------------|--------|
| **Step 1** | Extract `useAppData()` custom hook — move all shared persisted state (todos, lists, notes, focus, metrics, timers, tab, selList) and CRUD handlers (addFocus, doneTodo, saveItem, seedSampleData, etc.) out of App into a reusable hook | ✅ **Merged** |
| **Step 2** | Create `AppDataCtx` context + `AppDataProv` provider + `useApp()` convenience hook — wrap render root so all child components can access shared state via context instead of prop-drilling | ✅ **Merged** |
| **Step 3** | Extract `CaptureSection` from `rNotes()` — move all capture-local state (newBullet, editingNote, noteMenu, bulletRef, notesByDate), functions (addBullet, handleBulletKeyDown, formatDateHeader, deleteBullet, updateBullet, toggleStrike, noteToTodo), effects (auto-clear struck notes 30d), and NoteMenu rendering into standalone component. Uses `useApp()` for shared state, receives selection props from App | ✅ **Merged** |
| **Step 4** | Extract `ClarifySection` from `rTodos()` — move Eisenhower matrix rendering, quadrant headers, task list with drag-and-drop, QuickAdd, TaskMenu state, and task interaction handlers into standalone component | ⏳ **Pending** |
| **Step 5** | Extract `FocusSection` from `rFocus()` — move FocusTimer integration, focus queue rendering, timer controls, side-by-side layout logic into standalone component | ⏳ **Pending** |
| **Step 6** | Extract `ConfirmSection` from `rLists()` — move checklist rendering (`rListContent`), list tabs, ListMenu state, edit/delete list logic, 2-column layout into standalone component | ⏳ **Pending** |
| **Step 7** | Extract `ReviewSection` from `rReview()` — move weekly stats, streak heatmap, matrix overview, pattern insights, next actions, 2-column dashboard into standalone component | ⏳ **Pending** |
| **Step 8** | Extract `SettingsSection` from `rMore()` — move theme picker, timer duration, data management, install guide, desktop mode, explainer into standalone component | ⏳ **Pending** |
| **Step 9** | Clean up App shell — App becomes thin layout shell (sidebar/tab-bar + content area). Verify all 55 tests still pass | ⏳ **Pending** |

#### What `useAppData()` Returns (Step 1 — merged)
```
State:      lists, todos, reminders, notes, focus, activeF, preset, customT, tSet,
            poms, met, fHist, dHist, toast, tab, selList
Setters:    setLists, setTodos, setReminders, setNotes, setFocus, setActiveF,
            setPreset, setCustomT, setPoms, setMet, setFHist, setDHist, setTab, setSelList
Handlers:   handleTimerComplete, handleUpdatePoms, clearCompleted, addFocus,
            doneFocus, doneList, doneTodo, undoneTodo, deleteTodo, linkTask,
            unlinkTask, openLinkedList, createAndLink, deleteListItem,
            deleteReminder, updateListName, deleteList, saveItem, seedSampleData
Toast:      showT
Derived:    wkData, doneCount
```

---

### Priority 2: Eliminate Desktop/Mobile JSX Duplication (~250 lines saved)
- **Problem:** `rFocus`, `rReview`, `rMore/settings`, main layout all render TWO complete JSX branches (desk vs mobile)
- **Worst offender:** Settings is fully copy-pasted for desktop vs mobile
- **Solution:** Render once, use responsive Tailwind classes (`flex flex-col lg:flex-row`, `grid grid-cols-1 lg:grid-cols-2`)
- Only JS-conditional where truly needed (sidebar vs tab-bar)
- **Status:** ⏳ Pending

### Priority 3: Unified ContextMenu + ConfirmDialog (~120 lines saved)
- **Problem:** 3 near-identical menu components (`TaskMenu`, `NoteMenu`, `ListMenu`) + 2 confirmation modals (`DeleteConfirmation`, `BulkDeleteConfirm`)
- **Solution:** Single `<ContextMenu items={[{icon, label, onClick, destructive?}]} title onClose />`
- Single `<ConfirmDialog title message onConfirm onCancel variant="danger"|"info" />`
- **Status:** ⏳ Pending

### Priority 4: StickyHeader + CSS Class Abstraction (~80 lines saved)
- **Problem:** Every section repeats: `<div className={\`sticky ${wide?"top-0 -mx-8":"top-14 md:top-16 -mx-4 md:-mx-8"} z-10 glass px-4 md:px-6 py-3 md:py-4 mb-4\`}>`
- Repeated class combos: `text-bark-600 dark:text-sand-100`, `bg-sand-200 dark:bg-bark-600`, etc.
- **Solution:** `<StickyHeader>` component + Tailwind `@apply` semantic classes (`.text-primary`, `.text-secondary`, `.btn-primary`, `.btn-ghost`)
- **Status:** ⏳ Pending

### Priority 5: UI Smoothness Enhancements (adds ~30 lines)
- CSS transitions on tab content switches (`opacity 150ms`)
- `@keyframes slideIn` for list item additions/removals
- Exit animations for modals (currently only `anim-in` for enter)
- Debounce `usePersistedState` IndexedDB writes (300ms) — currently writes on every keystroke
- Virtual scrolling consideration for 100+ item lists
- **Status:** ⏳ Pending

### Priority 6: Lazy-Load Test Suite (restructure, ~0 net)
- **Problem:** 200-line test suite evaluates on page load even when never used
- **Solution:** Wrap in function, only evaluate when Test tab is opened
- Alternative: simplify test cases (many are verbose smoke tests that could be 1/3 the size)
- **Status:** ⏳ Pending

### Implementation Strategy
- **v17.0:** Priorities 1-3 (component extraction + dedup + unified menus) — biggest structural change
- **v17.1:** Priorities 4-6 (polish, smoothness, cleanup) — refinement pass
- Use incremental edits, verify all 55 tests pass after each step
- Version stays at v16.1-Alpha until refactor is complete, then bumps to v17

### Summary Table

| # | Change | Lines Saved | UI Impact | Difficulty | Status |
|---|--------|-------------|-----------|------------|--------|
| 1 | Extract sub-components + useAppData | ~300 | High (fewer re-renders) | Medium | Steps 1-3 done, Steps 4-9 pending |
| 2 | CSS-only responsive (kill JSX duplication) | ~250 | High (smoother, consistent) | Medium | Pending |
| 3 | Unified ContextMenu + ConfirmDialog | ~120 | Medium (consistency) | Easy | Pending |
| 4 | StickyHeader + @apply classes | ~80 | Low (cleaner code) | Easy | Pending |
| 5 | Transitions + debounce | +30 | High (smoothness) | Easy | Pending |
| 6 | Lazy-load test suite | ~0 | Low | Easy | Pending |

**Estimated total:** ~750 lines removed, ~30 added = ~720 net reduction (from ~2118 to ~1400 lines)

---

**End of Progress Summary**
