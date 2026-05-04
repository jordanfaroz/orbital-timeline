# Design Systems

## Why You Need One
- A design system is the **single source of truth** for all UI elements
- Eliminates inconsistency across teams, speeds up development, and reduces design debt

## What a Design System Includes
- **Tokens**: color, spacing, typography, shadow, border radius values
- **Components**: buttons, inputs, modals, navigation, cards — with documented variants and states
- **Patterns**: form layouts, empty states, error handling, loading states
- **Guidelines**: tone of voice, icon usage, imagery style, accessibility rules

## Modern Design System Practices
- Use **code-backed components** (not just Figma frames) — tie design directly to production code
- Integrate with Git for version control and cross-platform sync (web, React Native, etc.)
- Document every component with usage examples, dos/don'ts, and accessibility notes

## This Project's Design System
- Component library: shadcn/ui (badge, button, card)
- Styling: Tailwind CSS v4 utility classes
- Icons: lucide-react
- Tokens: defined in `src/app/globals.css` as CSS custom properties
