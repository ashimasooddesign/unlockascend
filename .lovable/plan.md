

## Plan: Mobile Hamburger Menu + Logo Integration

### What changes

1. **Copy the uploaded SVG logo** into `src/assets/ascend-logo.svg`

2. **Update `SiteHeader.tsx`**:
   - Import the logo SVG and replace the text "Ascend" with an `<img>` tag (~h-8 or h-10)
   - Add responsive behavior:
     - Desktop (`md:` and up): show nav links inline as they are now
     - Mobile (`md:` below): hide inline links, show a hamburger icon button (Menu from lucide-react)
   - Use the Sheet component (already in the project) for the mobile menu drawer:
     - Opens from the right side
     - Lists all nav links vertically with generous spacing
     - Closes on link click
   - Import `useIsMobile` hook (already exists) or use simple Tailwind `hidden/flex` classes

### Files modified
- `src/assets/ascend-logo.svg` — new file (copied from upload)
- `src/components/SiteHeader.tsx` — replace text logo with SVG, add Sheet-based mobile menu with hamburger trigger

### Technical details
- Desktop nav links wrapped in `hidden md:flex`
- Hamburger button wrapped in `flex md:hidden`
- Sheet from `@/components/ui/sheet` used for mobile drawer (no new dependencies)
- Each mobile nav link calls `setOpen(false)` on click for auto-close
- Logo imported as ES module: `import ascendLogo from "@/assets/ascend-logo.svg"`

