import { FC } from "react"
import RewardCard from "./components/RewardCard"

const RewardList: FC = () => {
  return (
    <section className="flex flex-col gap">
      <p className="font-semibold text-xl px-4">Rewards</p>
      <div className="flex gap-4 overflow-x-scroll p-4">
        <RewardCard />
        <RewardCard />
        <RewardCard />
      </div>
    </section>
  )
}

export default RewardList
