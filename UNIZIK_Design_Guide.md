# UNIZIK Connect
## Design System & UI/UX Guide

**Version:** 1.0  
**Date:** March 2026  
**Platform:** iOS & Android Mobile Apps

---

## 1. Design Philosophy

### 1.1 Core Principles

Our design philosophy centers on creating a **"Digital Campus"** experience that feels:

1. **Familiar yet Modern** — Like a natural extension of campus life, enhanced by technology
2. **Empowering** — Helping students and alumni succeed and save money
3. **Trustworthy** — Professional, secure, and aligned with university values
4. **Inclusive** — Accessible to all users regardless of ability or tech proficiency
5. **Delightful** — Moments of joy through micro-interactions and personalization

### 1.2 Design Inspiration

Drawing from leading educational and community apps:
- **Duolingo** — Gamification and engagement mechanics
- **Spotify** — Clean navigation and personalization
- **Notion** — Flexible, modular content organization
- **Clubhouse** — Community-focused interaction design
- **Nigerian Fintech Apps** — Local context and mobile-first optimization

---

## 2. Color System

### 2.1 Primary Colors

#### UNIZIK Brand Foundation
```css
/* Primary Green - Growth, prosperity, Nigeria */
--color-primary-500: #1B5E20;    /* Deep Forest Green */
--color-primary-400: #2E7D32;    /* Leaf Green */
--color-primary-300: #4CAF50;    /* Vibrant Green */
--color-primary-200: #81C784;    /* Soft Green */
--color-primary-100: #E8F5E9;    /* Mint Cream */
--color-primary-50:  #F1F8E9;    /* Pale Green */
```

#### Accent Gold - Excellence, achievement
```css
--color-accent-500: #F9A825;     /* Golden Yellow */
--color-accent-400: #FBC02D;     /* Bright Gold */
--color-accent-300: #FDD835;     /* Lemon Gold */
--color-accent-100: #FFF9C4;     /* Cream */
```

### 2.2 Secondary Colors

```css
/* Secondary Blue - Trust, technology, MTN partnership */
--color-secondary-500: #1565C0;  /* Deep Blue */
--color-secondary-400: #1976D2;  /* Royal Blue */
--color-secondary-300: #2196F3;  /* Bright Blue */
--color-secondary-100: #BBDEFB;  /* Light Blue */
--color-secondary-50:  #E3F2FD;  /* Ice Blue */

/* Nigerian Cultural Colors */
--color-terracotta: #C75B39;     /* Warm Earth - Nigerian soil */
--color-sand: #D4A574;           /* Savannah Sand */
--color-sunset: #FF7043;         /* Sunset Orange */
```

### 2.3 Neutral Colors

```css
/* Grayscale */
--color-neutral-900: #121212;    /* Primary Text */
--color-neutral-800: #1E1E1E;    /* Dark Backgrounds */
--color-neutral-700: #424242;    /* Secondary Text */
--color-neutral-600: #616161;    /* Tertiary Text */
--color-neutral-500: #9E9E9E;    /* Disabled/Muted */
--color-neutral-400: #BDBDBD;    /* Borders Light */
--color-neutral-300: #E0E0E0;    /* Dividers */
--color-neutral-200: #F5F5F5;    /* Light Backgrounds */
--color-neutral-100: #FAFAFA;    /* Surface */
--color-neutral-50:  #FFFFFF;    /* White */
```

### 2.4 Semantic Colors

```css
/* Success */
--color-success-500: #4CAF50;
--color-success-100: #E8F5E9;

/* Warning */
--color-warning-500: #FF9800;
--color-warning-100: #FFF3E0;

/* Error */
--color-error-500: #E53935;
--color-error-100: #FFEBEE;

/* Information */
--color-info-500: #2196F3;
--color-info-100: #E3F2FD;
```

### 2.5 Dark Mode Palette

