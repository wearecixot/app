"use client"

import { AnimatePresence, motion } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { FC, ReactNode } from "react"

interface ILayoutProps {
  children: ReactNode
}

const PageTransition: FC<ILayoutProps> = ({ children }) => {
  const path = usePathname()

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={path}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: {
            x: "-100%",
            opacity: 0,
          },
          visible: {
            x: 0,
            opacity: 1,
          },
        }}
        className="w-[450px] overflow-hidden"
      >
        <p>{path}</p>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export { PageTransition }
