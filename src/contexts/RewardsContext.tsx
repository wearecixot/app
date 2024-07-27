"use client";

import axios from "@/libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext, useState } from "react";

interface RewardsContextValue {
  mutateRedeemRewards: () => void;
  isMutateRewardsPending: boolean;
  activityHeadersData: any;
  isActivityHeadersLoading: boolean;
  showConfetti: boolean;
  setShowConfetti: (showConfetti: boolean) => void;
}

const RewardsContext = createContext<RewardsContextValue | undefined>(
  undefined
);

export interface RewardsProviderProps {
  children: React.ReactNode;
}
export const RewardsProvider: React.FC<RewardsProviderProps> = ({
  children,
}) => {
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const { mutate: mutateRedeemRewards, isPending: isMutateRewardsPending } = useMutation({
    mutationFn: () => axios.post("/reward/redeem"),
    onSuccess: () => {
      refetchActivityHeaders();
      setShowConfetti(true);
    },
  });

  const { data: activityHeadersData, refetch: refetchActivityHeaders, isLoading: isActivityHeadersLoading } = useQuery({
    queryKey: ["activity-headers"],
    queryFn: () => axios.get("/activities/header"),
  });

  const value: RewardsContextValue = {
    mutateRedeemRewards,
    isMutateRewardsPending,
    activityHeadersData,
    isActivityHeadersLoading,
    showConfetti,
    setShowConfetti,
  };

  return (
    <RewardsContext.Provider value={value}>
      {children}
    </RewardsContext.Provider>
  );
};

export const useRewardsContext = () => {
  const context = useContext(RewardsContext);
  if (context === undefined) {
    throw Error("Error using Rewards Context");
  } else {
    return context;
  }
};
