import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suhan Ahmed - Software Developer | React & Next.js Expert | Available for Hire",
  description:
    "Experienced Software Developer with 3+ years in React, Next.js, and modern web technologies. Available for hire - Building scalable, user-friendly applications that drive business success.",
  keywords:
    "Suhan Ahmed, Software Developer, React Developer, Next.js, Frontend Developer, JavaScript, TypeScript, Hire Developer, Web Developer Portfolio, Full Stack Developer, Remote Developer",
  authors: [{ name: "Suhan Ahmed" }],
  openGraph: {
    title: "Suhan Ahmed - Software Developer | Available for Hire",
    description:
      "3+ years experience in React, Next.js & modern web technologies. Ready to contribute to your team's success with scalable solutions.",
    type: "website",
    url: "https://suhan-ahmed.dev",
    siteName: "Suhan Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suhan Ahmed - Software Developer",
    description: "Experienced React & Next.js developer available for hire. Building exceptional web experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#00d4ff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
