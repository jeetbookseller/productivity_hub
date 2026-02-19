# Productivity Hub - Technical Details

## Development Progress Summary

**Last Updated:** February 19, 2026  
**Current Version:** v17.0-Alpha  
**Current Model:** Opus 4.6

## Table of Contents
- [Context for New Session](#context-for-new-session)
- [Documentation Boundaries](#documentation-boundaries)
- [Code File Map](#code-file-map)
- [Future Features](#future-features)
- [Feature Specifications](#feature-specifications)
- [Known Issues](#known-issues)
- [Technical Stack](#technical-stack)
- [Manual Update Protocol](#manual-update-protocol)

---

## Context for New Session

- **User:** Jeet
- **Project:** Productivity Hub web app (React single-page HTML)
- **Development style:** Iterative, version-based, incremental `str_replace` edits
- **Current phase:** v17.0 timer reliability/logging remediation shipped; next planned milestone is `P1` recurring tasks
- **Working files:** `productivity_hub.html`, `styles/app.css`, `scripts/pwa_setup.js`, `scripts/app_core.js`
- **Key constraint:** Output token limits require incremental edits (avoid full-file rewrites)
- **Encoding note:** File had double-encoded UTF-8 emoji issues in the past (fixed in v15_4)
- **Test status:** 45 tiered deterministic tests (`T0=11`, `T1=15`, `T2=19`) in the modernized in-app runner

## Documentation Boundaries

- **Implemented work and release history:** `release_notes.md`
- **Current architecture/contracts + future roadmap:** `technical_details.md` (this file)
- **TDD remediation tracking:** timer/pomodoro remediation plan is captured in release + architecture notes (no standalone planning doc needed)

## Code File Map

- `productivity_hub.html`
  - Thin app shell: metadata, root mount node, script/style includes.
  - Inline Babel blocks only:
    - Block A: shared hooks/components
    - Block B: visual/test components + lazy test-runner APIs (`getTestRunner`, `peekTestRunner`, `createTestRunnerModel`)
    - Block C: data/context/section components
    - Block D: app shell + bootstrap render
- `styles/app.css`
  - All app CSS, breakpoints, animations, class abstractions (`.menu-btn`, `.section-card`, etc.).
- `scripts/pwa_setup.js`
  - Manifest wiring, install prompt hooks, service-worker registration, `window.__generatePWAFiles`.
- `scripts/app_core.js`
  - Runtime primitives and shared non-React contracts exposed as `window.PH_CORE`:
    - `APP_VERSION`, `initDB`, `S`, `uid`, `notify`, `reqNotifyPerm`, `PRESETS`, `QUADS`, `CATS`, `shareItem`, `genICS`, `dlFile`

---

## Future Features

### Combined Prioritized Backlog (Pending)

1. `P1` **Recurring Tasks**
   Add daily/weekly/monthly recurrence rules with schedule-based auto-recreation and completion tracking.

2. `P2` **Tags & Filters**
   Add tags to tasks/notes, filter views by tag, and support cross-section tag search.

3. `P2` **Command Palette Search**
   Implement keyboard-triggered global search across Capture, Clarify, Focus, Confirm, and Review.

4. `P3` **Task Templates**
   Save task + subtask bundles and quick-create from a reusable template library.

5. `P4` **Storage Enhancement**
   Improve resilience beyond IndexedDB-only browser storage.

6. `P5` **Checklist tab management UX**
   Add better tab controls (for example right-click/3-dot rename/delete behavior) for checklist tabs.

### Planned Implementation Order (TDD)

| Order | Item | Target Version | Status |
|-------|------|----------------|--------|
| 1st | Recurring Tasks | TBD | Pending |
| 2nd | Tags & Filters | TBD | Pending |
| 3rd | Command Palette Search | TBD | Pending |
| 4th | Task Templates | TBD | Pending |
| 5th | Storage Enhancement | TBD | Pending |
| 6th | Checklist tab management UX | TBD | Pending |

---

## Feature Specifications

### Versioning System
- **Rule:** Small features increment minor (for example `15_1` -> `15_2`), major workflow/layout shifts increment major (`15` -> `16` -> `17`).
- **Format:** `v16-Alpha`, `v15_1-Alpha`, `v16.11-Alpha`, `v17.0-Alpha`.
- **Release stage:** Alpha.

### Workflow Model
```text
Capture -> Clarify -> Focus -> Confirm -> Review -> Repeat
   |          |        |        |          |
   |          |        |        |          \- Weekly stats, streak heatmap, insights, suggestions
   |          |        |        \- Checklists with sections, tap-to-done, edit/delete menu
   |          |        \- Pomodoro timer + Focus Queue (3-5 tasks), side-by-side on tablet+
   |          \- Eisenhower Matrix + menu + tap done/undone + drag (desktop) + right-click
   \- Bullet journal quick notes + menu + right-click + copy text + copy+strike to Clarify + bulk select
```

### UI Patterns Established
- Always-visible 3-dot menu on items in Capture, Clarify, Confirm.
- Right-click on desktop opens the same contextual actions as 3-dot menus.
- Tap actions:
  - Capture: inline edit
  - Clarify: toggle done/undone
  - Confirm: toggle done
- Header checkbox on left enters batch selection mode.
- Long-press and swipe gestures are removed from workflow sections.
- `data-menu-btn` on menu triggers prevents menu tap propagation to parent item handlers.
- Scroll guard threshold (10px touch movement) avoids accidental edits while scrolling.
- Sticky headers use CSS-only responsive positioning (`top-14 md:top-16 xl:top-0 -mx-4 md:-mx-8`).
- Tablet+ layouts use two-column structures for Clarify, Confirm, Settings, and Focus side-by-side.

### Desktop Layout Architecture
```text
< 768px  (mobile):   Bottom tab bar, single column, touch-first,
                     collapsible Settings + Explainer sections
768px+   (tablet):   Side-by-side Focus, 2-col Clarify/Confirm/Settings,
                     5xl content width, always-expanded key Settings cards,
                     Explainer 2-col grid (always expanded)
1280px+  (wide):     Sidebar nav, full-width content (no max-width),
                     2-col Review, compact items, right-click menus
```

### State and Storage Contracts
- `usePersistedState`: auto-persistence to IndexedDB plus localStorage sync.
- `useAppData()`: shared persisted state + CRUD handlers extracted from `App`.
- `useApp()`: convenience hook over app data context.
- `useAnimatedClose(onClose)`: modal close sequencing with exit animation.
- `ThemeProv`: synchronous fallback read + async IndexedDB reconciliation for theme.

`useAppData()` contract:

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

Storage structure:

```text
IndexedDB: 'ProductivityHub' / Store: 'data'
Keys: todos, lists, notes, focus, theme, preset, customT, poms, met, dHist, fHist, tab, seenAbout
Todo fields: id, text, quad, cat, deadline, subtasks, poms, done, linkedList (optional)
Note fields: id, text, crAt, struck, struckAt (timestamp for auto-clear)
Test keys: __TEST__* (auto-cleaned)
Removed: arc, reminders, Swipe component
```

### Component Architecture
| Component | Purpose |
|-----------|---------|
| `App` | Thin layout shell (navigation, routing, selection state, modals) |
| `AppDataProv` | Context provider exposing `useAppData()` via `AppDataCtx` |
| `CaptureSection` | Bullet journal capture, local edit/menu state, auto-clear |
| `ClarifySection` | Eisenhower matrix, drag/drop, task menus |
| `FocusSection` | Focus timer integration, queue drag/drop, stats |
| `ConfirmSection` | Checklist tab/list management, edit/delete flows |
| `ReviewSection` | Weekly stats, heatmap, matrix overview, insights |
| `SettingsSection` | Settings/help/test tabs and collapsible behavior |
| `FocusTimer` | Isolated Pomodoro timer (`React.memo` + persisted runtime state + elapsed-time accounting) |
| `Heatmap` | 13-week streak heatmap visualization |
| `ContextMenu` | Unified menu component (modal or positioned mode) |
| `ConfirmDialog` | Unified confirm dialog with danger/info variants |
| `StickyHeader` | Shared sticky header wrapper |
| `LinkPicker` | Task-checklist linking modal |
| `EditModal` / `AboutModal` | Editing and onboarding/about flows |
| `TestRunner` | Internal automated test suite surface |
| `getTestRunner` / `peekTestRunner` | Lazy-load + cache contract for Test runner in Settings tab |

### In-App Test Architecture (Modernized)
- Runner model uses structured test cases, not name-based `switch` branching:
  - `id`, `name`, `tier` (`T0`/`T1`/`T2`), `area`, `run(ctx)`, optional `cleanup(ctx)`
- Lazy-load contract for runner mount in Settings:
  - `window.PH_BLOCK_B.getTestRunner()` builds/caches runner on first request
  - `window.PH_BLOCK_B.peekTestRunner()` returns cached runner or `null` without creating it
  - Runtime markers: `data-testid="test-runner-root"`, `data-testid="test-runner-loading"`, `data-testid="test-runner-error"`
- Test runner model split:
  - `createTestRunnerModel()`
  - `getSuiteManifest()` for eager metadata/counts
  - `loadTestCases()` for lazy, cached case-registry build (only on Run button)
- Harness utilities inside `TestRunner`:
  - `assert`, `assertEq`, `assertIncludes`
  - `withDomFixture`
  - `withStorageFixture`
  - `withStorageSnapshot`
  - `withSettingsHarness`
  - `waitFor`
  - cleanup registry (`add` + reverse-order `runAll`)
- Tiered gate policy:
  - `T0` contract/boot safety: 100% required
  - `T1` core workflow behavior: 100% required
  - `T2` UX/quality behavior: >=90% required
  - Determinism gate: `T2` rerun consistency checked across 3 runs, zero flaky variance required
- Current baseline:
  - Suite version: `2.1.0`
  - Baseline date: `2026-02-19`
  - Total tests: `45` (`T0=11`, `T1=15`, `T2=19`)

### CSS Architecture
```text
@media (min-width: 768px)   -> Tablet: 2-col Clarify, font bump, scrollbar tuning
@media (min-width: 1280px)  -> Wide: confirm-grid, compact cards/timer/section spacing

CSS abstractions:
  .menu-btn        -> shared menu button structure
  .menu-btn-border -> top border separator variant
  .section-card    -> reusable rounded card surface

Animation classes:
  .anim-out        -> fadeOut 0.2s ease-in forwards (modal exit)
  .anim-in         -> fadeIn 0.2s ease-out forwards (tab/modal enter)
```

---

## Known Issues

- Desktop truncation override still depends on `!important` for `.truncate`.
- HTML5 drag-and-drop does not work on touch devices; mobile uses modal quadrant picker.
- `dHist` backfill gap for users prior to v12.5.
- `struckAt` backfill gap for notes struck prior to v14-Beta.
- Timer tick updates app state every second (`onTick`); currently mitigated by stable callbacks and memoization.
- Checklist tab management UX remains in backlog (`P5`).

---

## Technical Stack

### Core Technologies
- React 18 (production CDN)
- Tailwind CSS (CDN)
- Babel (in-browser)
- IndexedDB
- File-split static app:
  - HTML entrypoint: `productivity_hub.html`
  - External CSS: `styles/app.css`
  - External runtime JS: `scripts/pwa_setup.js`, `scripts/app_core.js`

### Emoji Encoding Guidance
- Historical issue: UTF-8 bytes were misread as cp1252 then re-saved, causing garbled emoji.
- Current rule: always read/write UTF-8 and use real Unicode glyphs directly.
- Recovery path if corruption reappears: apply cp1252 -> UTF-8 reversal approach used during v15_4 fix.

---

## Manual Update Protocol

For each release (manual, no scripts):
1. Update version/date in `technical_details.md` and `release_notes.md`.
2. Add implemented changes to top of `release_notes.md` under Latest Release.
3. Update current context and future roadmap in `technical_details.md`.
4. Confirm version consistency in `README.md`, `technical_details.md`, and `release_notes.md`.
5. Keep implemented release history out of `technical_details.md`.

For code updates (Codex/Claude optimized):
1. Edit the smallest target file first (`scripts/app_core.js`, `scripts/pwa_setup.js`, `styles/app.css`, or one Babel block in `productivity_hub.html`).
2. Preserve script order in `productivity_hub.html`: PWA script, React CDN scripts, `app_core.js`, then Babel Block A -> B -> C -> D.
3. Keep `window.PH_CORE` contract stable unless intentionally changing interfaces.
4. If modifying tests, maintain structured case schema (`id`/`tier`/`area`) and keep tier gates + determinism checks aligned.
5. Keep block markers (`BEGIN: Block A/B/C/D`) intact for deterministic AI edits.
