# Product Requirements Document

## Kaapi House — High-End Animated Website Demo

**Document type:** Build specification and Codex implementation prompt  
**Project:** Premium, responsive marketing website for Kaapi House  
**Business:** Traditional South Indian café near Manyata Tech Park, Nagavara, Bengaluru  
**Instagram:** `@kaapi_house`  
**Tagline:** “Brewed with tradition, served with love.”  
**Primary purpose:** Create an impressive, approachable demonstration that helps win Kaapi House as a client.

---

## 1. Codex mission

Build a production-quality animated website demo for Kaapi House using the requirements in this document. The result must feel custom-designed for the café—not like a generic restaurant template.

Use the supplied Kaapi House logo and promotional assets as the visual source of truth. Translate their deep-green, warm-cream, terracotta, clay-brown and brass-gold identity into a refined digital experience.

The website must demonstrate how a professional online presence can help Kaapi House:

- Convert Instagram attention into menu views and store visits.
- Help nearby customers quickly find the café.
- Generate WhatsApp, call and corporate-order enquiries.
- Communicate its traditional identity more professionally.
- Present food, offers and the café story in an owned digital destination.

Do not claim that the demo is the official Kaapi House website. Add a discreet “Concept website” label in the footer or project metadata.

---

## 2. Product goals

### Primary goals

1. Create a memorable first impression within five seconds.
2. Make the café feel warm, authentic, local and premium without losing affordability.
3. Provide obvious paths to the menu, directions, WhatsApp and corporate enquiries.
4. Demonstrate high-end animation while retaining excellent usability and performance.
5. Work flawlessly across mobile, tablet, laptop and large desktop screens.

### Demo-conversion goal

The owner should immediately understand that this is not only a visual redesign. It is a practical system for local discovery, enquiries, customer confidence and business growth.

### Non-goals for this concept

- Do not build a complete ecommerce or delivery platform.
- Do not process real payments.
- Do not invent customer reviews, awards, prices, phone numbers or opening hours.
- Do not imply partnerships with delivery platforms unless confirmed.
- Do not overload every section with 3D or motion.

---

## 3. Target audience

- Employees and office teams around Manyata Tech Park.
- Nearby residents in Nagavara and surrounding neighbourhoods.
- Commuters searching for breakfast, coffee or evening snacks.
- Hotel guests staying near IBIS.
- Small teams seeking breakfast, beverage or snack orders.
- Instagram visitors who want the menu, address or directions.

### Primary user journeys

1. **Instagram visitor:** Landing page → favourites/menu → directions or WhatsApp.
2. **Local search visitor:** Landing page → location and timings → Google Maps.
3. **Office administrator:** Corporate section → enquiry form or WhatsApp.
4. **New customer:** Hero → story → food → trust/location → visit CTA.

---

## 4. Brand and art direction

### Personality

Warm, rooted, welcoming, lively, honest, nostalgic and proudly Bengaluru.

### Creative concept

**“A Bengaluru ritual brought to life.”**

Blend the sensory warmth of traditional filter kaapi with a high-end editorial web experience. The design should reference South Indian café culture through materials, movement and composition rather than decorative clichés.

### Colour tokens

```css
--kaapi-green: #004B2E;
--leaf-cream: #F6E7B8;
--warm-paper: #FFF8E7;
--clay-brown: #8B3F1F;
--terracotta: #E34D3F;
--brass-gold: #D4A13A;
--ink: #1F2A22;
--muted-ink: #5F665F;
```

Use cream as the main reading surface, deep green for premium brand sections, terracotta sparingly for urgency, and gold for highlights. Avoid pure white and pure black where possible.

### Typography

- Display: `Fraunces`, `DM Serif Display` or a similar editorial serif.
- Body/UI: `Manrope`, `Poppins` or `Inter`.
- Use large expressive headlines, compact labels and highly legible body copy.
- Use `clamp()` for responsive typography.

### Visual language

- Soft paper grain, subtle steam, warm highlights and tactile materials.
- Rounded editorial cards mixed with traditional line borders.
- Brass, ceramic, steel, banana leaf and roasted coffee colour references.
- Use the illustrated hostess from the logo as a meaningful brand anchor.
- Keep visual hierarchy spacious and sophisticated.
- Avoid neon colours, glassmorphism overload and generic coffee-bean backgrounds.

