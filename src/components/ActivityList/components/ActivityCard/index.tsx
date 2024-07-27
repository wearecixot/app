import { formatDate } from "@/utils/formatDate";
import { FC } from "react";

interface ActivityCardProps {
    time: number;
    distance: string;
    type: string;
    burnedcalories: string;
    points: string;
}
const ActivityCard: FC<ActivityCardProps> = ({
    time,
    distance,
    type,
    burnedcalories,
    points,
}) => {
    const formattedTime = formatDate(time);
    return (
        <section className="flex bg-tertiary items-center w-full rounded-lg p-4">
            <div className="flex-1 flex flex-col gap-2">
                <p className="text-xs">{formattedTime}</p>
                <p className="text-green-800 font-semibold text-2xl">{distance} km — {burnedcalories} kcal</p>
                <p className="text-xs text-gray-500">{type}</p>
            </div>
            <p className="text-primary font-semibold text-3xl">+{points}</p>
        </section>
    );
}

export default ActivityCard;