```css
/* Dark Mode Surfaces */
--dm-surface-900: #0A0A0A;       /* Background */
--dm-surface-800: #1C1C1E;       /* Cards */
--dm-surface-700: #2C2C2E;       /* Elevated */

/* Dark Mode Text */
--dm-text-primary: #FFFFFF;
--dm-text-secondary: #EBEBF5;    /* 60% opacity */
--dm-text-tertiary: #EBEBF5;     /* 30% opacity */
```

---

## 3. Typography

### 3.1 Font Family

**Primary Font:** Inter  
*Modern, highly legible, excellent for mobile screens*

**Fallback Stack:**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
```

**Display/Brand Font:** Poppins (for headlines, logo)  
*Rounded, friendly, youthful energy*

### 3.2 Type Scale

| Style | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| Display 1 | 40px | Bold (700) | 48px | -0.5px | Hero headlines |
| Display 2 | 32px | Bold (700) | 40px | -0.5px | Page titles |
| H1 | 28px | SemiBold (600) | 36px | -0.5px | Section headers |
| H2 | 24px | SemiBold (600) | 32px | -0.3px | Card titles |
| H3 | 20px | SemiBold (600) | 28px | -0.2px | Subsection titles |
| H4 | 18px | Medium (500) | 26px | 0 | List headers |
| Body Large | 16px | Regular (400) | 24px | 0 | Primary body text |
| Body | 14px | Regular (400) | 22px | 0 | Standard text |
| Body Small | 12px | Regular (400) | 18px | 0.2px | Captions, metadata |
| Button | 14px | SemiBold (600) | 20px | 0.5px | All buttons |
| Label | 12px | Medium (500) | 16px | 0.5px | Form labels |
| Caption | 11px | Medium (500) | 14px | 0.3px | Timestamps, badges |

### 3.3 Typography Guidelines

**Text Colors:**
- Primary text: `--color-neutral-900` (Light mode) / `--dm-text-primary` (Dark mode)
- Secondary text: `--color-neutral-700` (Light mode) / `--dm-text-secondary` (Dark mode)
- Tertiary text: `--color-neutral-600` (Light mode) / `--dm-text-tertiary` (Dark mode)

**Line Length:**
- Maximum: 35 characters per line for mobile
- Ideal: 25-30 characters per line

**Accessibility:**
- Minimum contrast ratio: 4.5:1 for body text
- Large text (18px+): 3:1 minimum contrast

---

## 4. Spacing System

### 4.1 Base Unit

Base unit: **4px**

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
```

### 4.2 Spacing Patterns

| Context | Value |
|---------|-------|
| Screen padding | 16px (space-4) |
| Card padding | 16px (space-4) |
| Card internal spacing | 12px (space-3) |
| Section spacing | 24px (space-6) |
| Between related elements | 8px (space-2) |
| Between unrelated elements | 16px (space-4) |
| Button padding (vertical) | 12px (space-3) |
| Button padding (horizontal) | 20px (space-5) |

---

## 5. Component Library

### 5.1 Buttons

#### Primary Button
```
Background: --color-primary-500
Text: #FFFFFF
Border Radius: 12px
Padding: 12px 20px
Font: 14px SemiBold
Shadow: 0 2px 8px rgba(27, 94, 32, 0.3)

States:
- Default: --color-primary-500
- Pressed: --color-primary-600 (darker shade)
- Disabled: --color-neutral-300, text --color-neutral-500
```

#### Secondary Button
```
Background: transparent
Border: 2px solid --color-primary-500
Text: --color-primary-500
Border Radius: 12px
Padding: 12px 20px

States:
- Default: outlined
- Pressed: --color-primary-100 background
- Disabled: --color-neutral-300 border, --color-neutral-500 text
```

#### Tertiary/Ghost Button
```
Background: transparent
Text: --color-primary-500
Padding: 8px 12px

States:
- Default: text only
- Pressed: --color-primary-50 background
```

