"use client"

import { getRelativeTimeString } from "@/utils/formatDate"
import { randomInteger } from "@/utils/math"
import { Timer } from "lucide-react"
import { Store } from "lucide-react"
import Image from "next/image"
import React, { FC } from "react"
import * as Dialog from "../../../dialog"
import { XCircle } from "lucide-react"
import { Button } from "@/components/button"
import { X } from "lucide-react"
import { Ticket } from "lucide-react"
import { TicketPercent } from "lucide-react"

const RewardCard: FC = () => {
  const id = React.useId()
  const twodaysfromtoday = new Date(
    new Date().setDate(new Date().getDate() + randomInteger(1, 10))
  )
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Dialog.Root key={id} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <div className="h-fit max-h-[250px] min-w-[200px] overflow-hidden flex flex-col rounded-md drop-shadow-md bg-white">
          <div className="text-center overflow-hidden h-[100px] w-full aspect-square relative">
            <Image
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt="Profile picture"
              className="object-cover"
              fill
            />
          </div>
          <div className="flex flex-col gap-1 p-2.5">
            <p className="font-semibold">Mochacino</p>
            <div className="flex items-center gap-1  opacity-50">
              <Store size={14} />
              <p className="text-sm font-medium">Starbucks</p>
            </div>
            <div className="flex items-center gap-1  opacity-50">
              <Timer size={14} />
              <p className="text-sm font-medium">
                Expired {getRelativeTimeString(twodaysfromtoday)}
              </p>
            </div>
            <Button
              size="sm"
              className="mt-1.5"
              onClick={() => setIsOpen(false)}
            >
              <Ticket size={12} className="mr-2" />
              Claim
            </Button>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Content className="p-0 overflow-hidden">
        <div className="relative">
          <div className="text-center overflow-hidden h-[150px] over w-full aspect-square relative">
            <Image
              src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
              alt="Profile picture"
              className="object-cover"
              fill
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute z-10 top-3 right-3"
          >
            <X
              fill
              className="text-grey-500 p-1 fill-white bg-white rounded-full"
            />
          </button>
        </div>
        <div className="flex flex-col gap-3 px-4 pb-4">
          <div className="flex flex-col gap-1.5">
            <p className="font-semibold">Mochacino</p>
            <div className="flex items-center gap-1  opacity-50">
              <Store size={14} />
              <p className="text-sm font-medium">Starbucks</p>
            </div>
            <div className="flex items-center gap-1  opacity-50">
              <Timer size={14} />
              <p className="text-sm font-medium">
                Expired {getRelativeTimeString(twodaysfromtoday)}
              </p>
            </div>
            <p className="p-2 mt-2 relative bg-black/5 flex border-[1px] border-black/10 items-center w-full justify-center gap-2 rounded-md font-mono text-center">
              <TicketPercent size={14} className="opacity-50 absolute left-3" />
              <span>1232</span>
            </p>
          </div>
          <Button size="lg" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default RewardCard
