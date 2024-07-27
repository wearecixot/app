"use client"

import { getRelativeTimeString } from "@/utils/formatDate"
import { randomInteger } from "@/utils/math"
import { Timer } from "lucide-react"
import { Store } from "lucide-react"
import Image from "next/image"
import { FC } from "react"

const RewardCard: FC = () => {
  const twodaysfromtoday = new Date(
    new Date().setDate(new Date().getDate() + randomInteger(1, 10))
  )
  return (
    <div className="h-fit max-h-[200px] min-w-[200px] overflow-hidden flex flex-col rounded-md drop-shadow-md bg-white">
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
      </div>
    </div>
  )
}

export default RewardCard