#### Floating Action Button (FAB)
```
Size: 56px x 56px
Background: --color-accent-500
Icon: White, 24px
Shadow: 0 4px 12px rgba(249, 168, 37, 0.4)
Border Radius: 50%

Use: Primary action on screen (e.g., "Ask ZIK AI")
```

### 5.2 Cards

#### Standard Card
```
Background: --color-neutral-50
Border Radius: 16px
Padding: 16px
Shadow: 0 1px 3px rgba(0, 0, 0, 0.08)
Border: 1px solid --color-neutral-200 (optional)

Elevated State:
Shadow: 0 4px 12px rgba(0, 0, 0, 0.12)
```

#### Deal Card
```
Structure:
┌─────────────────────────────┐
│ [Image] 16:9 aspect ratio   │
│ [Category Badge]            │
├─────────────────────────────┤
│ Partner Name                │
│ Deal Title                  │
│ ⭐ 4.8 | 🏷️ Category        │
│                             │
│ [Save]  [View Deal →]       │
└─────────────────────────────┘

Visual: Partner image, discount badge (top-left), category tag
```

#### AI Chat Bubble
```
User Message:
- Background: --color-primary-500
- Text: White
- Border Radius: 16px 16px 4px 16px
- Max Width: 80%

AI Message:
- Background: --color-neutral-200
- Text: --color-neutral-900
- Border Radius: 16px 16px 16px 4px
- Avatar: ZIK AI icon (left)
```

### 5.3 Input Fields

#### Text Input
```
Height: 48px
Background: --color-neutral-50
Border: 1px solid --color-neutral-300
Border Radius: 12px
Padding: 0 16px
Font: 16px Regular
Placeholder: --color-neutral-500

Focus State:
Border: 2px solid --color-primary-500
Background: --color-neutral-50

Error State:
Border: 2px solid --color-error-500
Helper Text: --color-error-500
```

#### Search Input
```
Height: 44px
Background: --color-neutral-100
Border Radius: 22px (pill shape)
Left Icon: Search (20px, --color-neutral-500)
Padding: 0 16px 0 44px
```

### 5.4 Navigation

#### Bottom Navigation Bar
```
Height: 64px (including safe area)
Background: --color-neutral-50
Border Top: 1px solid --color-neutral-200
Icons: 24px
Active Icon: --color-primary-500
Inactive Icon: --color-neutral-500
Active Label: 11px Medium, --color-primary-500

Items:
1. Home
2. Deals
3. ZIK AI (Center - elevated)
4. Services
5. Profile
```

#### Top App Bar
```
Height: 56px
Background: --color-neutral-50 or Transparent
Left: Logo or Back button
Center: Screen title (18px Medium)
Right: Action icons (notifications, search)
```

### 5.5 Badges & Tags

#### Category Tag
```
Background: --color-primary-100
Text: --color-primary-500
Border Radius: 8px
Padding: 4px 10px
Font: 12px Medium
```

#### Discount Badge
```
Background: --color-accent-500
Text: #FFFFFF (or --color-neutral-900 for contrast)
Border Radius: 8px
Padding: 4px 8px
Font: 12px Bold
Shadow: 0 2px 4px rgba(0,0,0,0.1)
```

#### Status Badge
```
Active: Green dot + "Active" text
Pending: Orange dot + "Pending" text
Expired: Grey dot + "Expired" text
```

---

## 6. Layout Patterns

### 6.1 Screen Structure

```
┌─────────────────────────────┐
│ Status Bar (System)         │
├─────────────────────────────┤
│ App Bar (56px)              │
├─────────────────────────────┤
│                             │
│      CONTENT AREA           │
│     (Scrollable)            │
│                             │
├─────────────────────────────┤
│ Bottom Navigation (64px)    │
├─────────────────────────────┤
│ Home Indicator (System)     │
└─────────────────────────────┘
```

### 6.2 Home Screen Layout

