import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import RootLayoutContent from "./RootLayoutContent"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Danish Margoob - Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
  openGraph: {
    title: "Danish Margoob - Frontend Developer",
    description: "Frontend Developer specializing in React, Next.js, and modern web technologies",
    url: "https://danish-margoob-portfolio.vercel.app",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return <RootLayoutContent>{children}</RootLayoutContent>
}
