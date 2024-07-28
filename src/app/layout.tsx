import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import "@radix-ui/themes/styles.css"
import { Theme } from "@radix-ui/themes"
import AuthGuard from "@/components/AuthGuard"
import ReactQueryProvider from "@/components/ReactQueryProvider"
import MainProvider from "@/contexts"
import ConfettiLayer from "@/components/ConfettiLayer"

export const metadata: Metadata = {
  title: "Calorcity",
  description: "Calorcity",
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
              <AuthGuard>
                <ConfettiLayer>{children}</ConfettiLayer>
              </AuthGuard>
            </Theme>
          </MainProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
