import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "ITACC — AI Creative Suite",
  description: "Generate stunning images, cinematic videos, and lifelike voices with ITACC AI. One platform for every creative need.",
  keywords: ["AI image generation", "AI video", "voice synthesis", "AI creative suite", "ITACC"],
  openGraph: {
    title: "ITACC — AI Creative Suite",
    description: "Create anything with ITACC AI. Images, videos, voice — all powered by next-gen AI.",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
