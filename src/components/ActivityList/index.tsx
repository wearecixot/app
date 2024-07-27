import { FC } from "react"
import ActivityCard from "./components/ActivityCard"
import { MOCK_DATA } from "@/constants/mocks"

const ActivityList: FC = () => {
  return (
    <section className="flex flex-col gap-4">
      <p className="font-semibold text-xl">Activities</p>
      <div className="flex flex-col gap-4 px-2">
        {MOCK_DATA.map((activity) => (
          <ActivityCard key={activity.id} {...activity} />
        ))}
      </div>
    </section>
  )
}

export default ActivityList