---

## 5. Required technology

Use:

- React with Vite, or Next.js with the App Router if the repository already uses Next.js.
- TypeScript unless the existing project is JavaScript-only.
- Tailwind CSS or clean CSS Modules following the existing repository convention.
- Three.js through `@react-three/fiber` and `@react-three/drei`.
- Framer Motion for UI transitions, scroll choreography and interaction states.
- GSAP only if a specific pinned sequence cannot be implemented cleanly with Framer Motion. Do not duplicate animation responsibilities unnecessarily.
- Lucide React for simple interface icons.

Keep content in reusable data objects instead of repeating hardcoded JSX.

### Suggested project structure

```text
src/
  assets/
  components/
    layout/
    sections/
    ui/
    three/
  data/
  hooks/
  lib/
  pages/ or app/
  styles/
```

---

## 6. Information architecture

The main demo may be a rich single-page experience with anchor navigation:

- Home
- Menu
- Our Story
- Experience
- Instagram
- Corporate Orders
- Visit Us

Design the architecture so Menu, About and Contact can later become independent routes without rebuilding shared components.

---

## 7. Page experience and sections

### 7.1 Loading experience

Create a short branded loader lasting no longer than necessary.

- Animate a simple line illustration of filter coffee pouring between tumbler and dabarah.
- Display “Brewing your experience…” beneath it.
- Progress should reflect actual asset readiness when possible.
- Exit with a steam-shaped mask reveal into the hero.
- Skip or simplify the loader for repeat visits.
- Never trap the user behind a long artificial animation.

### 7.2 Sticky navigation

- Logo and Kaapi House wordmark on the left.
- Links: Menu, Our Story, Experience and Visit Us.
- Primary action: “Get Directions”.
- Secondary icon action: Instagram.
- Start transparent over the hero and transition into a cream or green surface after scrolling.
- Use a subtle border and background blur only after scroll.
- On mobile, provide an accessible menu drawer with staggered link reveals.
- Include a persistent mobile action dock for Directions and WhatsApp after the hero.

### 7.3 Hero — “The Kaapi Ritual”

Create a cinematic yet approachable split composition.

**Copy:**

- Eyebrow: `Traditional South Indian Café • Nagavara`
- Heading: `Bengaluru’s everyday ritual, brewed the traditional way.`
- Description: `From aromatic filter kaapi to comforting South Indian favourites, Kaapi House serves familiar flavours with warmth, honesty and a little taste of home.`
- Primary CTA: `Explore the Menu`
- Secondary CTA: `Get Directions`
- Location note: `Beside IBIS • Near Manyata Tech Park`

**Three.js hero scene:**

- Model or construct a stylised brass/steel filter coffee tumbler and dabarah.
- Add a graceful coffee-pour ribbon between vessels.
- Create lightweight procedural steam using transparent planes, shader noise or particles.
- Add soft floating coffee-bean or spice particles at very low density.
- Use physically plausible warm studio lighting and subtle contact shadows.
- The cup may react slightly to pointer movement, device tilt when permitted, and scroll.
- The 3D composition must support the copy rather than obstruct it.
- Use compressed GLTF/GLB assets, Draco where appropriate and lazy loading.

**Hero motion:**

- Reveal the eyebrow, headline lines, paragraph and actions with controlled stagger.
- Use a text-mask or clip-path reveal for the headline.
- Let the 3D vessel enter with a slow rotation and scale settle.
- Create subtle layered parallax for the decorative leaf and brass elements.
- Add a clear animated scroll cue.

### 7.4 Quick value strip

Create four concise cards:

1. Traditional Filter Kaapi
2. South Indian Comfort Food
3. Honest Everyday Value
4. Near Manyata Tech Park

Animate them into view with a small upward stagger. Icons should draw or fill on hover. On mobile, use a two-column grid rather than a difficult horizontal carousel.

### 7.5 Brand story — “A familiar taste, served with heart”

Use an editorial composition with oversized typography, the supplied illustrated brand character and one promotional creative.

**Body copy:**

