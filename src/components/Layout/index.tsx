import { FC } from "react"
import Footer from "./components/Footer"
import { cn } from "@/utils/cn"

interface LayoutProps {
  children: React.ReactNode
  className?: string
}
const Layout: FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="h-screen flex flex-col">
      <div
        className={cn(
          "w-full flex-1 overflow-x-hidden overflow-y-auto py-6 px-4",
          className
        )}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
