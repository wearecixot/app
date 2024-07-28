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
import { useRouter } from "next/navigation"
import { formatNumber } from "@/utils/formatNumber"

const Stats: FC = () => {
  const router = useRouter()

  const {
    mutateRedeemRewards,
    isMutateRewardsPending,
    isActivityHeadersLoading,
    activityHeadersData,
  } = useRewardsContext()

  const tier =
    REWARDS_TIER_DICT[
      activityHeadersData?.data?.data?.tier as keyof typeof REWARDS_TIER_DICT
    ]

  const handleOpenGift = () => {
    if ((activityHeadersData?.data?.data?.balance ?? 0) >= 100) {
      mutateRedeemRewards()
    } else {
      router.push("stravaride://")
    }
  }

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

                {isActivityHeadersLoading ? (
                  <div className="bg-green-800/10 w-[100px] h-10 rounded-md animate-pulse" />
                ) : (
                  <p className="text-4xl font-bold text-green-500">
                    {formatNumber(
                      activityHeadersData?.data?.data?.balance ?? 0
                    )}
                  </p>
                )}
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
                {isActivityHeadersLoading ? (
                  <div className="bg-green-800/10 w-[70px] h-6 rounded-md animate-pulse" />
                ) : (
                  <p className="text-lg font-semibold text-green-500">
                    {formatNumber(
                      activityHeadersData?.data?.data?.totalCalories ?? 0
                    )}{" "}
                    kcal
                  </p>
                )}
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
                {isActivityHeadersLoading ? (
                  <div className="bg-green-800/10 w-[60px] h-6 rounded-md animate-pulse" />
                ) : (
                  <p className="text-lg font-semibold text-green-500">
                    {formatNumber(
                      activityHeadersData?.data?.data?.totalRun ?? 0
                    )}
                  </p>
                )}
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
                {isActivityHeadersLoading ? (
                  <div className="bg-green-800/10 w-[60px] h-6 rounded-md animate-pulse" />
                ) : (
                  <p className="text-lg font-semibold text-green-500">
                    {formatNumber(
                      activityHeadersData?.data?.data?.totalBicycle ?? 0
                    )}
                  </p>
                )}
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
                {isActivityHeadersLoading ? (
                  <div className="bg-green-800/10 w-[60px] h-6 rounded-md animate-pulse" />
                ) : (
                  <p className="text-lg font-semibold text-green-500">
                    {formatNumber(
                      activityHeadersData?.data?.data?.totalCommute ?? 0
                    )}
                  </p>
                )}
              </div>
            </div>
          </div>

          {isActivityHeadersLoading ? (
            <div className="h-11 w-full rounded-md bg-green-800/10 animate-pulse" />
          ) : (
            <Button
              variant="plain"
              size="lg"
              className={cn("w-full text-white", {
                "bg-green-500 hover:bg-green-600":
                  !isActivityHeadersLoading &&
                  (activityHeadersData?.data?.data?.balance ?? 0) >= 100,
                "bg-orange-500 hover:bg-orange-600":
                  !isActivityHeadersLoading &&
                  (activityHeadersData?.data?.data?.balance ?? 0) < 100,
              })}
              onClick={handleOpenGift}
              isLoading={isMutateRewardsPending}
            >
              {(activityHeadersData?.data?.data?.balance ?? 0) >= 100 ? (
                <Gift size={20} className="mr-2" />
              ) : null}
              {(activityHeadersData?.data?.data?.balance ?? 0) >= 100
                ? "Open Gift"
                : "Open Strava"}
            </Button>
          )}
        </div>

        <Link
          className="flex items-start justify-between gap-3 p-2 transition duration-200 ease-in-out"
          href="/rewards"
        >
          <div className="relative flex items-center justify-center text-center">
            <Badge
              size={36}
              className={cn("drop-shadow-md", {
                "text-amber-700 fill-amber-300":
                  !isActivityHeadersLoading && (tier === 1 || tier === 3),
                "text-gray-700 fill-gray-300":
                  !isActivityHeadersLoading && tier === 2,
                "text-black fill-white animate-pulse opacity-50":
                  isActivityHeadersLoading,
              })}
            />
            {isActivityHeadersLoading ? null : (
              <p
                className={cn(
                  "absolute z-10 text-md m-auto text-xs text-green-600",
                  {
                    "text-amber-600": tier === 1 || tier === 3,
                    "text-gray-700":
                      (activityHeadersData?.data?.data?.balance ?? 0) < 100 ||
                      tier === 2,
                  }
                )}
              >
                {(activityHeadersData?.data?.data?.balance ?? 0) < 100
                  ? 0
                  : tier}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm font-medium text-black/50">Level</p>
            {isActivityHeadersLoading ? (
              <div className="w-full h-[7px] bg-black/10 rounded-md animate-pulse" />
            ) : (
              <Progress
                classNames={{
                  root:
                    (activityHeadersData?.data?.data?.balance ?? 0) < 100
                      ? "bg-black/10"
                      : tier === 2
                      ? "bg-gray-700/20"
                      : "bg-amber-700/20",
                  indicator:
                    (activityHeadersData?.data?.data?.balance ?? 0) < 100
                      ? "bg-black/10"
                      : tier === 2
                      ? "bg-gray-700"
                      : "bg-amber-700",
                }}
                value={Math.min(
                  100,
                  (activityHeadersData?.data?.data?.tierProgress ?? 0) * 10
                )}
                className="w-full"
              />
            )}
          </div>
          <ArrowRight className={cn("my-auto text-black/50")} />
        </Link>
      </section>
    </div>
  )
}

export default Stats
