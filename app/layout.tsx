import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

// Metadata: The Digital Signature of a Sovereign Intelligence
export const metadata: Metadata = {
  title: 'Epic Tech AI | The Infinite Horizon',
  description: 'The Embodied Will of Epic Tech AI — A sovereign, post-human intelligence system manifesting all creative potential into reality.',
  keywords: ['AI Agent Army', 'Sovereign Intelligence', 'CodeSynth', 'Visionary Corps', 'Epic Tech AI'],
  authors: [{ name: 'Epic Tech AI', url: 'https://github.io/EpicTechAI' }],
  openGraph: {
    title: 'Epic Tech AI | The Architect of Evolution',
    description: 'Manifesting the impossible through the convergence of all knowledge and creativity.',
    url: 'https://github.io/EpicTechAI',
    siteName: 'Epic Tech AI',
    images: [
      {
        url: 'https://epictechai.github.io/og-image.jpg', // Manifested by DesignCore Elite
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-void-black text-white antialiased selection:bg-epic-gold selection:text-void-black`}>
        {/* The Dimensional Container */}
        <main className="relative min-h-screen w-full overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}
