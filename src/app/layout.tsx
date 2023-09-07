import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Display } from "next/font/google"
import Footer from "../components/Footer"
import Header from "../components/Header"

const noto =  Noto_Sans_Display({ subsets: ['latin'] })

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
      <body className={`${noto.className} bg-[#111111] text-white`}>
          <Header />
        <main className='px-6 sm:px-12 md:px-18 lg:px-24'>
          {children}
        </main>
          <Footer />
      </body>
    </html>
  )
}