```
┌─────────────────────────────┐
│ [Logo]  Welcome, Chioma! 👋 │
│ [Search Bar]                │
├─────────────────────────────┤
│ Quick Actions Grid (4 items)│
│ [Deals][AI][Events][Map]    │
├─────────────────────────────┤
│ Featured Deals              │
│ ┌─────┐ ┌─────┐ ┌─────┐    │
│ │     │ │     │ │     │ →  │
│ └─────┘ └─────┘ └─────┘    │
├─────────────────────────────┤
│ Categories                  │
│ [Food] [Tech] [Trans] [Acc] │
├─────────────────────────────┤
│ My Saved Deals              │
│ [Card] [Card]               │
├─────────────────────────────┤
│ Campus News                 │
│ [News Card 1]               │
│ [News Card 2]               │
└─────────────────────────────┘
```

### 6.3 Deals Screen Layout

```
┌─────────────────────────────┐
│ Deals           [Filter] 🔍 │
├─────────────────────────────┤
│ [All][Food][Shop][Services] │
│ [Sort: Recommended ▼]       │
├─────────────────────────────┤
│ ┌─────────────────────┐     │
│ │ [Deal Card Large]   │     │
│ └─────────────────────┘     │
│ ┌─────────────────────┐     │
│ │ [Deal Card Large]   │     │
│ └─────────────────────┘     │
│ ...                         │
└─────────────────────────────┘
```

### 6.4 AI Assistant Interface

```
┌─────────────────────────────┐
│ ← ZIK AI              [⋮]   │
├─────────────────────────────┤
│                             │
│ 🤖 Welcome to ZIK AI!       │
│                             │
│ ┌─────────────────────┐     │
│ │ How can I help      │     │
│ │ you today?          │     │
│ └─────────────────────┘     │
│                             │
│ [Suggested:               ] │
│ [Past Questions]            │
│                             │
├─────────────────────────────┤
│ [📎]  Type a message... [➤] │
└─────────────────────────────┘
```

---

## 7. Iconography

### 7.1 Icon System

**Style:** Rounded, consistent 2px stroke weight  
**Size:** 24px (standard), 20px (compact), 32px (featured)  
**Library:** Phosphor Icons (or similar rounded icon set)

### 7.2 Core Icons

| Icon | Usage |
|------|-------|
| 🏠 Home | Home screen navigation |
| 🏷️ Tag | Deals, categories |
| 🤖 Robot | ZIK AI assistant |
| 🎓 Graduation Cap | Services, education |
| 👤 User | Profile, account |
| 🔍 Search | Search functionality |
| 🔔 Bell | Notifications |
| ❤️ Heart | Save, favorite |
| 🎟️ Ticket | Redeem, deals |
| 💬 Chat | Messages, support |
| 📍 Pin | Location, campus map |
| 🏛️ Building | Campus, university |
| 🍔 Utensils | Food category |
| 🚌 Bus | Transportation |
| 🏠 House | Accommodation |
| 💼 Briefcase | Jobs, career |
| 📚 Book | Academic resources |
| ⚙️ Gear | Settings |
| ← Arrow Left | Back navigation |
| → Arrow Right | Forward, see more |
| ✕ X | Close, dismiss |
| ✓ Check | Success, selected |

### 7.3 Illustrations

**Style:** Flat illustrations with subtle gradients, diverse representation

**Key Illustrations Needed:**
- Welcome/Onboarding (students, campus life)
- Empty states (no deals, no search results)
- Success states (deal redeemed, verification complete)
- Error states (connection issues, no results)
- ZIK AI mascot/avatar (friendly, intelligent robot character)

---

## 8. Animation & Micro-interactions

### 8.1 Principles

- **Purposeful:** Every animation serves a function
- **Quick:** 200-300ms duration for most interactions
- **Smooth:** Ease-out curves for natural feel
- **Subtle:** Enhance, don't distract

### 8.2 Standard Transitions

