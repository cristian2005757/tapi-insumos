import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/layout/Providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { BottomBar } from '@/components/layout/BottomBar'
import { JsonLd } from '@/components/layout/JsonLd'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Muebles modernos`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <JsonLd />
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <FloatingCTA />
          <BottomBar />
        </Providers>
      </body>
    </html>
  )
}