`Kaapi House was created around a simple idea: everyday food should feel fresh, comforting and welcoming. Familiar recipes, traditional flavours and warm hospitality come together to offer a genuine taste of home.`

**Scroll animation:**

- Use a pinned desktop sequence for part of the section.
- As the user scrolls, transition from an outline of the logo character to the full-colour identity.
- Animate a thin traditional border as if it is being drawn.
- Move short phrases—“Fresh”, “Familiar”, “Made with warmth”—through the composition.
- On mobile, replace pinning with a normal stacked reveal to prevent awkward scroll capture.

### 7.6 Sensory marquee

Create a bold horizontal band with repeating phrases:

`FILTER KAAPI • THATTE IDLI • CHAI BREAKS • BENGALURU COMFORT •`

Use smooth, slow movement. Pause or reduce movement on hover and respect reduced-motion preferences. Do not use an infinite marquee that causes layout overflow.

### 7.7 House favourites

Show polished cards for:

- Filter Kaapi
- Thatte Idli
- Lemon Rice
- Chai
- Sandwiches
- Seasonal Specials

Do not invent prices. Add `Menu and availability may vary.`

**Interaction:**

- Cards should reveal their description through elegant motion, not a disruptive flip.
- Use image scale, gradient shift and small label movement on hover.
- Cursor-follow effects may be used only on fine-pointer devices.
- Provide a “View Full Menu” CTA.

### 7.8 3D “From bean to brew” interlude

Build a short scroll-driven Three.js scene:

- Begin with a coffee bean or small group of beans.
- Scroll transforms the composition through roast colour, ground coffee texture and a final steaming cup silhouette.
- Pair each state with one brief phrase: `Selected`, `Brewed`, `Served with love`.
- Keep the sequence metaphorical and visually refined; it does not need to depict an industrial process.
- On low-power/mobile devices, use a simplified canvas scene or pre-rendered layered animation.

### 7.9 Manyata workday section

Position Kaapi House as an easy workday destination.

- Heading: `Your workday break, made better.`
- Copy: `Quick breakfasts, refreshing tea breaks and comforting meals—just minutes from Manyata Tech Park.`
- Use cases: `Breakfast before work`, `Team tea and snack breaks`, `Corporate and bulk orders`.
- CTAs: `Order on WhatsApp` and `Enquire for Your Team`.

Use a desktop bento-grid composition with a subtle animated route line from Manyata Tech Park to Kaapi House. On mobile, stack the content in a logical order.

### 7.10 Instagram and community

- Heading: `Fresh from @kaapi_house`
- Use supplied Instagram assets in an art-directed masonry or offset grid.
- Do not imitate the full Instagram interface.
- Animate images with restrained scale and clipping reveals.
- Add a “Follow on Instagram” CTA.
- Do not show invented follower counts or engagement metrics in the public website.

### 7.11 Testimonials placeholder

Do not fabricate quotations. Build a visually complete section using clearly labelled placeholder cards such as:

`Verified customer testimonials will appear here.`

Alternatively, hide this section by default using a feature flag until real reviews are supplied.

### 7.12 Visit section

**Address:** 78/1, 14th Cross Road, beside IBIS, Chanakya Layout, Nagavara, Bengaluru, Karnataka.

Include:

- Clear address and landmark.
- Opening-hours placeholder marked `Confirm with Kaapi House`.
- Phone and WhatsApp placeholders.
- `Open in Google Maps`, `Call` and `WhatsApp` actions.
- An art-directed map placeholder with nearby landmark labels.
- A custom animated location pin inspired by the logo.

Use scroll animation to draw a route line into the pin. Do not fabricate an exact route or embed an unverified map location.

### 7.13 Final conversion section

Use a cinematic deep-green closing panel.

- Heading: `Good food. Great kaapi. Right around the corner.`
- Copy: `Whether it’s your morning coffee, an office snack run or a comforting evening meal, there’s always something waiting at Kaapi House.`
- CTAs: `Get Directions` and `Chat on WhatsApp`.
- Add a soft steam animation rising behind the heading.
- As the footer approaches, transition the background from green to warm paper.

### 7.14 Footer

Include:

- Logo and tagline.
- Anchor navigation.
- Instagram handle.
- Address.
- Contact placeholders.
- `Concept website prepared for Kaapi House`.
- `Made with warmth in Bengaluru.`

