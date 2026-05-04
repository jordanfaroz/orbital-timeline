# Mobile & Responsive Design

## Mobile-First is Non-Negotiable
- 63% of users abandon sites with mobile usability issues
- Start designs at mobile viewport, scale up — not the other way around
- Touch targets: minimum **44×44px**; prefer **48×48px** for primary actions

## Responsive Breakpoints
| Breakpoint | Width      | Notes                        |
|------------|------------|------------------------------|
| Mobile     | 320–480px  | Primary design target        |
| Tablet     | 481–768px  | Adapt layout, not just scale |
| Laptop     | 769–1024px | Multi-column begins          |
| Desktop    | 1025px+    | Full layout                  |
| Ultrawide  | 1440px+    | Cap max content width ~1280px|

## Tailwind Breakpoints
| Prefix  | Min Width | Usage         |
|---------|-----------|---------------|
| (none)  | 0px       | Mobile first  |
| `sm:`   | 640px     | Small tablet  |
| `md:`   | 768px     | Tablet        |
| `lg:`   | 1024px    | Desktop       |
| `xl:`   | 1280px    | Large desktop |
| `2xl:`  | 1536px    | Ultrawide     |

## Cross-Platform Consistency
- Maintain design consistency across web, iOS, Android, and emerging form factors
- Use code-backed component libraries (like shadcn/ui, MUI) to enforce cross-platform parity
- Test on real devices, not just browser emulators
