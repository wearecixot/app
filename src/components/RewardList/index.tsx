"use client"

import React, { FC } from "react"
import RewardCard from "./components/RewardCard"
import { Ticket } from "lucide-react"
import { useRewardsContext } from "@/contexts/RewardsContext"

const RewardList: FC = () => {
  const { myRewardsData, isMyRewardsLoading } = useRewardsContext()

  return (
    <section className="flex flex-col gap relative">
      <p className="font-semibold text-xl px-4">Rewards</p>
      {isMyRewardsLoading ? (
        <div className="flex gap-4 p-4">
          <div className="shadow-md h-[200px] min-w-[200px] overflow-hidden flex flex-col rounded-md drop-shadow-md bg-white">
            <div className="text-center overflow-hidden h-[150px] w-full aspect-square relative bg-gray-200 animate-pulse" />
            <div className="flex flex-col h-full gap-1 p-2.5">
              <div className="w-[80px] h-5 bg-black/10 animate-pulse rounded-md" />
              <div className="w-[80px] h-5 bg-black/10 animate-pulse rounded-md" />
              {true ? (
                <div className="w-full h-8 mt-auto bg-black/10 animate-pulse rounded-md" />
              ) : null}
            </div>
          </div>
          <div className="shadow-md h-[200px] min-w-[200px] overflow-hidden flex flex-col rounded-md drop-shadow-md bg-white">
            <div className="text-center overflow-hidden h-[150px] w-full aspect-square relative bg-gray-200 animate-pulse" />
            <div className="flex flex-col h-full gap-1 p-2.5">
              <div className="w-[80px] h-5 bg-black/10 animate-pulse rounded-md" />
              <div className="w-[80px] h-5 bg-black/10 animate-pulse rounded-md" />
              {true ? (
                <div className="w-full h-8 mt-auto bg-black/10 animate-pulse rounded-md" />
              ) : null}
            </div>
          </div>
        </div>
      ) : myRewardsData?.data.data.length > 0 ? (
        <React.Fragment>
          <div className="h-full w-[15px] bg-gradient-to-r from-white to-transparent absolute top-0 left-0 z-10" />
          <div className="flex gap-4 overflow-x-scroll p-4">
            {myRewardsData?.data.data.map((reward: any) => (
              <RewardCard key={reward.id} {...reward} />
            ))}
          </div>
          <div className="h-full w-[15px] bg-gradient-to-l from-white to-transparent  absolute top-0 right-0 z-10" />
        </React.Fragment>
      ) : (
        <div className="px-4 pt-4">
          <div className="w-full py-4 rounded-md bg-gray-50 border-[1px] flex flex-col gap-1.5 justify-center items-center">
            <Ticket size={24} className="opacity-50" />
            <p className="font-semibold opacity-50">No rewards available</p>
            <p className="opacity-50 text-sm">
              Start doing to get redemeeable points
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default RewardList
