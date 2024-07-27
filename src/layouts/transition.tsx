"use client"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { FC, ReactNode } from "react"

interface ILayoutProps {
  children: ReactNode
}

const PageTransition: FC<ILayoutProps> = ({ children }) => {
  const path = usePathname()

  return <AnimatePresence mode={"wait"}>{children}</AnimatePresence>
}

export { PageTransition }