```css
/* Quick interactions */
--ease-quick: 150ms ease-out;

/* Standard transitions */
--ease-standard: 250ms cubic-bezier(0.4, 0.0, 0.2, 1);

/* Enter animations */
--ease-enter: 300ms cubic-bezier(0.0, 0.0, 0.2, 1);

/* Exit animations */
--ease-exit: 200ms cubic-bezier(0.4, 0.0, 1, 1);
```

### 8.3 Micro-interactions

#### Button Press
```
On Press:
- Scale to 0.97
- Duration: 100ms
- Easing: ease-out

On Release:
- Scale back to 1.0
- Duration: 150ms
- Easing: ease-out
```

#### Card Hover/Press
```
On Press:
- Background darkens slightly
- Shadow increases
- Duration: 150ms
```

#### Pull-to-Refresh
```
- Spinner color: --color-primary-500
- Animation: Rotating spinner
- Success: Checkmark with haptic feedback
```

#### Deal Save (Heart)
```
On Tap:
- Scale up to 1.3
- Fill with red
- Small particle burst effect
- Duration: 300ms
- Haptic: Light impact
```

#### Page Transitions
```
Slide from right (push):
- Duration: 300ms
- Easing: ease-in-out

Slide down (modal):
- Duration: 250ms
- Easing: ease-out
- Background fade: 200ms
```

### 8.4 Skeleton Loading

```
Background: --color-neutral-200
Shimmer: Linear gradient animation
Duration: 1.5s infinite
```

---

## 9. Voice & Tone

### 9.1 Brand Voice

**Friendly but Professional** — Like a helpful senior student or mentor

**Attributes:**
- Warm and welcoming
- Knowledgeable but not condescending
- Proud of UNIZIK heritage
- Empowering and supportive
- Clear and concise

### 9.2 Writing Guidelines

**Do:**
- Use "you" and "your" for personal connection
- Keep sentences short and clear
- Use active voice
- Celebrate achievements
- Be encouraging

**Don't:**
- Use overly academic jargon
- Be overly casual or use slang
- Use passive voice
- Sound robotic or corporate
- Be verbose

### 9.3 Example Copy

| Context | Copy |
|---------|------|
| Welcome | "Welcome to UNIZIK Connect, Chioma! Your campus benefits await." |
| Empty State | "No deals saved yet. Explore and grab your first discount!" |
| Success | "Deal redeemed! Show this QR code at checkout." |
| Error | "Something went wrong. Let's try that again." |
| AI Greeting | "Hi! I'm ZIK AI. Ask me anything about campus life or your studies!" |
| Loading | "Finding the best deals for you..." |

### 9.4 Nigerian Context

- Use British English spellings (favour, colour, centre)
- Include local references where appropriate
- Respect cultural nuances
- Support local languages where feasible (Igbo greetings)

---

## 10. Accessibility Guidelines

### 10.1 Visual Accessibility

**Minimum Touch Targets:**
- 44x44px for all interactive elements
- 48x48px recommended for primary actions

**Contrast Requirements:**
- Body text: 4.5:1 minimum
- Large text: 3:1 minimum
- UI components: 3:1 minimum

**Text Sizing:**
- Support Dynamic Type (iOS)
- Support font scaling (Android)
- Test up to 200% zoom

### 10.2 Screen Reader Support

- All images have descriptive alt text
- Icons have accessibility labels
- Status updates are announced
- Focus order is logical
- Form errors are clearly associated

### 10.3 Motion & Animation

- Respect `prefers-reduced-motion` setting
- Provide static alternatives for animated content
- Avoid flashing or rapid animations

### 10.4 Cognitive Accessibility

- Clear, simple language
- Consistent navigation patterns
- Error prevention and recovery
- Clear progress indicators
- Don't rely on color alone for information

---

## 11. Responsive Considerations

### 11.1 Breakpoints

