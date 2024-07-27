"use client"

import { FC } from "react"
import ActivityCard from "./components/ActivityCard"
import { MOCK_DATA } from "@/constants/mocks"
import { Ticket } from "lucide-react"
import { Bike } from "lucide-react"
import { Button } from "../button"
import { RefreshCcw } from "lucide-react"

const ActivityList: FC = () => {
  return (
    <section className="flex flex-col gap-4 px-4">
      <p className="font-semibold text-xl">Activities</p>

      <div className="w-full p-4 text-center rounded-md bg-gray-50 border-[1px] flex flex-col gap-1.5 justify-center items-center">
        <Bike size={24} className="opacity-50" />
        <p className="font-semibold opacity-50">Start doing something</p>
        <p className="opacity-50 text-sm">
          Start doing by logging your activities <br /> (biking, running, and
          commuting)
        </p>
        <div className="flex flex-col gap-1.5 w-full">
          <Button size="lg" className="mt-2 w-full">
            <RefreshCcw size={12} className="mr-2" />
            Refresh
          </Button>
          <Button size="lg" variant={"secondary"} className="mt-2 w-full">
            <Bike size={12} className="mr-2" />
            Add Manual
          </Button>
        </div>
      </div>
      {/*       <div className="flex flex-col gap-4">
        {MOCK_DATA.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div> */}
    </section>
  )
}

export default ActivityList
