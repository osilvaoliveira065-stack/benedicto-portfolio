import type { Metadata } from "next"
import { Barlow_Condensed, Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
})

export const metadata: Metadata = {
  title: "Benedicto — Frontend Developer",
  description:
    "Modern, fast and conversion-focused websites for brands and businesses.",
  openGraph: {
    images: [
      {
        url: "/angel-logo.png",
        width: 1024,
        height: 1024,
        alt: "Benedicto",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${barlow.variable}`}>{children}</body>
    </html>
  )
}