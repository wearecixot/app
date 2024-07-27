import { FC } from "react"
import RewardCard from "./components/RewardCard"

const RewardList: FC = () => {
  const data = []
  return (
    <section className="flex flex-col gap relative">
      <div className="h-full w-[15px] bg-gradient-to-r from-white to-transparent absolute top-0 left-0 z-10" />
      <p className="font-semibold text-xl px-4">Rewards</p>
      {data.length > 0 ? (
        <div className="flex gap-4 overflow-x-scroll p-4">
          <RewardCard />
          <RewardCard />
          <RewardCard />
        </div>
      ) : null}
      <div className="h-full w-[15px] bg-gradient-to-l from-white to-transparent  absolute top-0 right-0 z-10" />
    </section>
  )
}

export default RewardList
