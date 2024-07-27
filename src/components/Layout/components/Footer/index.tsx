"use client"

import { cn } from "@/utils/cn"
import { CirclePlus, House, Ticket } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import React, { FC } from "react"
import * as Dialog from "../../../dialog"

const Footer: FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [on, setOn] = React.useState<"HOME" | "ADD" | "PROFILE" | "REWARDS">(
    "HOME"
  )
  const [showAdd, setShowAdd] = React.useState(false)

  React.useEffect(() => {
    if (pathname.startsWith("/add")) {
      setOn("ADD")
    } else if (pathname.startsWith("/profile")) {
      setOn("PROFILE")
    } else if (pathname.startsWith("/rewards")) {
      setOn("REWARDS")
    } else {
      setOn("HOME")
    }
  }, [pathname])

  return (
    <>
      <div className="w-full relative bg-white py-5 flex justify-evenly border-t-0.5 border-t-gray-300">
        <House
          className={cn("cursor-pointer", on === "HOME" && "text-primary")}
          onClick={() => router.replace("/")}
        />

        <Dialog.Root>
          <Dialog.Trigger onClick={() => setShowAdd(true)}>
            <CirclePlus
              className={cn("cursor-pointer", on === "ADD" && "text-primary")}
            />
          </Dialog.Trigger>
          <Dialog.Content className="p-0 overflow-hidden">
            <p>hi</p>
          </Dialog.Content>
        </Dialog.Root>

        <Ticket
          className={cn("cursor-pointer", on === "PROFILE" && "text-primary")}
          onClick={() => router.replace("/profile")}
        />
      </div>
    </>
  )
}

export default Footer
