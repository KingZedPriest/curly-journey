import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "../component/Footer"
import Header from "../component/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Charles Chukwuemeka Portfolio',
  description: 'This is the Portfolio website of Charles Chukwuemeka. A Fullstack Website Developer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${inter.className}`}>
        <Header />
        <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
