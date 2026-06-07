import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Missed Call Money Machine | Never Lose Revenue to a Missed Call Again',
  description: 'AI-powered call recovery for service businesses. Our AI assistant answers missed calls 24/7, qualifies leads, and books appointments while you work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}