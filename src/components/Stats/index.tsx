"use client";

import { FC } from "react"
import { Button } from "../button"
import { Coins } from "lucide-react"
import { Flame } from "lucide-react"
import { Gift } from "lucide-react"
import { GitCommitVertical } from "lucide-react"
import { Timer } from "lucide-react"
import { Badge } from "lucide-react"
import Link from "next/link"
import { Progress } from "../progress"
import { ArrowRight } from "lucide-react"
import { useRewardsContext } from "@/contexts/RewardsContext"

const Stats: FC = () => {
  const { mutateRedeemRewards, isMutateRewardsPending } = useRewardsContext()
  return (
    <div className="px-4">
      <section className="flex flex-col w-full rounded-lg border-[1px] border-green-800/10 bg-white drop-shadow-xl">
        <div className="flex flex-col gap-4 p-4 rounded-b-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Redeemable points
              </p>
              <div className="flex items-start gap-2">
                <Coins
                  size={24}
                  className="mt-2 text-green-600 fill-green-200"
                />

                <p className="text-3xl font-bold text-green-500">100</p>
              </div>
            </div>
            <Button
              variant="plain"
              size="lg"
              className="bg-green-500 hover:bg-green-600 w-[162px] text-white"
              onClick={() => mutateRedeemRewards()}
              isLoading={isMutateRewardsPending}
            >
              <Gift size={24} className="mr-2" />
              Open Gift
            </Button>
          </div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total calories
              </p>
              <div className="flex items-start gap-1">
                <Flame
                  fill
                  size={16}
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">100 kcal</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total distance
              </p>
              <div className="flex items-start gap-1">
                <GitCommitVertical
                  size={16}
                  fill
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">100 km</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total time
              </p>
              <div className="flex items-start gap-1">
                <Timer
                  fill
                  size={16}
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">
                  100 second
                </p>
              </div>
            </div>
          </div>
        </div>

        <Link
          className="flex items-start border-t-[1px] border-green-800/10 justify-between gap-3 p-4 bg-green-800/5 hover:bg-green-900/5 transition duration-200 ease-in-out"
          href="/level"
        >
          <div className="relative flex items-center justify-center text-center">
            <Badge size={36} className=" text-green-600 fill-green-200" />
            <p className="absolute z-10 text-md m-auto text-xs text-green-600">
              1
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm font-medium text-green-900/50">Level</p>
            <Progress value={12} className="w-full" />
          </div>
          <ArrowRight className="my-auto text-green-900/50" />
        </Link>
      </section>
    </div>
  )
}

export default Stats
