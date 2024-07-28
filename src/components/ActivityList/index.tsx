"use client"

import { useRewardsContext } from "@/contexts/RewardsContext"
import { Bike, RefreshCcw } from "lucide-react"
import { FC } from "react"
import { Button } from "../button"
import ActivityCard from "./components/ActivityCard"
import { useRouter } from "next/navigation"

const ActivityList: FC = () => {
  const router = useRouter()
  const { activitiesListData, isActivitiesListLoading } = useRewardsContext()

  return (
    <section className="flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between w-full">
        <p className="font-semibold text-xl">Activities</p>

        {!!activitiesListData?.data.data ? <RefreshCcw size={14} /> : null}
      </div>

      {isActivitiesListLoading ? (
        <div className="flex flex-col gap-4">
          <section className="flex items-start w-full gap-3">
            <div className="w-10 h-10 animate-pulse bg-black/10 rounded-full flex items-center justify-center relative" />
            <div className="flex flex-col gap-2 h-full w-[85%]">
              <div className="flex items-center justify-between w-full">
                <div className="w-[100px] h-2 bg-black/10 animate-pulse" />
                <div className="w-[60px] h-2 bg-black/10 animate-pulse" />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="w-[70px] h-5 bg-black/10 animate-pulse" />
                <div className="w-[70px] h-5 bg-black/10 animate-pulse" />
              </div>
            </div>
          </section>
          <section className="flex items-start w-full gap-3">
            <div className="w-10 h-10 animate-pulse bg-black/10 rounded-full flex items-center justify-center relative" />
            <div className="flex flex-col gap-2 h-full w-[85%]">
              <div className="flex items-center justify-between w-full">
                <div className="w-[100px] h-2 bg-black/10 animate-pulse" />
                <div className="w-[60px] h-2 bg-black/10 animate-pulse" />
              </div>
              <div className="flex items-center w-full justify-between">
                <div className="w-[70px] h-5 bg-black/10 animate-pulse" />
                <div className="w-[70px] h-5 bg-black/10 animate-pulse" />
              </div>
            </div>
          </section>
        </div>
      ) : !!activitiesListData?.data.data ? (
        <div className="flex flex-col gap-4">
          {activitiesListData?.data.data.map((activity: any) => (
            <ActivityCard
              key={activity.id}
              id={activity.id}
              type={activity.type}
              name={activity.activity}
              created_at={activity.createdAt}
              amount={activity.pointAmount}
              is_claimed={activity.isPointClaimed}
              metadata={{
                ...(!!activity.activityData?.in && {
                  in: activity.activityData.in,
                }),
                ...(!!activity.activityData?.out && {
                  out: activity.activityData.out,
                }),
                ...(!!activity.activityData?.calories && {
                  calories: activity.activityData.calories,
                }),
                ...(!!activity.activityData?.distance && {
                  distance: activity.activityData.distance,
                }),
                type: activity.activity,
                merchant: activity.activityData?.merchant ?? "",
              }}
            />
          ))}
        </div>
      ) : (
        <div className="w-full p-4 text-center rounded-md bg-gray-50 border-[1px] flex flex-col gap-1.5 justify-center items-center">
          <Bike size={24} className="opacity-50" />
          <p className="font-semibold opacity-50">Start doing something</p>
          <p className="opacity-50 text-sm">
            Start doing by logging your activities <br /> (biking, running, and
            commuting)
          </p>
          <div className="flex flex-col gap-1.5 w-full">
            <Button
              size="lg"
              className="mt-2 w-full"
              onClick={() => router.refresh()}
            >
              <RefreshCcw size={12} className="mr-2" />
              Refresh
            </Button>
            <Button
              size="lg"
              variant={"secondary"}
              className="mt-2 w-full"
              onClick={() => router.push("/add")}
            >
              <Bike size={12} className="mr-2" />
              Add Manual
            </Button>
          </div>
        </div>
      )}
    </section>
  )
}

export default ActivityList
