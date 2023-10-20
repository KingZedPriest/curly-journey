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
  description: 'The Portfolio website of Charles Chukwuemeka. A Fullstack Website Developer, Proficient in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, JQuery, React, Next.js, Nest.js, Riot.js, TypeScript, Node.js, Express, MongoDB, Prisma and SQLite.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${noto.className} bg-[#F0F0F0] dark:bg-[#111111] text-black dark:text-white`}>
          <Header />
          <ShrinkedNav />
          <Mode />
          <main className='px-6 sm:px-12 md:px-18 lg:px-24'>
            {children}
          </main>
          
          <Footer />
      </body>
    </html>
  )
}
