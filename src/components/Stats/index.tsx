import { FC } from "react";
import { Button } from "../button";

const Stats: FC = () => {
    return (
        <div className="flex bg-tertiary items-center w-full rounded-lg p-4">
            <div className="flex flex-1 flex-col">
                <p className="text-sm">Your Points</p>
                <p className="text-3xl font-bold">100</p>
                <p className="text-xs mt-2">You have burned 350 calories 🔥</p>
            </div>
            <Button>
                Redeem
            </Button>
        </div>
    );
}

export default Stats;