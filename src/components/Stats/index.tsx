"use client"

import { REWARDS_TIER_DICT } from "@/constants/rewards"
import { useRewardsContext } from "@/contexts/RewardsContext"
import { cn } from "@/utils/cn"
import {
  ArrowRight,
  Badge,
  Bike,
  Coins,
  Flame,
  Footprints,
  Gift,
  TrainFront,
} from "lucide-react"
import Link from "next/link"
import { FC } from "react"
import { Button } from "../button"
import { Progress } from "../progress"

const Stats: FC = () => {
  const { mutateRedeemRewards, isMutateRewardsPending, activityHeadersData } =
    useRewardsContext()

  const tier =
    REWARDS_TIER_DICT[
      activityHeadersData?.data?.data?.tier as keyof typeof REWARDS_TIER_DICT
    ]

  return (
    <div className="px-4">
      <section
        className={
          "flex flex-col gap-2 p-2 w-full rounded-lg border-[1px] bg-black/5 drop-shadow-xl"
        }
      >
        <div className="flex flex-col gap-4 p-3 rounded-b-lg bg-white rounded-md">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Redeemable points
              </p>
              <div className="flex items-start gap-2">
                <Coins
                  fill
                  size={24}
                  className="mt-2 text-green-600 fill-green-200"
                />

                <p className="text-4xl font-bold text-green-500">
                  {activityHeadersData?.data?.data?.balance ?? 0}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total calories
              </p>
              <div className="flex items-start gap-1.5">
                <Flame
                  fill
                  size={16}
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">
                  {activityHeadersData?.data?.data?.totalCalories ?? 0} kcal
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total runs
              </p>
              <div className="flex items-start gap-1.5">
                <Footprints
                  size={16}
                  fill
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">
                  {activityHeadersData?.data?.data?.totalRun ?? 0}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total cycles
              </p>
              <div className="flex items-start gap-1.5">
                <Bike
                  size={16}
                  fill
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">
                  {activityHeadersData?.data?.data?.totalBicycle ?? 0}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-green-900/50">
                Total commutes
              </p>
              <div className="flex items-start gap-1.5">
                <TrainFront
                  size={16}
                  fill
                  className="mt-1.5 text-green-600 fill-green-100"
                />
                <p className="text-lg font-semibold text-green-500">
                  {activityHeadersData?.data?.data?.totalCommute ?? 0}
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="plain"
            size="lg"
            className="bg-green-500 hover:bg-green-600 w-full text-white"
            onClick={() => mutateRedeemRewards()}
            isLoading={isMutateRewardsPending}
          >
            <Gift size={20} className="mr-2" />
            Open Gift
          </Button>
        </div>

        <Link
          className="flex items-start justify-between gap-3 p-2 transition duration-200 ease-in-out"
          href="/rewards"
        >
          <div className="relative flex items-center justify-center text-center">
            <Badge
              size={36}
              className={cn(" drop-shadow-md", {
                "text-amber-700 fill-amber-300": tier === 1 || tier === 3,
                "text-gray-700 fill-gray-300": tier === 2,
              })}
            />
            <p
              className={cn(
                "absolute z-10 text-md m-auto text-xs text-green-600",
                {
                  "text-amber-600": tier === 1 || tier === 3,
                  "text-gray-700": tier === 2,
                }
              )}
            >
              {tier}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm font-medium text-black/50">Level</p>
            <Progress
              classNames={{
                root: tier === 2 ? "bg-gray-700/20" : "bg-amber-700/20",
                indicator: tier === 2 ? "bg-gray-700" : "bg-amber-700",
              }}
              value={Math.min(
                100,
                (activityHeadersData?.data?.data?.tierProgress ?? 0) * 10
              )}
              className="w-full"
            />
          </div>
          <ArrowRight className={cn("my-auto text-black/50")} />
        </Link>
      </section>
    </div>
  )
}

export default Stats
