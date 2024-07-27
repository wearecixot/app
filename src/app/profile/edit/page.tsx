'use client'

import { Button } from "@/components/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const router = useRouter();

  return (
    <main className="h-screen flex flex-col px-4 py-6">
      <div className="mb-6 flex gap-4 items-center">
        <ChevronLeft
          className="cursor-pointer w-5 h-5"
          onClick={() => router.back()}
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
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-normal text-sm">Username</p>
          <input
            type="text"
            className="text-sm w-full p-2 rounded-md border border-gray-200"
            placeholder="Enter your username"
          />
        </div>
      </div>
      <Button>Save</Button>
    </main>
  );
};

export default EditProfile;