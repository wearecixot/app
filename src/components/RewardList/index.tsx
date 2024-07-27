import { FC } from "react";
import RewardCard from "./components/RewardCard";

const RewardList: FC = () => {
  return (
    <section className="flex flex-col gap-4">
        <p className="font-semibold text-xl">Rewards</p>
        <div className="flex gap-4 overflow-x-auto">
            <RewardCard />
        </div>
    </section>
  )
};

export default RewardList;