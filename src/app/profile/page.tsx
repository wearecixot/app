"use client"

import { Button } from "@/components/button"
import Layout from "@/components/Layout"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { destroyCookie } from "nookies"
import { useProfileContext } from "@/contexts/ProfileContext"
import { formatNumber } from "@/utils/formatNumber"

const Profile = () => {
  const router = useRouter();

  const { profileData } = useProfileContext();

  const logout = () => {
    destroyCookie(null, "token");
    router.push('/sign-in');
  }

  return (
    <Layout className="flex flex-col gap-6 px-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full text-center overflow-hidden h-24 aspect-square relative">
          <Image
            src="https://pbs.twimg.com/profile_images/899773129412587520/IH7_EA3E_400x400.jpg"
            alt="Profile picture"
            className="object-cover"
            fill
          />
        </div>
        <p className="mt-4 text-lg font-semibold leading-none">
          {profileData?.data.data.fullName}
        </p>
        <p className="mt-2 text-sm text-gray-500 leading-none">
          @{profileData?.data.data.userName}
        </p>
      </div>
      <div className="flex justify-evenly">
        <div className="text-center flex flex-col items-center">
          <p className="text-sm font-bold">{formatNumber(profileData?.data.data.points)}</p>
          <p className="text-xs">Points</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <p className="text-sm font-bold">{formatNumber(profileData?.data.data.redeemedRewards)}</p>
          <p className="text-xs">Rewards</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Button variant="outline" onClick={() => router.push("/profile/edit")}>
          Edit Profile
        </Button>
        <Button variant="destructive" onClick={logout}>Sign Out</Button>
      </div>
    </Layout>
  )
}

export default Profile
