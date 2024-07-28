"use client"

import Layout from "@/components/Layout"
import { useState } from "react"
import axios from "@/libs/axios"

import { User, ChevronLeft, ChevronRight } from "lucide-react"
import { useQuery } from "@tanstack/react-query"
import { REWARDS_TIER_ENUM } from "@/constants/rewards"
import { cn } from "@/utils/cn"
import { TIER_REWARDS } from "@/constants/mocks"
import { Award } from "lucide-react"

const Rewards = () => {
  const [tier, setTier] = useState<number>(0)

  const previousTier = () => {
    if (tier === 0) return
    setTier((t) => t - 1)
  }

  const nextTier = () => {
    if (tier === 3) return
    setTier((t) => t + 1)
  }

  const { data: rewards } = useQuery({
    queryKey: ["rewards"],
    queryFn: () => axios.get("/reward/list"),
  })

  const _tier = tier + 1 === 1 ? "Bronze" : tier + 1 === 2 ? "Silver" : "Gold"

  return (
    <Layout className="flex flex-col p-0">
      <div
        className={cn(
          "w-full flex items-center justify-between bg-gradient-to-br py-6 px-4",
          {
            "from-amber-400 to-amber-700 text-white": _tier === "Bronze",
            "from-gray-400 to-gray-700 text-white": _tier === "Silver",
            "from-amber-300 to-amber-500": _tier === "Gold",
          }
        )}
      >
        <ChevronLeft
          className={cn(tier === 0 ? "opacity-0" : "cursor-pointer")}
          onClick={previousTier}
        />
        <div className="flex flex-col items-center gap-6">
          <Award size={72} className="opacity-50" />
          <p
            className={cn("font-semibold px-2 py-1 bg-white rounded-md", {
              "text-amber-600": _tier === "Bronze" || _tier === "Gold",
              "text-gray-700": _tier === "Silver",
            })}
          >
            {_tier}
          </p>
        </div>
        <ChevronRight
          className={cn(tier === 2 ? "opacity-0" : "cursor-pointer")}
          onClick={nextTier}
        />
      </div>
      <div className="w-full flex flex-col gap-4 p-4 flex-1 overflow-y-auto">
        {!!rewards &&
          rewards.data.data
            .filter((r: any) => r.tier === REWARDS_TIER_ENUM[tier + 1])
            .map((reward: any, index: number) => (
              <p key={index}>{reward.name}</p>
            ))}
      </div>
    </Layout>
  )
}

export default Rewards
