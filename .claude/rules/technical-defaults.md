# Technical Defaults & Implementation

## HTML Structure Defaults
- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Always include `<meta charset="UTF-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## Tailwind CSS Best Practices
- Prefer **utility classes** over custom CSS
- Use `gap-*`, `space-x-*`, `space-y-*` for spacing — avoid manual margins where possible
- For pixel-perfect work, use arbitrary values: `p-[14px]`, `mt-[22px]`, `w-[340px]`
- Extend config inline for custom brand colors:
  ```js
  tailwind.config = { theme: { extend: { colors: { brand: '#your-color' } } } }
  ```

## Spacing & Sizing
- **8px base grid**: all spacing should be multiples of 8 (or 4 for fine-tuning)
- Tailwind scale: `p-1`=4px, `p-2`=8px, `p-4`=16px, `p-8`=32px

## Shadows & Effects
| Effect          | Tailwind Class                          |
|-----------------|-----------------------------------------|
| Subtle card     | `shadow-sm`                             |
| Standard card   | `shadow-md`                             |
| Elevated modal  | `shadow-xl`                             |
| Custom shadow   | `shadow-[0_4px_24px_rgba(0,0,0,0.12)]` |
| Glassmorphism   | `backdrop-blur-md bg-white/10`          |

## Common Layout Patterns
```html
<!-- Centered container -->
<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

<!-- 3-column grid, stacks on mobile -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">

<!-- Card -->
<div class="rounded-2xl shadow-md bg-white p-6 hover:shadow-xl transition-shadow duration-300">
```

## Animation Defaults
- Hover transitions: `transition-all duration-200 ease-in-out`
- Prefer CSS transitions over JS for simple states
- For scroll animations, use `IntersectionObserver` with a toggled class

## Dark Mode
```html
<html class="dark">
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```
Add `darkMode: 'class'` to Tailwind config.

## Icons
- Use **lucide-react** for React projects (already installed in this project)
- Or inline Heroicons SVG for plain HTML
