# Motion & Micro-interactions

## Motion as Communication
- Animation is no longer decoration — it communicates **state, hierarchy, and flow**
- Use motion to show relationships: what appeared, what changed, where you came from
- Avoid gratuitous animation that adds time without adding meaning

## Micro-interaction Best Practices
- Every interaction deserves feedback: hover states, button clicks, form validation, loading states
- Examples: button ripple on click, form field highlight on focus, skeleton screens while loading
- Keep durations short: **150–300ms** for most transitions; longer feels sluggish

## Common High-Impact Micro-interactions
- Inline validation on form fields (real-time, not on submit)
- Progress indicators for multi-step flows
- Subtle hover effects on cards and links
- Toast notifications for async actions (save, delete, copy)
- Smooth page transitions for SPAs

## Respect User Preferences
- Always honor `prefers-reduced-motion` media query
- Provide settings to disable animations for users with vestibular disorders
