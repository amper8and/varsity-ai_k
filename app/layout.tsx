import type { Metadata, Viewport } from 'next'
import './globals.css'
import { AppProvider } from '@/contexts/app-context'

export const metadata: Metadata = {
  title: 'UNIZIK Connect',
  description: 'AI-powered community platform for Nnamdi Azikiwe University students and alumni',
  keywords: 'UNIZIK, Nnamdi Azikiwe University, student app, alumni, AI assistant, campus deals, MTN',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'UNIZIK Connect',
  },
  icons: {
    icon: '/icons/icon-192x192.svg',
    apple: '/icons/icon-192x192.svg',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1B5E20',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="UNIZIK Connect" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#1B5E20" />
      </head>
      <body className="min-h-screen bg-gray-100 antialiased">
        <AppProvider>
          <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
