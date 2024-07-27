import { Button } from "@/components/button"
import { Image } from "@/components/image"
import { Activity } from "@/constants/mocks"
import { cn } from "@/utils/cn"
import { formatDate } from "@/utils/formatDate"
import { randomInteger } from "@/utils/math"
import { ArrowUpRight } from "lucide-react"
import { Footprints } from "lucide-react"
import { Bike } from "lucide-react"
import { TrainFront } from "lucide-react"
import {
  ArrowDownRight,
  ArrowUpLeft,
  Coins,
  Flame,
  GitCommitVertical,
  Store,
  TicketCheck,
  Timer,
} from "lucide-react"
import React, { FC } from "react"

const ActivityCard: FC<Activity> = (props: Activity) => {
  const { date, time } = formatDate(new Date(props.created_at).getTime())
  return (
    <section className="flex items-start w-full gap-3">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center relative">
        {props.is_claimed ? (
          props.type === "in" ? (
            <div className="w-6 h-6 flex items-center justify-center text-white bg-green-500 absolute z-10 -top-2.5 -left-2.5 rounded-full border-[3px] border-white">
              <ArrowDownRight size={12} />
            </div>
          ) : (
            <div className="w-6 h-6 flex items-center justify-center text-white bg-red-500 absolute z-10 -top-2.5 -left-2.5 rounded-full border-[3px] border-white">
              <ArrowUpLeft size={12} />
            </div>
          )
        ) : null}
        {props.metadata.type === "Run" ? (
          <Footprints className="text-white" size={16} />
        ) : props.metadata.type === "Ride" ? (
          <Bike className="text-white" size={16} />
        ) : props.metadata.type === "Commute" ? (
          <TrainFront className="text-white" size={16} />
        ) : (
          <TicketCheck className="text-white" size={16} />
        )}
      </div>
      <div className="flex flex-col h-full w-[85%]">
        <div className="flex items-center justify-between w-full">
          <p className="text-sm font-medium opacity-30">{date}</p>
          <p className="text-sm font-medium opacity-30">{time}</p>
        </div>
        <div className="flex items-center">
          <p className="font-semibold">{props.name}</p>
          {props.is_claimed ? (
            <div
              className={cn("flex ml-auto items-center gap-1 ", {
                "text-green-600 fill-green-200": props.type === "in",
                "text-red-600 fill-red-200": props.type === "out",
              })}
            >
              {props.type === "in" ? <p>+</p> : <p>-</p>}
              <Coins fill size={14} />
              <p className="text-sm font-medium">
                {randomInteger(1, 100)} points
              </p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col">
          {props.metadata.type === "Run" ||
          props.metadata.type === "Ride" ||
          props.metadata.type === "Commute" ? (
            <div className="flex flex-item gap-2">
              {props.metadata.type === "Commute" ? (
                <React.Fragment>
                  <div className="flex items-center gap-0.5 opacity-50">
                    <ArrowDownRight size={14} />
                    <p className="text-sm font-medium">{props.metadata.in}</p>
                  </div>
                  <div className="flex items-center gap-0.5 opacity-50">
                    <ArrowUpRight size={14} />
                    <p className="text-sm font-medium">{props.metadata.out}</p>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <div className="flex items-center gap-0.5 opacity-50">
                    <Flame size={14} />
                    <p className="text-sm font-medium">
                      {randomInteger(1000, 2000).toLocaleString()} kcal
                    </p>
                  </div>
                  <div className="flex items-center gap-1  opacity-50">
                    <Timer size={14} />
                    <p className="text-sm font-medium">
                      {randomInteger(5, 10).toLocaleString()} second
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5  opacity-50">
                    <GitCommitVertical size={14} />
                    <p className="text-sm font-medium">
                      {randomInteger(5, 10).toLocaleString()} km
                    </p>
                  </div>
                </React.Fragment>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-1  opacity-50">
              <Store size={14} />
              <p className="text-sm font-medium">{props.metadata.merchant}</p>
            </div>
          )}
        </div>

        {props.is_claimed ? null : (
          <Button
            variant="plain"
            size="lg"
            className="bg-green-500 flex items-center gap-1 rounded-lg mt-2 hover:bg-green-600 text-white"
          >
            <Coins fill size={14} className="text-white fill-green-500" />
            Claim {props.amount} points
          </Button>
        )}
      </div>
    </section>
  )
}

export default ActivityCard
