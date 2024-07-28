'use client'

import { Button } from "@/components/button";
import { useProfileContext } from "@/contexts/ProfileContext";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditProfile = () => {
  const router = useRouter();

  const { profileData, updateProfile, isProfileUpdating, isProfileUpdated, resetProfile } = useProfileContext();

  const [fullName, setFullName] = useState<string>(profileData?.data.data.fullName ?? "");
  const [username, setUsername] = useState<string>(profileData?.data.data.userName ?? "");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    updateProfile({
      fullName,
      username,
    });
  };

  return (
    <main className="h-screen flex flex-col px-4 py-6">
      <div className="mb-6 flex gap-4 items-center">
        <ChevronLeft
          className="cursor-pointer w-5 h-5"
          onClick={() => {
            router.back();
            resetProfile();
          }}
        />
        <p className="flex-1 font-semibold">Edit Profile</p>
      </div>
      <div className="w-full flex-1 flex flex-col overflow-x-hidden overflow-y-auto gap-4">
        <div className="flex flex-col gap-1">
          <p className="font-normal text-sm">Name</p>
          <input
            type="text"
            className="text-sm w-full p-2 rounded-md border border-gray-200"
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            defaultValue={profileData?.data.data.fullName ?? ""}
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-normal text-sm">Username</p>
          <input
            type="text"
            className="text-sm w-full p-2 rounded-md border border-gray-200"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={profileData?.data.data.userName ?? ""}
          />
        </div>
      </div>
      {isProfileUpdated && (
        <p className="text-center text-primary font-semibold text-sm mb-2">Profile updated successfully!</p>
      )}
      <Button
        type="button"
        onClick={e => handleSubmit(e)}
        isLoading={isProfileUpdating}
      >
        {isProfileUpdating ? "Updating..." : "Save"}
      </Button>
    </main>
  );
};

export default EditProfile;