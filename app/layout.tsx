import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackgroundElements from "@/components/BackgroundElements"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EuPak Educational Consultant",
  description: "Your gateway to educational opportunities in Europe",
  icons: {
    icon: "/favicon.svg", 
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow relative overflow-hidden">
          <BackgroundElements />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

