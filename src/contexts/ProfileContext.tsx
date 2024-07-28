"use client";

import axios from "@/libs/axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { createContext, useContext } from "react";

interface ProfileContextType {
  profileData: any;
  isProfileLoading: boolean;
  refetchProfile: () => void;
  updateProfile: (bodyData: any) => void;
  isProfileUpdating: boolean;
  isProfileUpdated: boolean;
  resetProfile: () => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(
    undefined
);

interface ProfileProviderProps {
    children: React.ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
    const { data: profileData, isLoading: isProfileLoading, refetch: refetchProfile } = useQuery({
        queryKey: ["profile"],
        queryFn: () => axios.get("/profile"),
    });

    const { mutate: updateProfile, isPending: isProfileUpdating, isSuccess: isProfileUpdated, reset: resetProfile } = useMutation({
        mutationFn: (bodyData: any) => axios.put("/profile", bodyData),
        onSuccess: () => {
            refetchProfile();
        },
    });

    const value: ProfileContextType = {
        profileData,
        isProfileLoading,
        refetchProfile,
        updateProfile,
        isProfileUpdating,
        isProfileUpdated,
        resetProfile,
    }

    return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
}

export function useProfileContext() {
    const context = useContext(ProfileContext);
    if (context === undefined) {
        throw new Error("Error using Profile Context");
    } else {
        return context;
    }
}