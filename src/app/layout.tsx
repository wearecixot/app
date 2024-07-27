import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"

export const metadata: Metadata = {
  title: "Hidup Sehat",
  description: "Hidup Sehat Bahagia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="max-w-[450px] min-h-screen mx-auto shadow-xl">
        <Theme className="w-full h-full overflow-x-hidden">{children}</Theme>
      </body>
    </html>
  )
}
