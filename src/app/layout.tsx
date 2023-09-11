import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_Display } from "next/font/google"
import Footer from "../components/Footer";
import Header from "../components/Header";
import Mode from "../components/Mode";
import ShrinkedNav from "../components/ShrinkedNav";

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
      <body className={`${noto.className} bg-[#F0F0F0] dark:bg-[#111111] text-black dark:text-white px-6 sm:px-12 md:px-18 lg:px-24`}>
          <Header />
          <ShrinkedNav />
          <Mode />
          {children}
          <Footer />
      </body>
    </html>
  )
}
