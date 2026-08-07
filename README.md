# NBIC 2026 — Priority 8: Hero Redesign & Header Standardisation

- **Removed the floating glass chrome visual from the homepage hero** —
  deleted the rotated liquid-chrome orb, the backdrop-blur accent square and
  the cyan dot (`.hero-chrome-panel/.hero-chrome-accent/.hero-chrome-dot`).
  The hero copy now sits alone against the cityscape background, no glass
  overlay competing for attention.
- **Homepage hero copy strengthened** — switched the split grid to a single
  flexed column so the headline has the full width to breathe, bumped the
  title size up (`clamp(48px,5.6vw,82px)` → `clamp(50px,6.2vw,90px)`) and
  widened its container so it reads as a bold standalone statement.
- **Inner-page hero titles standardised to the homepage style** — added
  `font-weight:800` (previously unset, so browsers were falling back to a
  lighter default weight than the homepage) and reduced the size by 15%
  (`clamp(48px,5.4vw,82px)` → `clamp(41px,4.6vw,70px)`, mobile scaled the
  same way) so every inner page now visually matches Home at a slightly
  smaller scale, as intended for a page (not landing) hero.
- **Electric-blue → violet → orange gradient accent added to all 6 inner
  hero titles** (Program, Categories, Guide, Timeline, Registration,
  Contact) — reusing the exact gradient already applied to "Biz-Inno" on
  the homepage, so the accent treatment is now consistent site-wide in both
  EN and BM.
- Removed the now-dead CSS for the deleted chrome visual (~55 lines).

---

# NBIC 2026 — Priority 7: Final Tier Asset Cleanup

Pre-final-tier gap analysis. All 7 pages already carry consistent meta/OG tags,
favicons, nav, footers and active-state highlighting, so this pass is
asset-hygiene only (no visual or content changes):

- Removed `hero-cityscape 1.png` (2.2MB) — unused duplicate with a space in the
  filename, not referenced anywhere.
- Removed `liquid-chrome-bg.png.jpg` (92KB) — unused, byte-identical to the
  in-use `liquid-chrome-bg.jpg`.
- Removed `liquid-chrome-bg2.png` (540KB) — byte-identical to `liquid-chrome-bg1.png`.
  Its single usage (CTA band background) now points at `liquid-chrome-bg1.png`
  with zero visual change.
- Package size: 6.0MB → 3.4MB.

**Left untouched, flagged for your call:**
- `nbic-logo-white.png` (328KB) — not referenced anywhere. Checked the obvious
  candidate spot (dark footer) but `.footer-brand img` already gives the logo
  its own white rounded chip via CSS, so the white variant isn't needed there.
  Keeping it in case it's earmarked for something else — let me know if it
  should go.
- `css/styles-original-backup.css` — not loaded by any page, kept as your
  rollback reference per your usual convention.

---

# NBIC 2026 — Priority 6: Futuristic Liquid-Chrome Landing Redesign

Changes in this pass (on top of Priority 5 below):
- **Homepage condensed into a true landing page** — Hero → highlights + organiser →
  About → seven area chips → key dates → CTA. Fees, journey steps and the long
  area cards moved to their dedicated pages (fees now summarised in the hero
  checklist).
- **Split hero (Becourse-inspired)** — solid navy block with strong Michroma
  display type and a vibrant orange accent word, checklist of key facts, orange
  Register button; right side is a framed visual with electric-blue and cyan
  geometric shapes, a crisp liquid-chrome orb, and a cobalt band carrying the
  live registration countdown.
- **Clean white navigation** with the standard logo, navy links, and a
  cobalt-gradient CTA.
- **Inner-page heroes: contrast colour bands** — the translucent card is gone;
  each page is a solid navy→hue gradient band (per-page identity kept) with an
  angular accent shape, a crisp chrome orb, a solid accent eyebrow chip, and
  three vibrant solid meta cards (electric blue / orange / teal).
- **Liquid chrome sharpened** — no more low-opacity blur washes; chrome now
  appears as fully opaque, saturated design objects (rounded panel + orb) that
  still react to cursor movement in white sections.
- New palette tokens: navy `#071336`, cobalt `#1226b8`, vibrant orange
  `#ff5426`/`#ff7a1a`, teal `#2dd4bf` alongside the existing electric blues.

---

# NBIC 2026 — Priority 5: Minimalist Header & Futuristic Page Heroes

Changes in this pass (on top of Priority 4 below):
- **Minimalist standardized header** — removed the redundant top info bar on every
  page; single slim navigation row with a compact logo badge that no longer
  overlaps the nav links or the EN|BM switch.
- **Liquid chrome moved out of the hero headers** into the white content sections
  as decorative accents that react to cursor movement (subtle parallax on
  `.section-chrome` sections; disabled for touch devices and print).
- **Glass page-hero panels** — the inner-page info card is now translucent with
  backdrop blur so the hero artwork stays visible behind it.
- **Distinct hero identity per page** — each page carries its own futuristic
  gradient hue and accent colour: Program (sky blue), Categories (cyan),
  Timeline (violet), Registration (teal, with accent top border), Guide (ice
  blue), Contact (indigo).

---

# NBIC 2026 — Priority 4: Participant-Ready Refresh

Built on the Priority 3 electric-blue refresh. Changes in this pass:

## Fixes
- Repaired the missing "liquid chrome" backgrounds: CSS referenced `liquid-chrome-bg.png`,
  which does not exist in the repository. All references now point to the existing
  `liquid-chrome-bg.jpg`.

## Homepage reorganisation (participant-first flow)
1. Hero
2. Live registration status band with countdown to the 14 August 2026 abstract deadline
3. Four highlights + organiser ribbon
4. About NBIC 2026
5. The seven **official** competition areas (Areas A–G) — replacing the outdated
   three-card preview that showed pre-official category names
6. Important dates summary
7. Fees (Category A / Category B early bird)
8. Participation journey (4 steps)
9. Final call-to-action
- Removed the redundant "Explore the website" page-links section (duplicated the navigation).

## Participant-ready enhancements
- Live countdown to the registration/abstract deadline on the homepage and registration page.
- Official secretariat email `nbic2026@gmail.com` added to the contact page, the
  participation guide's confirmed-details list, and every page footer.
- Footer navigation standardised across all seven pages (Home, Program, Categories,
  Guide, Timeline, Register, Contact).

## Still pending secretariat confirmation
Detailed eligibility and team rules, abstract/poster/video specifications, judging
criteria, awards, and payment/refund policy (unchanged from Priority 2 notes).