---

## 8. Animation system

Motion must communicate warmth and craft. It should not feel like a technology showcase unrelated to a café.

### Framer Motion requirements

- Route/page entrance with a brief opacity and clip transition.
- Reusable `Reveal`, `StaggerGroup`, `MagneticButton` and `ParallaxMedia` primitives.
- Viewport-triggered section reveals with `once: true` where repetition would distract.
- `useScroll` and `useTransform` for progress-driven values.
- Smooth layout transitions for responsive menus and card states.
- Button hover, press, focus and disabled states.
- Avoid animating large layout properties when transforms can be used.

### Scroll choreography

- Hero copy and 3D scene settle during the first viewport.
- Story imagery and borders reveal progressively.
- Selected sections may pin only on desktop and only when the sequence benefits from it.
- Food cards enter with controlled stagger.
- Route line and location pin animate near the visit section.
- Add a thin branded scroll-progress indicator if it remains subtle.

### Motion timing

- Microinteraction: 150–250ms.
- Component entrance: 400–700ms.
- Editorial reveal: 700–1100ms.
- Use natural easing such as `[0.22, 1, 0.36, 1]`.
- Avoid excessive spring bounce.

### Reduced motion

When `prefers-reduced-motion: reduce` is enabled:

- Disable cursor parallax, pinned scroll scenes and decorative continuous movement.
- Replace 3D transformations with stable compositions or fades.
- Keep all content available without animation.

---

## 9. Three.js engineering requirements

- Keep canvases isolated and reusable.
- Use `Suspense` with branded fallbacks.
- Load 3D scenes only when near the viewport.
- Clamp device pixel ratio, for example `[1, 1.5]` on most devices.
- Use conservative shadow resolution.
- Avoid large particle systems.
- Dispose of textures, materials and geometries correctly.
- Pause render loops when the canvas is off-screen or the tab is hidden.
- Prefer `frameloop="demand"` for mostly static scenes.
- Provide a static poster or CSS fallback if WebGL is unavailable.
- The page must remain useful if every 3D canvas fails.

### Performance budget

- Target Lighthouse performance score: 85+ on mobile and 90+ on desktop in a production build.
- Target accessibility, SEO and best-practices scores: 95+.
- Keep initial JavaScript reasonable; lazy-load Three.js sections.
- Compress images with AVIF/WebP where supported.
- Avoid cumulative layout shift by defining media dimensions.
- Target LCP under 2.5 seconds on a typical 4G connection where practical.

---

## 10. Responsive requirements

Design and test at minimum:

- 360 × 800
- 390 × 844
- 768 × 1024
- 1024 × 768
- 1440 × 900
- 1920 × 1080

### Mobile behavior

- Mobile is a deliberately composed experience, not a scaled desktop page.
- Stack the hero copy above or below a simplified 3D composition.
- Avoid horizontal scrolling.
- Disable hover-only information.
- Avoid long pinned sequences.
- Keep CTAs reachable with one thumb.
- Use a compact sticky Directions/WhatsApp action bar.
- Reduce particle count, texture size and lighting complexity.

---

## 11. Accessibility

- Meet WCAG 2.1 AA contrast standards.
- Use semantic headings and landmarks.
- Ensure full keyboard navigation.
- Provide visible focus indicators matching the brand.
- Add descriptive alternative text to meaningful images.
- Mark decorative assets appropriately.
- Do not place essential text inside images.
- Provide labels and validation messages for every form field.
- Maintain a minimum 44 × 44px interactive target.
- Ensure all content remains available when JavaScript animation is reduced.

---

## 12. SEO and local discovery foundation

Include:

- Unique title and meta description.
- Open Graph and social preview metadata.
- Canonical URL placeholder.
- `Restaurant` or `CafeOrCoffeeShop` structured-data scaffold with clearly marked fields requiring verification.
- Address and landmark in readable HTML.
- Sitemap and robots configuration where supported.
- Semantic content around traditional filter coffee, South Indian breakfast, Nagavara and Manyata Tech Park without keyword stuffing.
- Fast, descriptive image alt text and filenames.

Suggested demo title:

`Kaapi House | Traditional Filter Coffee & South Indian Food in Nagavara`

