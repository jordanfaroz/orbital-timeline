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
This is a Next.js 16 + TypeScript + Tailwind CSS + shadcn/ui project.
It renders a radial orbital timeline UI populated with Jordan Ambrose Faroz's resume data.

## Stack
- Framework: Next.js 16 (App Router, Turbopack)
- Language: TypeScript
- Styling: Tailwind CSS v4
- Components: shadcn/ui (badge, button, card)
- Icons: lucide-react
- Deployment target: GitHub → Vercel

## Key files
- `src/app/page.tsx` — timeline data (resume content lives here)
- `src/components/ui/radial-orbital-timeline.tsx` — the orbital animation component
- `src/components/ui/` — shadcn components (badge, button, card)
- `src/app/globals.css` — global styles and CSS variables
