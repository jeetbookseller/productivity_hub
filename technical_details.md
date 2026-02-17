# Productivity Hub - Technical Details

## Development Progress Summary

**Last Updated:** February 12, 2026
**Current Version:** v16.7-Alpha
**Current Model:** Opus 4.6
**Previous Versions:** v6 → v9.8 (Sonnet 4.5), v10.0-alpha → v11.2-alpha (Opus 4.5), v12.0-alpha → v12.7-alpha (Opus 4.6), v14-Beta (Opus 4.6), v15-Alpha → v15_5-Alpha (Opus 4.6), v15_6 → v16-Alpha (Opus 4.6), v16.1 → v16.6 (Opus 4.6)

## 📚 Table of Contents
- [Context for New Session](#-context-for-new-session)
- [Latest Release](#-latest-release)
- [Completed Features (All Versions)](#-completed-features-all-versions)
- [Future Features](#-future-features)
- [Feature Specifications](#-feature-specifications)
- [Known Issues](#-known-issues)
- [Technical Stack](#-technical-stack)

---

## 📞 Context for New Session

- **User:** Jeet
- **Project:** Productivity Hub web app (React single-page HTML)
- **Development style:** Iterative, version-based, incremental str_replace edits
- **Current phase:** v16.7 — Priority 1 refactoring complete (all 9 steps merged). App is now a thin layout shell.
- **Working file:** `productivity_hub.html` (~185KB, ~2023 lines)
- **Key constraint:** Output token limits require incremental edits, not full-file rewrites
- **Encoding note:** File had double-encoded UTF-8 emojis (cp1252→UTF-8 chain). Fixed in v15_4.
- **Versioning:** Small features → minor bump (15_1, 15_2), big features → major bump (15, 16, 17)

**Full Feature Set (Canonical Inventory):**
- Capture (Bullet Journal + ⋮ NoteMenu with Copy Text + right-click + ☐ bulk select + copy+strike to Clarify + auto-clear) → Clarify (Eisenhower + ⋮ TaskMenu + right-click + tap done/undone + drag desktop) → Focus (Pomodoro + Queue + side-by-side tablet+ + sidebar timer) → Confirm (Checklists + ⋮ edit+delete + right-click + tap-done + 2-col desktop) → Review (Stats + Streak Heatmap + Insights + 2-col dashboard wide)
- Unified: ⋮ 3-dot + right-click on all items, ☐ header checkbox (left) for bulk select, no long-press, no swipe
- Desktop (1280px+): Sidebar nav, full-width, 2-col Review, compact items, live timer
- Tablet (768px+): Side-by-side Focus (equal flex-1 cols), 2-col Clarify/Confirm/Settings (flexbox), constrained QuickAdd, Explainer 2-col grid
- Settings: Theme + Timer + Data + Install as App + Desktop Mode; flexbox 2-col on tablet+ with always-expanded cards; collapsible on mobile
- Explainer: 7 collapsible accordion sections on mobile, always-expanded 2-col grid on tablet+
- Test Suite (55 tests, cleaned), Export/Import, Theme (default: System), cohesive dark mode

---

## 📦 Latest Release

**productivity_hub.html** (v16.7-Alpha)

### Release Focus
- ✅ Refactor Step 9 completed: App is now a thin layout shell (sidebar/tab-bar + content area + modals), with dead state/comment cleanup.
- ✅ No UI changes in this release; restructuring only.
- ✅ Canonical full feature inventory is maintained in `## 📞 Context for New Session` above.

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

### Phase 10: v16.x Refactor (v16.1 - v16.7) — Opus 4.6
- **Archived summary:** Priority 1 refactor is complete (all 9 steps merged by v16.7); App is now a thin layout shell.
- **Tracking note:** Remaining refactor/product work is maintained under `## 🔮 Future Features` → `### 📌 Combined Prioritized Backlog (Refactor + Product Features)`.

### v16.7 ← CURRENT
- **Refactor Step 9:** App becomes thin layout shell — sidebar/tab-bar + content area + modals only. Removed 34 unused destructured variables from `useApp()`, removed dead PWA state (pwaPrompt, pwaInstalled, pwaStatus, triggerInstall + event listeners), removed stale comments. App now destructures only 18 values from `useApp()` (down from 52). Version bump to v16.7.
- No UI changes — internal restructuring only

### v16.6
- **Refactor Step 8:** Extracted `SettingsSection` from `rMore()` — all More tab content: settings sub-tab (theme picker, timer duration, data management, install guide, desktop mode info), help/explainer sub-tab (7 collapsible sections with `helpSection()` helper to de-duplicate expand/collapse pattern), and test runner sub-tab. Local state moved from App: `moreSub`, `settExp`, `helpExp`, `toggleHelp`. Uses `useApp()` for `preset`/`customT`/`showT`, `useContext(ThemeCtx)` for `theme`/`setTheme`. Only prop from App: `desk`. De-duplicated settings cards via shared variables and `helpSection()` helper.
- No UI changes — internal restructuring only

### v16.5
- **Refactor Step 7:** Extracted `ReviewSection` from `rReview()` — all review computations (quadrant counts, category breakdown, overdue detection, insights engine with 9 rules, suggestions), weekly stats, Chart, Heatmap, matrix overview, and 2-column desktop layout. De-duplicated desktop vs mobile rendering via shared card variables (`weekStats`, `matrixCard`, `insightsCard`, `actionsCard`). Uses `useApp()` for shared state. Only prop: `wide`.
- No UI changes — internal restructuring only

### v16.4
- **Refactor Step 6:** Extracted `ConfirmSection` from `rLists()` + `rListContent()` — checklist rendering, list tabs, ListMenu state, edit/delete list logic, new list creation, 2-column desktop layout. Local state moved from App: `newList`, `showNew`, `listMenu`, `editListId`, `editListName`, `deleteConfirm`. Uses `useApp()` for shared state.
- No UI changes — internal restructuring only

### v16.3
- **Refactor Step 5:** Extracted `FocusSection` from `rFocus()` — FocusTimer integration, focus queue drag-and-drop reordering (dragI/dragO), stats cards, desktop side-by-side layout, all self-contained. Uses `useApp()` for shared state, receives `onTimerTick` callback from App for sidebar timer display
- No UI changes — internal restructuring only

### v16.2
- **Refactor Step 2:** Created `AppDataCtx` context, `AppDataProv` provider, and `useApp()` convenience hook — render root wrapped with provider, App now reads shared state from context
- **Refactor Step 3:** Extracted `CaptureSection` as standalone component from `rNotes()` — all capture-local state (newBullet, editingNote, noteMenu, bulletRef, notesByDate), functions (addBullet, handleBulletKeyDown, formatDateHeader, deleteBullet, updateBullet, toggleStrike, noteToTodo), effects (auto-clear struck notes 30d), and NoteMenu rendering now self-contained. Uses `useApp()` for shared state, receives selection props from App
- **Refactor Step 4:** Extracted `ClarifySection` as standalone component from `rTodos()` — Eisenhower matrix rendering, quadrant expand/collapse (expQ), drag-and-drop re-prioritization (dragQ/moveTodoQuad), TaskMenu state + rendering, QuickAdd all self-contained. Uses `useApp()` for shared state, receives selection + setEdit/setLinkPicker props from App

### v16.1
- **Refactor Step 1:** Extracted `useAppData()` custom hook from App — all shared persisted state and CRUD handlers moved out of App into a standalone hook

---

## 🔮 Future Features

### 📌 Combined Prioritized Backlog (Refactor + Product Features)

1. `P0` **Eliminate desktop/mobile JSX duplication (CSS-only responsive)**
   Refactor duplicated branches in Focus, Review, Settings, and main layout into single responsive JSX.

   **Implementation:**
   - **App layout** (current `wide ? (...) : (...)` ternary): Render a single JSX tree. Sidebar uses `hidden xl:flex xl:flex-col` (hidden below 1280px, visible above). Bottom tab bar uses `xl:hidden` (visible below 1280px, hidden above). Main content adjusts via responsive Tailwind (`xl:pl-56 xl:pt-0` vs `pt-14 pb-28`). Eliminates the entire wide ternary.
   - **ReviewSection** (current `wide?(grid):(stack)`): Replace with single container `<div className="space-y-4 xl:grid xl:grid-cols-2 xl:gap-4 xl:space-y-0">`. Already uses shared card variables (`weekStats`, `matrixCard`, etc.) — layout becomes CSS-only.
   - **FocusSection** (current `desk?(flex):(stack)`): Replace with `<div className="md:flex md:gap-6">` + responsive classes on children. Use `renderQueue(compact)` with CSS-driven compact sizing.
   - **ConfirmSection** (current `desk?(grid):(single)`): Replace with `md:grid md:grid-cols-2 md:gap-6`, conditionally render `secondList` based on data (not layout branch).
   - Keep `useDesk()`/`useWide()` hooks for JS-only logic (drag-and-drop, right-click context menus) — they stop driving JSX layout branching.

   **TDD — Write these tests first:**
   - `App renders sidebar nav on wide viewport` — verify sidebar element visible at 1280px+
   - `App renders bottom tab bar on mobile viewport` — verify tab bar visible below 1280px
   - `App hides sidebar on mobile` — verify sidebar hidden below 1280px
   - `App hides bottom tab bar on wide` — verify tab bar hidden at 1280px+
   - `ReviewSection renders 2-col grid on wide` — verify grid layout class applied at xl breakpoint
   - `FocusSection renders side-by-side on tablet+` — verify flex layout active at md breakpoint

2. `P0` **Unified ContextMenu + ConfirmDialog**
   Replace TaskMenu/NoteMenu/ListMenu and delete-confirm variants with reusable shared components.

   **Implementation:**
   - Create `ContextMenu({title, items, onClose, position})` component:
     - `items` array: `[{icon: <Component/>, label: 'Edit', onClick: fn, variant: 'default'|'danger', borderTop: bool}]`
     - If `position` prop provided → render positioned popup (like current `ListMenu`): absolute positioning, no backdrop blur
     - If no `position` → render centered fullscreen modal (like current `TaskMenu`/`NoteMenu`): `fixed inset-0 bg-bark-700/40 backdrop-blur-sm` overlay
     - Shared button class defined once: `w-full px-4 py-3 flex items-center gap-3 hover:bg-sage-100 dark:hover:bg-sage-400/20 transition-colors text-left`
     - `variant: 'danger'` → uses `hover:bg-terracotta-100 dark:hover:bg-terracotta-400/20` instead
     - Preserve `anim-in` entrance animation and `gcard` styling
   - Create `ConfirmDialog({icon, iconBg, title, message, confirmLabel, onConfirm, onCancel, variant})` component:
     - Replaces both `DeleteConfirmation` and `BulkDeleteConfirm`
     - Renders: icon circle + title + message + Cancel/Confirm buttons
     - `variant: 'danger'` → terracotta confirm button; `variant: 'info'` → single OK button (for "cannot delete last list")
   - Replace callers in `CaptureSection` (NoteMenu), `ClarifySection` (TaskMenu), `ConfirmSection` (ListMenu, DeleteConfirmation), and `App` (BulkDeleteConfirm) — each passes its own items array

   **TDD — Write these tests first:**
   - `ContextMenu renders all items` — pass 3 items, assert 3 buttons rendered
   - `ContextMenu calls onClose on backdrop click` — simulate backdrop click, verify onClose called
   - `ContextMenu item click fires callback and closes` — click item, verify onClick + onClose called
   - `ContextMenu positioned mode renders at coordinates` — pass position, verify absolute positioning
   - `ConfirmDialog renders title and message` — pass title/message, verify text present in DOM
   - `ConfirmDialog confirm button fires onConfirm` — click confirm, verify callback
   - `ConfirmDialog cancel button fires onCancel` — click cancel, verify callback

3. `P1` **StickyHeader + CSS class abstraction**
   Extract shared sticky header UI and semantic Tailwind classes (`@apply`) to reduce repeated utility strings.

   **Implementation:**
   - Create `StickyHeader({wide, children})` component:
     - Renders: `<div className={`sticky ${wide?"top-0 -mx-8":"top-14 md:top-16 -mx-4 md:-mx-8"} z-10 glass px-4 md:px-6 py-3 md:py-4 mb-4`}>{children}</div>`
     - Replace all 5+ identical sticky header blocks in: `FocusSection`, `ConfirmSection` (×2), `ReviewSection`, `CaptureSection`, `ClarifySection`
   - Add `@apply` CSS abstractions in the `<style>` block for the most repeated Tailwind utility strings:
     - `.menu-btn` — shared context menu button: `@apply w-full px-4 py-3 flex items-center gap-3 transition-colors text-left`
     - `.section-card` — shared card pattern: `@apply gcard rounded-2xl p-4`
     - `.menu-btn-border` — border-top separator: `@apply border-t border-sand-200 dark:border-bark-500`
   - Update all usages of these repeated patterns to use the new CSS classes

   **TDD — Write these tests first:**
   - `StickyHeader applies wide classes when wide=true` — verify `top-0` and `-mx-8` in className
   - `StickyHeader applies mobile classes when wide=false` — verify `top-14` in className
   - `StickyHeader renders children` — pass children, verify they appear in DOM
   - `CSS class .section-card applies gcard styles` — verify computed styles match expected

4. `P1` **UI smoothness pass**
   Add transitions, modal exit animations, and debounce persisted writes (~300ms); evaluate virtual scrolling for large lists.

   **Implementation:**
   - **Debounce persisted writes:** Modify `usePersistedState` to debounce `S.set()` calls by ~300ms using a `useRef` timer. Pattern:
     ```
     const timerRef = useRef(null);
     useEffect(() => {
       if (loaded) {
         clearTimeout(timerRef.current);
         timerRef.current = setTimeout(() => S.set(key, state), 300);
       }
       return () => clearTimeout(timerRef.current);
     }, [key, state, loaded]);
     ```
     Reads remain instant; writes are batched. Flush on unmount via cleanup.
   - **Modal exit animations:** Add CSS `@keyframes fadeOut{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(10px)}}` and `.anim-out{animation:fadeOut 0.2s ease-in forwards}`. Create a `useAnimatedClose(onClose)` hook that returns `{closing, triggerClose}` — sets `closing=true`, listens for `animationend`, then calls actual `onClose`. Apply to: ContextMenu, ConfirmDialog, EditModal, LinkPicker, AboutModal.
   - **Tab content transitions:** Wrap tab content in `<div key={tab} className="anim-in">` so each tab switch triggers a fresh fade-in animation.
   - **Toast auto-fade:** Add timed opacity transition — toast fades out over last 500ms of its display duration.
   - **List item transitions:** Add `transition-all duration-200` to item containers in Capture, Clarify, Confirm for smooth height/opacity changes on add/remove/complete.

   **TDD — Write these tests first:**
   - `usePersistedState debounces writes` — rapidly set state 5 times in <300ms, verify S.set called only once after settling
   - `usePersistedState flushes on unmount` — set state then unmount, verify final value persisted
   - `Modal applies anim-out class when closing` — trigger close, verify `.anim-out` class present before actual unmount
   - `Tab switch applies anim-in to new content` — change tab, verify `anim-in` class on content container
   - `Toast fades out before removal` — verify opacity transition applied in final phase

5. `P1` **Lazy-load test suite**
    Defer test suite initialization until the Test tab is opened.

   **Implementation:**
   - Wrap the entire `TestRunner` component definition (~250 lines) in a factory function:
     ```
     const getTestRunner = () => {
       // ... existing TestRunner code ...
       return TestRunner;
     };
     ```
   - In `SettingsSection`, lazy-load on first Test tab click:
     ```
     const [TR, setTR] = useState(null);
     // On Test tab click:
     if (!TR) setTR(() => getTestRunner());
     ```
   - Render: `{moreSub==='test' && TR ? <TR onShowToast={showT}/> : moreSub==='test' && <div className="text-center py-8 text-bark-400">Loading tests...</div>}`
   - Factory body stays in the HTML but wrapped in a function that isn't invoked until needed, deferring component creation cost

   **TDD — Write these tests first:**
   - `TestRunner not initialized on app startup` — verify factory function not called at mount time
   - `TestRunner loads on first Test tab click` — click Test tab, verify component mounts and renders
   - `TestRunner persists after tab switch` — open Test, switch to Settings, switch back to Test, verify no re-initialization

### 📋 Implementation Order (TDD Approach)

For each step below: **(1)** write the TDD tests first, **(2)** run tests (expect failures), **(3)** implement the feature, **(4)** verify all tests pass, **(5)** run full test suite (55+ tests).

| Order | Item | Rationale |
|-------|------|-----------|
| 1st | Unified ContextMenu + ConfirmDialog (P0 #2) | Foundation — creates shared components used by later steps |
| 2nd | StickyHeader + CSS class abstraction (P1 #3) | Creates shared `StickyHeader` component + CSS classes used everywhere |
| 3rd | Eliminate desktop/mobile JSX duplication (P0 #1) | Biggest structural change — benefits from shared components already in place |
| 4th | UI smoothness pass (P1 #4) | Polish layer — adds animations/debounce on top of clean structure |
| 5th | Lazy-load test suite (P1 #5) | Independent, low-risk — can be done last |

**Versioning:**
- Steps 1 + 2 → **v16.8** (shared components + CSS abstraction)
- Step 3 → **v16.9** (CSS-only responsive layout — biggest structural change)
- Steps 4 + 5 → **v17.0** (smoothness + lazy-load = user-facing polish, major version bump)

6. `P2` **Recurring Tasks**  
   Add daily/weekly/monthly recurrence rules with schedule-based auto-recreation and completion tracking.

7. `P2` **Tags & Filters**  
   Add tags to tasks/notes, filter views by tag, and support cross-section tag search.

8. `P2` **Command Palette Search**  
   Implement keyboard-triggered global search across Capture, Clarify, Focus, Confirm, and Review.

9. `P3` **Task Templates**  
   Save task + subtask bundles and quick-create from a reusable template library.

10. `P4` **Storage Enhancement**  
   Improve resilience beyond IndexedDB-only browser storage.

11. `P5` **Checklist tab management UX**  
    Add better tab controls (e.g., right-click/`⋮` rename/delete behavior) for checklist tabs.

---

## 📝 Feature Specifications

### Versioning System
- **Rule:** Small features increment minor (15_1 → 15_2), big features increment major (15 → 16)
- **Format:** `v16-Alpha`, `v15_1-Alpha`, etc.
- **Alpha tag:** Current release stage
- **Current:** v16.7 (Priority 1 refactoring complete — all 9 steps merged)

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
- **Confirm 2-col:** `ConfirmSection` renders each checklist; `grid grid-cols-2` on desktop with selected + next list
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
- **Checklist tab management:** Improvements are tracked in `## 🔮 Future Features` → `### 📌 Combined Prioritized Backlog (Refactor + Product Features)`.
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
- `useAppData()` — custom hook extracting shared persisted state and CRUD handlers from App (v16.1 refactor Step 1).

#### `useAppData()` Contract
```text
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
- `ThemeProv` — `S.getSync()` initial + async IndexedDB load, default `'system'`
- `useDesk()` — desktop breakpoint detection (768px+)
- `useWide()` — wide desktop breakpoint detection (1280px+)
- `timerInfo` — `{left, run, mode}` state lifted from FocusTimer via `onTick` callback
- `onTimerTick` — stable `useCallback` ref to prevent FocusTimer re-renders
- `fmtSidebar` — compact timer format helper (`m:ss`)
- `React.useReducer` in FocusTimer, `React.memo` for performance
- `selMode`/`selSection`/`selIds`/`bulkConfirm` — batch selection (App)
- `editingNote` — inline note editing (CaptureSection)
- `noteMenu` — NoteMenu 3-dot context menu state (CaptureSection)
- `taskMenu` — TaskMenu 3-dot context menu state (ClarifySection)
- `dragQ` — matrix drag-and-drop source tracking (ClarifySection)
- `settExp` — collapsible sections in Settings (`{pwa, desk}`) — mobile only (SettingsSection)
- `helpExp` — collapsible sections in Explainer — mobile only (SettingsSection)
- `toggleHelp(key)` — helper to toggle Explainer accordion sections (SettingsSection)
- `newList`/`showNew`/`listMenu`/`editListId`/`editListName`/`deleteConfirm` — list management (ConfirmSection)
- `dragI`/`dragO` — focus queue drag-and-drop (FocusSection)
- `expQ` — quadrant expand/collapse (ClarifySection)

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
| `App` | Thin layout shell — sidebar/tab-bar, content routing, batch selection, modals (EditModal, LinkPicker, BulkDeleteConfirm, AboutModal) |
| `AppDataProv` | Context provider wrapping App — shares `useAppData()` via `AppDataCtx` |
| `CaptureSection` | Bullet journal capture tab — local state, NoteMenu, auto-clear, uses `useApp()` |
| `ClarifySection` | Eisenhower matrix clarify tab — quadrant rendering, drag-and-drop, TaskMenu, uses `useApp()` |
| `FocusSection` | Focus tab — FocusTimer integration, queue drag-and-drop, stats cards, desktop layout, uses `useApp()` |
| `ConfirmSection` | Checklist confirm tab — list tabs, ListMenu, edit/delete, 2-column desktop layout, uses `useApp()` |
| `ReviewSection` | Review dashboard tab — weekly stats, heatmap, matrix overview, insights, suggestions, uses `useApp()` |
| `SettingsSection` | Settings/More tab — theme, timer, data, install guide, explainer (7 sections), test runner, uses `useApp()` + `ThemeCtx` |
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

**End of Progress Summary**
