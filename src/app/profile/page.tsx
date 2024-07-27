'use client'

import { Button } from "@/components/button";
import Layout from "@/components/Layout";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Profile = () => {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/sign-in');
  }

  return (
    <Layout className="flex flex-col gap-6">
      <div className="flex flex-col items-center">
        <div className="rounded-full text-center overflow-hidden h-24 aspect-square relative">
          <Image
            src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"
            alt="Profile picture"
            className="object-cover"
            fill
          />
        </div>
        <p className="mt-4 text-lg font-semibold leading-none">Vincent Suryakim</p>
        <p className="mt-2 text-sm text-gray-500 leading-none">@vincentsuryakim</p>
      </div>
      <div className="flex justify-evenly">
        <div className="text-center flex flex-col items-center">
          <p className="text-sm font-bold">1.446</p>
          <p className="text-xs">Points</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <p className="text-sm font-bold">1.762</p>
          <p className="text-xs">Rewards</p>
        </div>
      </div>
      <Button
        variant="outline"
        onClick={() => router.push('/profile/edit')}
      >Edit Profile</Button>
      <div className="border border-gray-300 cursor-pointer rounded-lg">
        <div className="flex p-4 border-b border-gray-200">
          <p className="text-sm flex-1">Terms of Service</p>
          <ChevronRight className="w-4 h-4" />
        </div>
        <div className="flex p-4 border-gray-300">
          <p className="text-sm flex-1">Privacy Policy</p>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
      <Button variant="destructive" onClick={logout}>Sign Out</Button>
    </Layout>
  );
};

export default Profile;
