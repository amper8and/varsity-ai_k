# UNIZIK Connect - Media-Rich PWA

A visually stunning, media-rich Progressive Web App for Nnamdi Azikiwe University students and alumni.

## ✨ Features

### Visual Design
- 🖼️ **Image-rich UI** - High-quality photos throughout
- 🎨 **Clean, minimal interface** - Reduced text clutter
- ✨ **Smooth animations** - Micro-interactions on every action
- 📱 **Mobile-first** - Optimized for phone screens

### Core Functionality
- 🤖 **ZIK AI Chat** - Smart assistant with contextual responses
- 🏷️ **Deals Marketplace** - Browse, save & redeem with beautiful image cards
- 👤 **User Profile** - Digital ID card with stats
- 🏛️ **Campus Services** - Visual service directory
- 💾 **Persistent Data** - localStorage for saved deals & chat

## 🎨 Design Philosophy

**"Less text, more visual"**

- Large hero images with gradient overlays
- Image-based category navigation
- Minimal button text
- Clean spacing and hierarchy
- Reduced cognitive load

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open on your phone or use DevTools mobile view
```

## 📱 Deploy to Vercel

```bash
# Copy files to your repo
cd unizik-connect
npm run build

# Deploy to Vercel
vercel --prod
```

## 🖼️ Images Used

All images sourced from Unsplash:
- Campus photos
- Partner brand imagery
- Event photos
- User avatars
- Category thumbnails

## 📂 Project Structure

```
unizik-connect/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── screens/
│   │   ├── home-screen.tsx      # Hero + featured deals
│   │   ├── deals-screen.tsx     # Image grid
│   │   ├── ai-screen.tsx        # Clean chat
│   │   ├── services-screen.tsx  # Visual directory
│   │   └── profile-screen.tsx   # Stats + ID card
│   ├── navigation/
│   │   └── bottom-nav.tsx       # Minimal tab bar
│   └── splash-screen.tsx
├── contexts/
│   └── app-context.tsx          # State management
├── lib/
│   ├── images.ts                # Image URLs
│   └── utils.ts
└── public/
    └── manifest.json            # PWA config
```

## 🎯 Try It Out

1. **AI Chat**: Ask "Best food deals?" or "Library hours?"
2. **Save a Deal**: Tap the heart on any deal card
3. **Redeem**: Tap a deal → Copy code → See it marked redeemed
4. **View Profile**: Check your saved deals count

## 💡 UI Highlights

| Screen | Key Features |
|--------|-------------|
| **Home** | Hero banner, image categories, horizontal deal scroll |
| **Deals** | Large image cards, filter pills, detail modal |
| **AI** | Clean chat bubbles, typing indicator, suggestions |
| **Services** | Image grid, event cards with avatars |
| **Profile** | Stats cards, digital ID, minimal menu |

## 🛠️ Tech Stack

- Next.js 14 + TypeScript
- Tailwind CSS
- React Context
- Unsplash Images
- PWA Ready

---

Built for UNIZIK Community 🎓
