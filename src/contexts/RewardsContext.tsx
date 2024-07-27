"use client";

import axios from "@/libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createContext, useContext } from "react";

interface RewardsContextValue {
  mutateRedeemRewards: () => void;
  isMutateRewardsPending: boolean;
  activityHeadersData: any;
  isActivityHeadersLoading: boolean;
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
  const { mutate: mutateRedeemRewards, isPending: isMutateRewardsPending } = useMutation({
    mutationFn: () => axios.post("/reward/redeem"),
    onSuccess: () => {
      refetchActivityHeaders();
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
