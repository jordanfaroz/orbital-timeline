# Website Recreation Workflow

When given a reference image (screenshot, mockup, or design file), follow this iterative loop to produce a pixel-accurate HTML implementation.

## The 6-Step Recreation Loop

**Step 1 — Generate**
- Create a single `index.html` file using **Tailwind CSS via CDN**
- Include all content inline — no external files unless explicitly requested

**Step 2 — Screenshot**
- Render the page and capture a full-page screenshot using Puppeteer:
  ```bash
  npx puppeteer screenshot index.html --fullpage
  ```
- If the page has distinct sections, capture each section individually as well

**Step 3 — Compare**
- Place your screenshot side-by-side with the reference image
- Check for mismatches in:
  - Spacing and padding (measure in px)
  - Font sizes, weights, and line heights
  - Colors (exact hex values)
  - Alignment and positioning
  - Border radii, shadows, and effects
  - Responsive behavior
  - Image/icon sizing and placement

**Step 4 — Fix**
- Fix every mismatch found
- Edit the HTML/Tailwind code directly; do not start over

**Step 5 — Re-screenshot**
- Take a new screenshot and compare again

**Step 6 — Repeat**
- Repeat steps 3–5 until the result is within **~2–3px** of the reference everywhere
- Always do at least **2 comparison rounds**

## Section-by-Section Capture Strategy
For long or complex pages, break the comparison into sections:
- Header / Navigation
- Hero / Above the fold
- Feature blocks
- Cards / Grid sections
- Footer
