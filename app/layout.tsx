import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maria Havens — Good food, honestly made',
  description: 'Maria Havens is a casual neighborhood restaurant in Nyeri, Kenya, serving generous food.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-background text-foreground">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}