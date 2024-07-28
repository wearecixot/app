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
  myRewardsData: any;
  isMyRewardsLoading: boolean;
  activitiesListData: any;
  isActivitiesListLoading: boolean;
  mutateClaimPoints: (activityId: string) => void;
  mutateRefreshActivitiesList: () => void;
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
      refetchMyRewards();
      refetchActivitiesList();
      setShowConfetti(true);
    },
  });

  const { data: activityHeadersData, refetch: refetchActivityHeaders, isLoading: isActivityHeadersLoading } = useQuery({
    queryKey: ["activity-headers"],
    queryFn: () => axios.get("/activities/header"),
  });

  const { data: myRewardsData, refetch: refetchMyRewards, isLoading: isMyRewardsLoading } = useQuery({
    queryKey: ["my-rewards"],
    queryFn: () => axios.get("/reward/my-rewards"),
  })

  const { mutate: mutateRefreshActivitiesList } = useMutation({
    mutationFn: () => axios.post("/activities/add/random"),
    onSuccess: () => {
      refetchActivitiesList();
      refetchActivityHeaders();
      refetchMyRewards();
    },
  })

  const { data: activitiesListData, refetch: refetchActivitiesList, isLoading: isActivitiesListLoading } = useQuery({
    queryKey: ['activities-list'],
    queryFn: () => axios.get('/activities/list'),
  })

  const { mutate: mutateClaimPoints } = useMutation({
    mutationFn: (activityId: string) => axios.post(`/activities/claim-points/${activityId}`),
    onSuccess: () => {
      refetchMyRewards();
      refetchActivitiesList();
      refetchActivityHeaders();
    },
  })

  const value: RewardsContextValue = {
    mutateRedeemRewards,
    isMutateRewardsPending,
    activityHeadersData,
    isActivityHeadersLoading,
    showConfetti,
    setShowConfetti,
    myRewardsData,
    isMyRewardsLoading,
    activitiesListData,
    isActivitiesListLoading,
    mutateClaimPoints,
    mutateRefreshActivitiesList,
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
