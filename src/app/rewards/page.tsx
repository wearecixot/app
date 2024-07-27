'use client';

import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "@/libs/axios"

import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { REWARDS_TIER_ENUM } from "@/constants/rewards";
import { cn } from "@/utils/cn";

const Rewards = () => {
  const [tier, setTier] = useState<number>(0);

  const previousTier = () => {
    if (tier === 0) return;
    setTier(t => t - 1);
  }

  const nextTier = () => {
    if (tier === 3) return;
    setTier(t => t + 1);
  }

  const { data: rewards } = useQuery({
    queryKey: ["rewards"],
    queryFn: () => axios.get("/reward/list"),
  });

  return (
    <Layout className="flex flex-col p-0">
      <div className="w-full flex items-center justify-between bg-tertiary py-6 px-4">
        <ChevronLeft
          className={cn(
            tier === 0 ? "opacity-0" : "cursor-pointer"
          )}
          onClick={previousTier}
        />
        <div className="flex flex-col items-center gap-2">
          <User className="w-24 h-24" />
          <p>Tier {tier + 1}</p>
        </div>
        <ChevronRight
          className={cn(
            tier === 2 ? "opacity-0" : "cursor-pointer"
          )}
          onClick={nextTier}
        />
      </div>
      <div className="w-full flex flex-col gap-4 p-4 flex-1 overflow-y-auto">
        {!!rewards && rewards.data.data.filter((r: any) => r.tier === REWARDS_TIER_ENUM[tier + 1]).map((reward: any, index: number) => (
          <p key={index}>{reward.name}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Rewards;
