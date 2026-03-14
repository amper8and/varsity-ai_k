# UNIZIK Connect - Functional PWA Demo

A fully functional Progressive Web App (PWA) showcasing the UNIZIK Connect platform — an AI-powered community hub for Nnamdi Azikiwe University students and alumni.

## 🚀 Features

### Core Functionality

| Feature | Status | Description |
|---------|--------|-------------|
| **AI Chat** | ✅ Working | Simulated AI with contextual responses |
| **Deals Marketplace** | ✅ Working | Browse, filter, save & redeem deals |
| **User Profile** | ✅ Working | Persistent user data & stats |
| **Campus Services** | ✅ Working | Service directory & quick links |
| **PWA Install** | ✅ Working | Install to home screen |
| **Offline Support** | ✅ Working | Service worker caching |

### AI Capabilities

ZIK AI can answer questions about:
- 📅 Exam registration deadlines
- 📚 Library hours and resources
- 🏠 Accommodation options
- 📝 Course registration
- 💼 Career opportunities
- ➕ More contextual responses

### Deal Features

- Browse 6+ exclusive deals from real Nigerian brands
- Filter by category (Food, Shopping, Transport, Tech, Mobile)
- Search functionality
- Save deals for later
- Redeem with unique codes
- Copy redemption codes to clipboard
- Track redeemed deals

### User Features

- Digital UNIZIK Connect ID card
- Track total savings
- Deal usage statistics
- Daily streak counter
- Achievement badges
- Persistent data with localStorage

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context + localStorage
- **PWA:** Web App Manifest + Service Worker
- **Icons:** Lucide React

## 📱 PWA Features

- ✅ Installable on iOS & Android
- ✅ Works offline
- ✅ Splash screen
- ✅ Push notification ready
- ✅ Home screen icon
- ✅ Full-screen mode

## 🚀 Getting Started

### Installation

```bash
# Clone and navigate
cd unizik-connect

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
```

Static files will be in the `dist` folder.

### Deploy to Vercel

```bash
# Push to GitHub
git add .
git commit -m "Add UNIZIK Connect PWA"
git push origin main

# Import to Vercel and deploy
```

## 📲 Installing on Your Phone

### iOS (Safari)
1. Open the app in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Tap "Add"

### Android (Chrome)
1. Open the app in Chrome
2. Tap the menu (3 dots)
3. Select "Add to Home Screen"
4. Tap "Install"

### Or use the Install Prompt
- The app will show an install prompt automatically
- Tap "Install" to add to home screen

## 🎨 Design System

Follows the UNIZIK Connect Design Guide:

- **Primary:** UNIZIK Green (`#1B5E20`)
- **Accent:** Gold (`#F9A825`)
- **Partnership:** MTN Blue (`#1565C0`)
- **Typography:** Inter + Poppins
- **Border Radius:** 12px-20px scale
- **Spacing:** 4px base unit

## 🎯 UI/UX Highlights

### Micro-interactions
- Button press feedback (scale 0.97)
- Card hover lift effects
- Heart animation on save
- Typing indicator for AI
- Smooth screen transitions

### Accessibility
- 44x44px minimum touch targets
- WCAG AA color contrast
- Semantic HTML structure
- Focus visible states
- Reduced motion support

### Mobile-First
- Safe area insets for notched devices
- Momentum scrolling
- Bottom navigation
- Thumb-friendly controls

## 📂 Project Structure

```
unizik-connect/
├── app/
│   ├── globals.css          # Global styles + animations
│   ├── layout.tsx           # PWA layout with manifest
│   └── page.tsx             # Main app shell
├── components/
│   ├── screens/             # All 5 app screens
│   │   ├── home-screen.tsx
│   │   ├── deals-screen.tsx
│   │   ├── ai-screen.tsx
│   │   ├── services-screen.tsx
│   │   └── profile-screen.tsx
│   ├── navigation/
│   │   └── bottom-nav.tsx   # Tab bar navigation
│   ├── splash-screen.tsx    # App launch screen
│   └── install-prompt.tsx   # PWA install modal
├── contexts/
│   └── app-context.tsx      # App state + localStorage
├── public/
│   ├── manifest.json        # PWA manifest
│   ├── sw.js                # Service worker
│   ├── offline.html         # Offline page
│   └── icons/               # App icons
├── UNIZIK_Community_Hub_PRD.md
├── UNIZIK_Design_Guide.md
└── README.md
```

## 💾 Data Persistence

All user data is stored in localStorage:
- User profile
- Saved deals
- Redeemed deals
- Chat history
- Notifications

## 🧪 Testing the AI

Try asking ZIK AI:
- "When is exam registration?"
- "Library opening hours"
- "Find accommodation"
- "Course registration help"
- "Career opportunities"
- "Hello" / "Hi"

## 📝 Documents

- [Product Requirements Document](./UNIZIK_Community_Hub_PRD.md)
- [Design Guide](./UNIZIK_Design_Guide.md)

## 🤝 Credits

- **Concept & Strategy:** AIM
- **Partnership:** MTN EBU
- **Client:** Nnamdi Azikiwe University

## 📄 License

Proprietary - All rights reserved.

---

Built with ❤️ for the UNIZIK Community
