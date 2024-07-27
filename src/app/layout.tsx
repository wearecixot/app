import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import AuthGuard from "@/components/AuthGuard"
import ReactQueryProvider from "@/components/ReactQueryProvider"
import MainProvider from "@/contexts"

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
      <body className="max-w-[450px] min-h-screen mx-auto">
        <ReactQueryProvider>
          <MainProvider>
            <Theme className="w-full h-full overflow-x-hidden">
              <AuthGuard>{children}</AuthGuard>
            </Theme>
          </MainProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
