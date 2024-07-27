import { Image } from "@/components/image"
import { Activity } from "@/constants/mocks"
import { cn } from "@/utils/cn"
import { formatDate } from "@/utils/formatDate"
import { Timer } from "lucide-react"
import {
  ArrowDownRight,
  ArrowUpRight,
  Coins,
  Flame,
  GitCommitVertical,
  Store,
  TicketCheck,
} from "lucide-react"
import { FC } from "react"

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const ActivityCard: FC<Activity> = (props: Activity) => {
  const { date, time } = formatDate(new Date(props.created_at).getTime())
  return (
    <section className="flex items-center w-full gap-3">
      <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center relative">
        {props.type === "in" ? (
          <div className="w-6 h-6 flex items-center justify-center text-white bg-green-500 absolute z-10 -top-2.5 -left-2.5 rounded-full border-[3px] border-white">
            <ArrowDownRight size={12} />
          </div>
        ) : (
          <div className="w-6 h-6 flex items-center justify-center text-white bg-red-500 absolute z-10 -top-2.5 -left-2.5 rounded-full border-[3px] border-white">
            <ArrowUpRight size={12} />
          </div>
        )}
        {props.metadata.type === "Run" ? (
          <Image
            src="/logo/run.png"
            alt="Run"
            className="h-[14px] w-[14px]  invert"
          />
        ) : props.metadata.type === "Ride" ? (
          <Image
            src="/logo/cycle.png"
            alt="Run"
            className="h-[18px] w-[18px] invert"
          />
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
        </div>

        <div className="flex flex-col">
          {props.metadata.type === "Run" || props.metadata.type === "Ride" ? (
            <div className="flex flex-item gap-2">
              <div className="flex items-center gap-0.5 opacity-50">
                <Flame size={14} />
                <p className="text-sm font-medium">
                  {randomInteger(1000, 2000).toLocaleString()} kcal
                </p>
              </div>
              <div className="flex items-center gap-1 text-gray-700 opacity-50">
                <Timer size={14} />
                <p className="text-sm font-medium">
                  {randomInteger(5, 10).toLocaleString()} second
                </p>
              </div>
              <div className="flex items-center gap-0.5 text-gray-700 opacity-50">
                <GitCommitVertical size={14} />
                <p className="text-sm font-medium">
                  {randomInteger(5, 10).toLocaleString()} km
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-gray-700 opacity-50">
              <Store size={14} />
              <p className="text-sm font-medium">{props.metadata.merchant}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ActivityCard
