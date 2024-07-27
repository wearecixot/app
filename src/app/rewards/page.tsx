'use client';

import Layout from "@/components/Layout";
import { useState } from "react";

import { User, ChevronLeft, ChevronRight } from "lucide-react";
import { TIER_REWARDS } from "@/constants/mocks";

const Rewards = () => {
  const [tier, setTier] = useState<number>(1);

  const previousTier = () => {
    if (tier === 0) return;
    setTier(t => t - 1);
  }

  const nextTier = () => {
    if (tier === 3) return;
    setTier(t => t + 1);
  }

  return (
    <Layout className="flex flex-col p-0">
      <div className="w-full flex items-center justify-between bg-tertiary py-6 px-4">
        <ChevronLeft className="cursor-pointer" onClick={previousTier} />
        <div className="flex flex-col items-center gap-2">
          <User className="w-24 h-24" />
          <p>Tier {tier + 1}</p>
        </div>
        <ChevronRight className="cursor-pointer" onClick={nextTier} />
      </div>
      <div className="w-full flex flex-col gap-4 p-4 flex-1 overflow-y-auto">
        {TIER_REWARDS[tier].map((reward, index) => (
          <p key={index}>{reward}</p>
        ))}
      </div>
    </Layout>
  );
};

export default Rewards;