Do not publish unverified business hours, prices, phone numbers or coordinates in structured data.

---

## 13. Forms and interactions

Create a polished corporate enquiry form with:

- Name
- Company
- Work email or phone
- Team size
- Requirement type
- Preferred date
- Message

For the demo:

- Validate fields client-side.
- Show a convincing success state.
- Do not submit data to a real service unless a backend is explicitly configured.
- Clearly isolate the form submission adapter so Formspree, Resend, an API route or another service can be added later.

All placeholder contact links should be stored in one configuration file.

---

## 14. Content and data rules

Create a central configuration/data layer for:

- Navigation
- Menu highlights
- Instagram assets
- Contact details
- Business hours
- Social links
- Location links
- Corporate enquiry destination

Use visible development placeholders for unverified details. Do not silently invent information.

Use the supplied logo and promotional posts. Preserve their aspect ratios and do not crop out important text or brand elements.

---

## 15. Reusable component requirements

Build reusable components for:

- `Header`
- `MobileMenu`
- `SectionHeading`
- `PrimaryButton`
- `SecondaryButton`
- `MagneticButton`
- `Reveal`
- `StaggerGroup`
- `FoodCard`
- `HighlightCard`
- `InstagramCard`
- `CorporateEnquiryForm`
- `LocationPanel`
- `MobileActionDock`
- `Footer`
- `KaapiHeroScene`
- `BeanToBrewScene`
- `WebGLFallback`

Avoid monolithic page components.

---

## 16. Hireable-demo requirements

The demo should be easy to present to Kaapi House on a laptop or mobile phone.

- Include a compelling hero without requiring any interaction.
- Ensure all primary CTAs visibly work, even when linked to placeholders.
- Add believable hover, loading, empty and success states.
- Use polished placeholder handling instead of broken links.
- Add a small demo switch or query parameter only if useful for showing alternate mobile/desktop content; do not expose developer controls in the main design.
- The first screen, menu preview, corporate-order opportunity and location should communicate commercial value immediately.
- Avoid technical language in customer-facing copy.
- The finished result should look credible enough to present as a commissioned concept.

---

## 17. Quality assurance checklist

Before declaring completion, Codex must:

1. Run the development server and inspect the entire page visually.
2. Test every navigation anchor and CTA.
3. Verify there is no horizontal overflow at supported breakpoints.
4. Test mobile menu opening, focus management and closing.
5. Test form validation and success state.
6. Test with reduced motion enabled.
7. Test WebGL fallback behavior.
8. Confirm canvases do not continue expensive rendering off-screen.
9. Check console for errors and warnings.
10. Run production build and fix all build errors.
11. Check keyboard navigation.
12. Validate headings, metadata and structured-data placeholders.
13. Run Lighthouse or equivalent checks and address major regressions.
14. Capture desktop and mobile screenshots for presentation.

---

## 18. Definition of done

The project is complete when:

- The responsive landing page implements every required section.
- The visual language clearly reflects the Kaapi House logo and social assets.
- At least two purposeful Three.js experiences are present: the hero kaapi scene and the bean-to-brew interlude.
- Framer Motion powers reusable entrance, scroll and interaction patterns.
- Mobile and reduced-motion alternatives are intentionally designed.
- Unverified information is clearly represented as configurable placeholders.
- Primary actions—Menu, Directions, Instagram, WhatsApp and Corporate Enquiry—are prominent and functional at demo level.
- The production build completes successfully.
- No major accessibility, responsiveness or performance issues remain.
- The result is polished enough to share directly with Kaapi House as a client-winning demonstration.

---

## 19. Implementation instruction for Codex

First inspect the repository, existing stack, assets and coding conventions. Reuse suitable existing components and avoid unnecessary dependencies. Then create a brief implementation plan and build the experience section by section.

Prioritise in this order:

1. Stable responsive layout and brand system.
2. Clear conversion journeys and accurate content.
3. Hero quality and first-screen impact.
4. Framer Motion choreography.
5. Three.js enhancement and progressive fallbacks.
6. Accessibility, performance and final QA.

Do not stop after scaffolding. Complete the experience, run it, inspect it visually, fix issues and deliver a working production build.
