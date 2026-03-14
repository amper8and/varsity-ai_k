import type { Metadata, Viewport } from 'next'
import './globals.css'
import { AppProvider } from '@/contexts/app-context'

export const metadata: Metadata = {
  title: 'UNIZIK Connect',
  description: 'AI-powered community platform for Nnamdi Azikiwe University',
  manifest: '/manifest.json',
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
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1B5E20" />
      </head>
      <body>
        <AppProvider>
          <div className="max-w-md mx-auto min-h-screen bg-gray-50 shadow-2xl">
            {children}
          </div>
        </AppProvider>
      </body>
    </html>
  )
}
