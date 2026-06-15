# Kaya Design System — Claude Rules

This file is the project-local copy of all standing rules for Claude when working on the Kaya Design System. The canonical copy also lives in Claude's memory at `/Users/uttkarsh/.claude/projects/-Users-uttkarsh/memory/`. Both must be kept in sync.

---

## Component Architecture Rules

### Component Base Rule
- Unless a component is extremely custom, base it on the equivalent shadcn component
- Every component must have `React.forwardRef`, `asChild` via `@radix-ui/react-slot`, and spread all native HTML attributes via `...props`
- When an internal ref is needed (e.g. squircle), merge it with the forwarded ref using a callback ref

### Component Tree Inspection Rule
When building or reviewing any KDS component that is a container, shell, or composite, always inspect what its children/internal elements should be — they may be instances of existing KDS components, not raw divs or buttons.

**Why:** Multiple bugs were found where composite components used raw placeholder elements (custom `ChatRow`/`HeaderRow` divs, raw `<button>`) instead of the actual KDS component instances they were supposed to use (e.g. `SidebarMenuItem variant="chat-item"`, `Button variant="outline"`). This broke the component tree chain and meant visual/behavioural changes to atoms/molecules didn't propagate up.

**How to apply:** Before finalising any new composite component or story:
1. Identify every "slot" or child element type in the Figma design (`data-name` attribute tells you the component name)
2. Check if a KDS component already exists for that slot
3. Use the KDS component — never use a raw div/button/span as a placeholder when the real component exists
4. The same rule applies to stories: all stories for composite components must use actual KDS component instances for their content, not inline helpers

---

## Figma Implementation Rules
- **Colors**: Every color (text, icons, backgrounds, borders, frames) must exactly match Figma code output
- **Typography**: Font size, font weight, line height, letter spacing — all must match exactly
- **Spacing & padding**: Always extract and match exact spacing and padding values from `get_design_context` — never approximate or assume
- **Shadows**: Always extract and implement shadows exactly as specified in Figma — never omit or simplify them
- **Source of truth**: Use the **code panel** from Figma (`get_design_context`) as the reference, not just the screenshot
- **Screenshots**: Use only as a visual reference, not as a spec source
- **Icons**: Always extract icon SVGs from Figma using `get_design_context` on the icon node. Never use Ionicons, MaterialCommunityIcons, or any other icon library as a substitute

### No Clipping Without Figma Verification
Never add `overflow: hidden` (or `clip`, `overflow: clip`, or any other clipping property) to a KDS component's container unless that exact clipping is explicitly present in the Figma design.

**Why:** Adding `overflow: hidden` to the outer container of PresetModelSelector clipped the box-shadows of ModelSelectItem rows. The clipping was not in the Figma spec.

**Exception:** `overflow: hidden` is acceptable on a self-contained card/pill element where it's clearly needed to clip the border-radius.

---

## CSS & Styling Rules

### Disabled Cursor Rule
Always put the cursor on a wrapper element, never on the disabled button/input itself.

**Why:** HTML `disabled` attribute sets `pointer-events: none` on the element, so any cursor CSS on the element is ignored.

**How to apply:**
1. Wrap the element in a `<span style={{ display: 'inline-flex' }}>` (already needed for drop-shadow anyway)
2. Put `cursor: disabled ? 'not-allowed' : 'pointer'` on the wrapper span
3. Also set the cursor on the button element itself — both layers need it
4. Add `pointerEvents: 'none'` to ALL icon wrapper divs inside the button

### Overscroll Behavior Rule
All scrollable KDS elements must pair `overflow-x/y` with `overscroll-behavior-x/y: contain` (per axis, only on axes that actually scroll).

**Why:** `contain` stops scroll chaining to parent containers while preserving native rubber-band/bounce within the element. `none` suppresses bounce entirely which feels wrong. Reference: Sidebar scroll container uses `overscrollBehaviorY: 'contain'`.

**How to apply:** Whenever adding `overflow-x: auto/scroll` or `overflow-y: auto/scroll`, pair it with `overscrollBehaviorX: 'contain'` or `overscrollBehaviorY: 'contain'`. Do not add overscroll-behavior for axes that don't scroll.

---

## Interaction Patterns

### In-Place Text Swap Animation
Any time two text strings occupy the same position and swap (labels, placeholders, status text, mode indicators), use this exact pattern — do not approximate or invent a new one.

**Full spec:** `specs/patterns/in-place-text-swap.md`

```tsx
<AnimatePresence mode="popLayout" initial={false}>
  <motion.span
    key={currentTextKey}
    initial={{ scale: 0.75, opacity: 0, filter: 'blur(4px)' }}
    animate={{ scale: 1,    opacity: 1, filter: 'blur(0px)' }}
    exit={{    scale: 0.75, opacity: 0, filter: 'blur(4px)' }}
    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    style={{ display: 'block', transformOrigin: 'left center' }}
  >
    {currentText}
  </motion.span>
</AnimatePresence>
```

Key rules:
- `key` must be a stable state-derived string, not the text content itself
- `initial={false}` on AnimatePresence — no enter animation on first mount
- `transformOrigin: 'left center'` for left-aligned text; `'center'` for centered
- `display: 'block'` required — transformOrigin is ignored on inline elements

---

## Icon Rules

### Icon Usage Rule
All icons must come from `@strange-huge/icons`. Never use inline SVGs extracted from Figma as a substitute.

**If an icon needed by a component does not exist in `@strange-huge/icons`:**
- Do NOT inline the SVG from Figma
- Stop and inform the user which icon(s) are missing from the library
- Wait for the user to add them to `@strange-huge/icons` before proceeding

**How to apply icons that do exist in the library:**
1. **Always use the `size` prop** — pass the pixel size explicitly (`size={16}`, `size={20}`) as specified in Figma, never CSS `width`/`height` on the wrapper
2. **Never add padding to the icon's direct wrapper** unless Figma shows padding on that wrapper — the icon's bounding box already accounts for optical spacing
3. **Never scale icons with CSS** (`transform: scale(...)`, `width`/`height` on the SVG element) — use the `size` prop only
4. **Icon wrapper spans** must not constrain the icon's natural size — no `width`/`height` on the wrapper, just `lineHeight: 0`
5. **Spacing between icon and adjacent text** comes from the parent's `gap`, not from icon padding — match the `gap` value in Figma exactly

### Folder Icon — Sidebar Only
Never use `FolderOneIcon` (or any folder icon) outside of Sidebar and its related components (SidebarMenuItem, SidebarProjectsSection).

**Why:** The folder icon is semantically tied to sidebar project navigation. Using it elsewhere dilutes its meaning.

### New Project Icon Rule
The "New project" SidebarMenuItem in the Sidebar must always have `icon={<FolderAddIcon size={20} />}`. This applies in the component default content AND in every story or custom `projectItems` slot.

---

## Documentation Rules

### Component Spec Hierarchy Pattern
Every new component requires two spec files:

1. **`specs/components/[component].md`** — Complete implementer reference (variants, states, tokens, spacing, shadows, interaction, accessibility)
2. **`specs/[tier]/[component].md`** — Hierarchy file (role in system, composition tree, dependencies, consumers, adjacent relations)

**Tier placement:**
- `specs/atoms/` — no KDS deps
- `specs/molecules/` — composed of atoms or UI primitives
- `specs/organisms/` — full layout shells

After finalising a component, write both files immediately. The hierarchy file must include a composition tree diagram showing every KDS component used internally.
