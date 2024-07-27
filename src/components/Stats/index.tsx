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

const Stats: FC = () => {
  return (
    <section className="flex flex-col gap-2 w-full p-3 rounded-lg border-[1px] border-green-500/10 bg-green-500/5">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-md font-medium opacity-50 text-green-800">
            Redeemable points
          </p>
          <div className="flex items-start gap-2">
            <Coins size={24} className="mt-2 text-green-600 fill-green-200" />

            <p className="text-3xl font-bold text-green-500">100</p>
          </div>
        </div>
        <Button
          variant="plain"
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Gift size={24} className="mr-2" />
          Open Gift
        </Button>
      </div>
      <span className="h-[2px] bg-green-500/10 w-full rounded-md" />
      <div className="grid grid-cols-3">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium opacity-50 text-green-800">
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
          <p className="text-sm font-medium opacity-50 text-green-800">
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
          <p className="text-sm font-medium opacity-50 text-green-800">
            Total time
          </p>
          <div className="flex items-start gap-1">
            <Timer
              fill
              size={16}
              className="mt-1.5 text-green-600 fill-green-100"
            />
            <p className="text-lg font-semibold text-green-500">100 second</p>
          </div>
        </div>
      </div>
      <span className="h-[2px] bg-green-500/10 w-full rounded-md" />
      <Link className="flex items-start justify-between gap-3" href="/level">
        <div className="relative flex items-center justify-center text-center">
          <Badge size={36} className=" text-green-600 fill-green-200" />
          <p className="absolute z-10 text-md m-auto text-xs text-green-800">
            1
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <p className="text-sm font-medium opacity-50 text-green-800">Level</p>
          <Progress value={12} className="w-full" />
        </div>
        <ArrowRight className="my-auto text-green-500" />
      </Link>
    </section>
  )
  return (
    <section className="flex flex-col gap-3 w-full">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-sm font-medium opacity-80 text-black/50">
            Redeemable points
          </p>
          <div className="flex items-center gap-2 text-green-600 fill-green-200">
            <Coins fill />
            <p className="text-5xl font-bold">100</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm font-medium opacity-80 text-black/50">
            Total calories burned
          </p>
          <div className="flex items-center gap-2 text-green-600 fill-green-200">
            <Flame size={14} />
            <p className="text-2xl font-bold">100</p>
          </div>
        </div>
      </div>
      {/*       <Button
        variant="plain"
        size="lg"
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        Redeem
      </Button> */}
    </section>
  )
  return (
    <section className="flex bg-secondary items-center w-full rounded-lg p-4">
      <div className="flex flex-1 flex-col">
        <p className="text-sm">Your Points</p>
        <p className="text-3xl font-bold">100</p>
        <p className="text-xs mt-2">You have burned 350 calories 🔥</p>
      </div>
      <Button>Redeem</Button>
    </section>
  )
}

export default Stats
