"use client";

import { FC } from "react";
import { Button } from "../button";
import { Coins } from "lucide-react";
import { Flame } from "lucide-react";
import { Gift } from "lucide-react";
import { GitCommitVertical } from "lucide-react";
import { Timer } from "lucide-react";
import { Badge } from "lucide-react";
import Link from "next/link";
import { Progress } from "../progress";
import { ArrowRight } from "lucide-react";
import { useRewardsContext } from "@/contexts/RewardsContext";
import { Footprints } from "lucide-react";
import { Bike } from "lucide-react";
import { TrainFront } from "lucide-react";
import { REWARDS_TIER_DICT } from "@/constants/rewards";

const Stats: FC = () => {
  const { mutateRedeemRewards, isMutateRewardsPending, activityHeadersData } =
    useRewardsContext();
  return (
    <div className="px-4">
      <section className="flex flex-col gap-2 p-2 w-full rounded-lg border-[1px] border-green-700/10 bg-green-600/10 drop-shadow-xl">
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
            <Gift size={24} className="mr-2" />
            Open Gift
          </Button>
        </div>

        <Link
          className="flex items-start justify-between gap-3 p-2 transition duration-200 ease-in-out"
          href="/level"
        >
          <div className="relative flex items-center justify-center text-center">
            <Badge
              size={36}
              className=" text-green-600 fill-green-200 drop-shadow-md"
            />
            <p className="absolute z-10 text-md m-auto text-xs text-green-600">
              {REWARDS_TIER_DICT[(activityHeadersData?.data?.data?.tier as keyof typeof REWARDS_TIER_DICT)]}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-sm font-medium text-green-900/50">Level</p>
            <Progress value={Math.min(100, (activityHeadersData?.data?.data?.tierProgress ?? 2) * 10)} className="w-full" />
          </div>
          <ArrowRight className="my-auto text-green-600" />
        </Link>
      </section>
    </div>
  );
};

export default Stats;
