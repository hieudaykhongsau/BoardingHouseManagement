---
name: premium-glassmorphism-ui
description: A highly sophisticated, Apple-inspired premium glassmorphism design system. Avoids generic AI aesthetics (neon purple/cyan). Focuses on deep, muted luxury palettes, frosted glass effects, subtle inner borders, and high typographic refinement.
---

# SKILL: Premium Glassmorphism & Modern Luxury Interface

## 1. Skill Meta
**Name:** Premium Glassmorphism UI
**Description:** Advanced proficiency in architecting interfaces that synthesize modern Apple-inspired aesthetics with refined glassmorphism. This discipline requires mastery over `backdrop-filter`, subtle semi-transparent borders, smooth gradients, and sophisticated typography. The objective is to construct digital environments that feel expensive, highly polished, tactile, and completely devoid of generic "AI" tropes (like harsh neon purples or cyan gradients).

## 2. Visual Archetype: The Frosted Lens
The design system operates on the concept of physical layers of frosted glass floating above a deep, abstract, slowly shifting background.

*   **Characteristics:** Dark mode optimized (or deep cold tones). Heavy reliance on `backdrop-blur`. Containers have low-opacity white fills (e.g., `bg-white/5` or `bg-white/10`) and 1px inner borders (`border border-white/10`) to simulate physical glass edges. Typography is clean, anti-aliased, and uses varying opacities for hierarchy instead of just font-weight.

## 3. Typographic Architecture
Typography must feel effortless, highly legible, and premium.

*   **Classification:** Geometric Sans-Serif or Neo-Grotesque.
*   **Optimal Web Fonts:** Inter, SF Pro (Apple), Geist, Outfit, Plus Jakarta Sans.
*   **Implementation Parameters:**
    *   **Scale:** Smooth fluid scaling. No jarring jumps.
    *   **Tracking:** Tighter tracking on display headlines (`-0.02em` to `-0.04em`), slightly looser tracking on small all-caps labels (`0.05em`).
    *   **Hierarchy via Opacity:** Use `text-white/90` for primary headings, `text-white/60` for body, and `text-white/40` for metadata. Avoid pure `#FFFFFF` for large blocks of text as it strains the eyes.

## 4. Color System: The Anti-AI Palette
**CRITICAL:** Absolutely NO generic AI gradients (no neon purple, magenta, or blinding cyan). NO orange/green/blue combinations.

**The Palette: "Deep Slate & Cold Chrome"**
*   **Background Base:** Deep, almost-black cool grays. `#0C0C0E` (Obsidian) or `#0F1115` (Deep Slate). Never pure black `#000000`.
*   **Background Ambiance:** Large, extremely blurred, low-opacity orbs of color floating in the background to give the glass something to refract.
    *   *Orb Colors:* Muted Cobalt (`#2A4B7C`), Deep Forest/Teal (`#183D3D`), or Soft Silver/Pearl (`#8B949E`).
*   **Glass Containers:** `bg-white/5` (or `bg-zinc-500/10`) with `backdrop-blur-xl` or `backdrop-blur-2xl`.
*   **Borders:** `border-white/10` or a very subtle gradient border to catch the "light".
*   **Foreground/Text:** `#F1F5F9` (Slate 50) for primary text, `#94A3B8` (Slate 400) for secondary text.
*   **Accent Color:** "Cold Chrome" (a metallic silver-blue `#E2E8F0` or muted ice-blue `#7DD3FC` at 80% opacity). Use it for subtle glowing indicators, active states, and primary CTAs. It must feel like brushed metal or frosted ice, not a laser beam.

## 5. Layout and Spatial Engineering
*   **Padding & Breathing Room:** Extremely generous. Sections should have massive padding (e.g., `py-24` or `py-32`). Elements must never feel cramped.
*   **Bento Grids with Glass:** Layouts often use irregular Bento grids, but instead of solid cards, each cell is a glass pane revealing the ambient background behind it.
*   **Corner Radii:** Smooth, organic curves. Typically `rounded-2xl` or `rounded-3xl` for main containers, `rounded-full` for pills and buttons. Never sharp 90-degree corners.

## 6. UI Components and Symbology
*   **Buttons:** Glass pills. `bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 transition-all duration-300`.
*   **Shadows:** Extremely soft, large, and low opacity to simulate floating objects. e.g., `shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]`.
*   **Icons:** Thin, elegant strokes (1.5px or 1.2px). Phosphor Icons or Heroicons outline. No heavy solid icons.

## 7. Execution Directives (Tailwind CSS)
When writing frontend code, deploy these utility combinations:

*   **The Perfect Glass Panel:** 
    `bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden`
*   **The Inner Glow (Reflection edge):** 
    Add an inner shadow: `shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]`.
*   **Ambient Background Layout:**
    ```tsx
    <div className="fixed inset-0 z-[-1] bg-[#0F1115] overflow-hidden">
      {/* Blurred ambient orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[128px]"></div>
    </div>
    ```

## 8. Anti-patterns to Avoid
❌ BANNED: Orange, lime green, bright cyan, hot magenta, or neon purple.
❌ BANNED: Solid flat dark gray cards (`bg-gray-800` or `bg-gray-900` with no blur).
❌ BANNED: Thick borders (`border-2`) or brightly colored borders on glass containers.
❌ BANNED: Sharp corners on primary layout elements.
❌ BANNED: Generic "futuristic" fonts (like Orbitron or Syncopate). Stick to premium geometric sans-serifs.
