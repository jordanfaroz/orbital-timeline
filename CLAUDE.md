# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md
@.claude/rules/core-principles.md
@.claude/rules/visual-design.md
@.claude/rules/typography.md
@.claude/rules/layout.md
@.claude/rules/motion.md
@.claude/rules/accessibility.md
@.claude/rules/mobile-responsive.md
@.claude/rules/ai-design.md
@.claude/rules/performance.md
@.claude/rules/design-systems.md
@.claude/rules/forms.md
@.claude/rules/testing.md
@.claude/rules/emerging-trends.md
@.claude/rules/recreation-workflow.md
@.claude/rules/technical-defaults.md
@.claude/rules/tools.md

# Project: Orbital Timeline Resume

A Next.js 16 + TypeScript + Tailwind CSS v4 + shadcn/ui app that renders Jordan Ambrose Faroz's resume as a radial orbital timeline with an animated WebGL shader background.

## Stack
- Framework: Next.js 16 (App Router, Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Components: shadcn/ui (badge, button, card)
- Icons: lucide-react
- 3D/WebGL: three.js (named imports only — no `import * as THREE`)
- Deployment: GitHub → Vercel

## Commands

npm is at `C:\Program Files\nodejs\npm.cmd` — it is NOT on the default shell PATH. Always invoke it as:

```powershell
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
& "C:\Program Files\nodejs\npm.cmd" <command> --prefix "c:\Users\JordanAmbroseFaroz\Desktop\orbital-timeline"
```

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Lint | `npm run lint` |

The dev server uses Turbopack and starts on port 3000 (increments if occupied). Only one `next dev` instance can run at a time — kill the existing PID first if a second is needed.

## Architecture

### Page composition (`src/app/page.tsx`)
The page renders two components in a fragment:
1. `AnimatedShaderBackground` — dynamically imported (`ssr: false`) to keep Three.js out of the SSR bundle
2. `RadialOrbitalTimeline` — the interactive orbital UI

Resume data (all timeline entries) lives directly in `page.tsx` as a `timelineData` array passed as props to the timeline.

### Z-index stacking
The shader and timeline use an explicit stacking contract:
- `AnimatedShaderBackground` container: `fixed inset-0 z-0`
- `RadialOrbitalTimeline` outer wrapper: `relative z-10`

Do NOT use negative z-index (e.g. `-z-10`) for the shader — it places the canvas behind the body's background paint, making it invisible on a dark background.

### AnimatedShaderBackground (`src/components/ui/animated-shader-background.tsx`)
Pure WebGL via Three.js. Renders a full-screen GLSL fragment shader (comet/aurora trail effect) using an `OrthographicCamera` + `PlaneGeometry(2,2)` quad. The animation loop increments a `iTime` uniform each frame. Cleanup disposes geometry, material, and renderer on unmount.

Three.js imports must be named (not `import * as THREE`) to keep the bundle size down.

### RadialOrbitalTimeline (`src/components/ui/radial-orbital-timeline.tsx`)
Uses a `mounted` boolean guard (set in `useEffect`) before rendering orbital node positions to prevent SSR/client hydration mismatches on computed `transform` values. Auto-rotation runs via a 50ms `setInterval` on the `rotationAngle` state; it pauses when a node is expanded or the center is clicked.

### Globals (`src/app/globals.css`)
- Imports: `tailwindcss`, `tw-animate-css`, `shadcn/tailwind.css`
- Body and html backgrounds are explicitly set to `black` — required for the shader to be visible
- Tailwind v4 theme tokens defined via `@theme inline` and `@custom-variant dark`
