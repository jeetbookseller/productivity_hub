# Productivity Hub - Release Notes

## Release Summary

**Last Updated:** February 18, 2026  
**Current Version:** v16.11-Alpha  
**Versioning Convention:** Small features increment minor (for example `v15_1` -> `v15_2`), big features increment major (for example `v15` -> `v16`).

## Table of Contents
- [Latest Release](#latest-release)
- [Release History](#release-history)

---

## Latest Release

**productivity_hub.html** (`v16.11-Alpha`)

### Release Focus
- In-app `TestRunner` modernized from name-switch pseudo-tests to structured tiered cases:
  - schema: `id`, `name`, `tier`, `area`, `run(ctx)`, optional `cleanup(ctx)`
- Added deterministic harness utilities in runner:
  - `assert`, `assertEq`, `assertIncludes`, `waitFor`
  - `withDomFixture`, `withStorageFixture`, `withStorageSnapshot`
  - strict cleanup registry execution
- Added tiered coverage gates:
  - `T0` (contract/boot) must pass 100%
  - `T1` (workflow behavior) must pass 100%
  - `T2` (UX/quality) must pass >=90%
  - `T2` deterministic consistency verified across 3 runs (zero flaky variance required)
- Report format upgraded:
  - adds `suiteVersion` and `baselineDate`
  - adds per-tier pass summaries and gate outcomes
  - retains copy/download human-readable report export
- Clean re-baseline completed:
  - test inventory reset to **26** total (`T0=10`, `T1=9`, `T2=8`)

---

## Release History

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

### Phase 2: Polish & UX (v9.0 - v9.8) - Sonnet 4.5
- **v9.0** - IndexedDB migration + Isolated FocusTimer
- **v9.2** - Quick-add bars + Sticky headers
- **v9.3** - 35 automated tests
- **v9.4** - Desktop responsive mode (768px+ breakpoint)
- **v9.5** - Completed items persistence (stay visible with strikethrough)
- **v9.6** - Focus Queue max 5 + drag-to-reorder
- **v9.7** - Edit/Delete lists via long-press menu
- **v9.8** - Empty states + PWA install system

### Phase 3: Batch Selection (v10.0 - v11.0) - Opus 4.5
- **v10.0** - Selection mode architecture (plan + state)
- **v10.1** - Selection UI (checkboxes + header count)
- **v10.2** - Selection actions (bulk done + bulk delete)
- **v11.0-alpha** - Polish, exit on empty, confirm gate (>=3 items), tests 35->35

### Phase 4: UX Polish (v11.1 - v11.2) - Opus 4.5
- **v11.1-alpha** - Tab reorder (Capture first) + Help consolidation
- **v11.2-alpha** - Bullet journal Quick Notes + Remove Reminders tab

### Phase 5: Workflow Redesign (v12.0 - v12.7) - Opus 4.6

#### v12.7-alpha
- Task <-> Checklist linking between Clarify tasks and Confirm checklists
- Task long-press menu with Edit, Focus Queue, Link/Open Checklist, Delete

#### v12.6-alpha
- Welcome + About modal (first-launch overlay + About modal)
- Onboarding sample data seeded on first launch

#### v12.5-alpha
- Streak Heatmap (13-week x 7-day grid in Review)
- Day rotation logic (archives daily stats, resets counters)
- Tests: 35 -> 39

#### v12.4-alpha
- Dark mode cohesion pass across all tabs

#### v12.3-alpha
- Explainer rewrite (workflow guide + routines + methodology deep-dives)

#### v12.2-alpha
- Matrix drag-and-drop (`draggable` tasks + quadrant drop targets)
- Review tab weekly stats/chart + matrix overview + dynamic insights

#### v12.1-alpha
- Tap-to-edit (Clarify/Confirm via EditModal, Capture inline)
- Workflow rename (To-Do -> Clarify, Quick -> Capture, Lists -> Confirm)

#### v12.0-alpha
- Archive removed, replaced by Clear Completed button
- Default quadrant set to `'nn'` (Eliminate)

### Phase 6: Beta Release (v14) - Opus 4.6

#### v14-Beta
- Version bump: v12.7-alpha -> v14-Beta
- Capture UX overhaul:
  - Single tap -> inline edit, long-press -> NoteMenu popup
  - Checkbox (top-right) -> selection mode
  - Bulk actions: Move to Clarify, Strikethrough, Delete
  - `struckAt` timestamp + auto-clear (30 days)
- Tests: 39 -> 46

### Phase 7: Unified Interaction Model (v15) - Opus 4.6

#### v15-Alpha
- Version bump: v14-Beta -> v15-Alpha
- Unified interaction model:
  - Removed long-press in Capture, Clarify, Confirm
  - Removed swipe gestures app-wide
  - Added always-visible 3-dot menu on every item row
  - Header checkbox moved to left side in all sections
  - `data-menu-btn` touch overlap fix
  - 10px scroll guard for Capture tap-to-edit
- Section interactions:
  - Capture: tap inline edit, menu for edit/promote/strikethrough/delete
  - Clarify: tap toggles done/undone, menu for done/edit/focus/link/delete, drag on desktop
  - Confirm: tap toggles done, menu opens edit modal with delete
- Tests: 46 -> 52

### Phase 8: Desktop Enhancement (v15_1 - v15_5) - Opus 4.6

#### v15_1-alpha
- Sidebar navigation (1280px+) replaces bottom tabs
- Added `useWide()` (1280px breakpoint)
- Full-width layouts (`max-w-5xl`, previously `max-w-2xl`)
- Compact wide-desktop item spacing
- Multi-column Clarify/Confirm at 768px+
- Split media queries for tablet/desktop; removed most `!important`
- `draggable={desk}` guard on Focus queue
- Clarify tap behavior switched to done/undone toggle

#### v15_2-alpha
- Focus side-by-side layout (wide): timer/stats left, queue right
- Review 2-column dashboard on wide
- Right-click menus in Clarify, Capture, Confirm
- Sidebar live timer indicator
- `onTick` callback from `FocusTimer` to parent

#### v15_3-alpha
- Fixed double-encoded emoji issues across file
- Help docs updated for desktop features
- Tests: 52 -> 59

#### v15_4-alpha
- Compact desktop items (smaller padding/checkbox/text/gaps on md+)
- Wider tablet content area (`max-w-2xl` -> `max-w-5xl`)
- No max-width on wide desktop (`px-8` full-width)
- Collapsible Settings cards (Install as App + Desktop Mode)
- Desktop Mode moved from Explainer to Settings

#### v15_5-alpha
- Confirm 2-column layout on desktop/tablet
- `rListContent()` extracted as reusable renderer
- Each column self-contained (title, add button, linked task banner, quick-add)

### Phase 9: Responsive Layout & UX Polish (v15_6 - v16) - Opus 4.6

#### v15_6-alpha
- Welcome popup fixed (no repeat on refresh; direct IDB check)
- Settings widened on desktop via 2-column grid at 1280px+
- Clarify QuickAdd constrained to matrix column width
- Focus timer columns changed to equal `flex-1` layout
- Added "Copy Text" in Capture menu with toast confirmation

#### v15_7-alpha
- Tablet gets desktop-style features (Settings 2-col, constrained QuickAdd, side-by-side Focus at 768px+)
- Explainer desktop formatting improved (5xl container + 2-column card grid)

#### v15_8-alpha
- Settings 2-column flexbox layout with independent card heights
- Install/Desktop sections always expanded on tablet+, collapsible only on mobile

#### v15_9-alpha
- Explainer mobile accordions (7 sections) default collapsed with chevron toggle
- Desktop explainer remains always expanded
- Added `helpExp` state + `toggleHelp` helper

#### v16-alpha
- Version bump: v15_9 -> v16 (responsive overhaul complete)
- Test cleanup: removed 7 stale/trivial tests, added 3 new tests, updated 1 side-by-side test
- Tests: 59 -> 55

### Phase 10: v16.x Refactor (v16.1 - v16.11) - Opus 4.6

#### v16.10
- StickyHeader + CSS class abstraction:
  - `StickyHeader({children})` with `data-testid="sticky-header"`
  - Added `.menu-btn`, `.menu-btn-border`, `.section-card`
  - Updated `ContextMenu` buttons and replaced repeated card classes
- Tests: 68 -> 72
- No visual behavior changes

#### v16.9
- Unified menu/dialog components:
  - `ContextMenu({title, items, onClose, position})`
  - `ConfirmDialog({icon, iconBg, title, message, confirmLabel, onConfirm, onCancel, variant})`
  - Removed: `TaskMenu`, `NoteMenu`, `ListMenu`, `DeleteConfirmation`, `BulkDeleteConfirm`
  - Updated callers across Capture/Clarify/Confirm/App
- Tests: 61 -> 68
- No visual behavior changes

#### v16.8
- CSS-only responsive layout (removed desktop/mobile JSX duplication)
- Kept `useDesk()`/`useWide()` only where JS logic is still needed (drag/right-click/renderQueue)
- Added test IDs: `sidebar-nav`, `bottom-tab-bar`, `review-content`, `focus-content`
- Tests: 55 -> 61
- No visual behavior changes

#### v16.7
- Refactor Step 9: App reduced to thin layout shell + modals
- Removed 34 unused `useApp()` destructures and dead PWA state/comments
- App destructures reduced from 52 -> 18 values
- No UI changes

#### v16.6
- Refactor Step 8: `SettingsSection` extracted from `rMore()`
- Moved `moreSub`, `settExp`, `helpExp`, `toggleHelp` out of App
- Uses `useApp()` and `ThemeCtx`; only `desk` passed from App
- No UI changes

#### v16.5
- Refactor Step 7: `ReviewSection` extracted from `rReview()`
- Review computations + cards consolidated and de-duplicated
- No UI changes

#### v16.4
- Refactor Step 6: `ConfirmSection` extracted from `rLists()` + `rListContent()`
- Moved list management local state out of App
- No UI changes

#### v16.3
- Refactor Step 5: `FocusSection` extracted from `rFocus()`
- Queue drag/drop, stats, layout moved into section
- No UI changes

#### v16.2
- Refactor Step 2: Added `AppDataCtx`, `AppDataProv`, `useApp()`
- Refactor Step 3: `CaptureSection` extracted from `rNotes()`
- Refactor Step 4: `ClarifySection` extracted from `rTodos()`

#### v16.1
- Refactor Step 1: `useAppData()` extracted from `App`
