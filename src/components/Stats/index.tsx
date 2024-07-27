import { FC } from "react"
import { Button } from "../button"
import { Coins } from "lucide-react"
import { Flame } from "lucide-react"
import { Gift } from "lucide-react"

const Stats: FC = () => {
  return (
    <section className="flex items-center justify-between w-full p-3 rounded-lg border-[1px] border-green-500/10 bg-green-500/5 h-[100px]">
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium opacity-50 text-green-800">
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