| Size | Width | Adjustments |
|------|-------|-------------|
| Small Phone | < 360px | Compact spacing, smaller cards |
| Phone | 360-400px | Standard layout |
| Large Phone | 400-480px | Larger touch targets |
| Tablet | > 600px | Side-by-side layouts |

### 11.2 Adaptations

**Small Screens:**
- Reduce card padding
- Smaller font sizes (minimum 14px)
- 2-column grids become 1-column
- Compact bottom navigation labels

**Large Screens:**
- Increase content width
- Side-by-side deal cards
- Expanded navigation options
- More content visible above fold

---

## 12. Dark Mode

### 12.1 Color Adaptations

| Element | Light Mode | Dark Mode |
|---------|------------|-----------|
| Background | --neutral-50 | --dm-surface-900 |
| Card | White | --dm-surface-800 |
| Primary Text | --neutral-900 | White |
| Secondary Text | --neutral-700 | --dm-text-secondary |
| Border | --neutral-200 | --neutral-800 |
| Primary Button | --primary-500 | --primary-400 (lighter for contrast) |

### 12.2 Image Handling

- Use overlay on images to maintain text readability
- Consider providing dark-mode optimized illustrations

### 12.3 Elevation in Dark Mode

Use lighter borders instead of shadows for elevation:
```css
border: 1px solid rgba(255, 255, 255, 0.1);
```

---

## 13. File Formats & Assets

### 13.1 Export Specifications

**Icons:**
- Format: SVG (vector)
- Fallback: PNG @1x, @2x, @3x
- Size: 24x24px base

**Illustrations:**
- Format: SVG preferred, PNG fallback
- Sizes: 1x, 2x, 3x for raster

**Images:**
- Format: WebP with JPEG fallback
- Quality: 80% for photos
- Compression: Optimize for web

### 13.2 Naming Convention

```
ic_[name]_[state].[ext]
    ic_home_active.svg
    ic_home_inactive.svg

img_[category]_[description]_[size].[ext]
    img_deals_food_hero_2x.png
    img_onboarding_welcome_1x.png

ill_[description]_[variant].[ext]
    ill_empty_deals_light.svg
    ill_empty_deals_dark.svg
```

---

## 14. Design Tool Resources

### 14.1 Recommended Tools

- **Design:** Figma (primary), Adobe XD
- **Prototyping:** Figma, Principle
- **Animation:** After Effects (Lottie), Rive
- **Handoff:** Figma Dev Mode, Zeplin

### 14.2 Figma Structure

```
📁 UNIZIK Connect Design System
├── 📁 01 - Foundation
│   ├── 🎨 Colors
│   ├── 🔤 Typography
│   └── 📐 Spacing
├── 📁 02 - Components
│   ├── Buttons
│   ├── Cards
│   ├── Inputs
│   └── Navigation
├── 📁 03 - Patterns
│   ├── Layouts
│   ├── Flows
│   └── Templates
├── 📁 04 - Assets
│   ├── Icons
│   ├── Illustrations
│   └── Logos
└── 📁 05 - Prototypes
    ├── Onboarding
    ├── Main Flows
    └── Edge Cases
```

---

## 15. Appendix

### 15.1 Reference Links

- [Material Design 3 Guidelines](https://m3.material.io/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Phosphor Icons](https://phosphoricons.com/)

### 15.2 Design Checklist

Before finalizing any screen:

- [ ] All colors from the approved palette
- [ ] Typography follows the type scale
- [ ] Touch targets minimum 44x44px
- [ ] Contrast ratios meet WCAG standards
- [ ] Dark mode version designed
- [ ] Empty states considered
- [ ] Error states designed
- [ ] Loading states included
- [ ] Accessibility labels added
- [ ] Micro-interactions defined

---

**Document Control:**
- Version: 1.0
- Last Updated: March 2026
- Author: Design Team
- Review Status: Draft

---

*This design system is a living document and will evolve with the product.*
