"use client"

import { Button } from "@/components/button"
import { Input } from "@/components/input"
import Layout from "@/components/Layout"
import TabsList from "@/components/TabsList"
import Tab from "@/components/TabsList/components/Tab"
import { useRewardsContext } from "@/contexts/RewardsContext"
import axios from "@/libs/axios"
import { cn } from "@/utils/cn"
import { useMutation } from "@tanstack/react-query"
import { RefreshCcw } from "lucide-react"
import { Coins } from "lucide-react"
import { TrainFront } from "lucide-react"
import { Bike } from "lucide-react"
import { CreditCard } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

type Tab = "run" | "bike" | "commute"

const Commute = () => {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [points, setPoints] = React.useState<number>(0);
  const [inStation, setInStation] = React.useState<string>("");
  const [outStation, setOutStation] = React.useState<string>("");

  const router = useRouter();

  const { setShowConfetti } = useRewardsContext()

  const { mutate } = useMutation({
    mutationKey: ["add-commute"],
    mutationFn: () => {
      return axios.post("/activities/add/transport")
    },
    onSuccess: (res) => {
      const data = res?.data.data
      setPoints(data.pointAmount)
      setInStation(data.in)
      setOutStation(data.out)
      setIsLoaded(true)
      setShowConfetti(true)
    },
  })

  return (
    <div
      onClick={() => {
        if (isLoaded) {
          router.push('/')
        } else {
          mutate()
        }
      }}
      className={cn(
        "cursor-pointer w-full h-full p-4 text-center rounded-md bg-gray-50 border-[1px] flex flex-col gap-2 justify-center items-center",
        {
          "bg-gray-50": !isLoaded,
          "bg-green-100/20 border-green-200/50": isLoaded,
        }
      )}
    >
      {!isLoaded ? (
        <React.Fragment>
          <CreditCard size={24} className="opacity-50" />
          <p className="font-semibold opacity-50">
            Please tap your electronic money
          </p>
          <p className="opacity-50 text-sm">
            We&apos;ll automatically get your last public transporation transaction
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="w-10 mb-4 h-10 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center relative">
            <TrainFront size={16} />
          </div>

          <p className="font-semibold text-green-500">
            Congratulations!
          </p>
          <p className="opacity-80 text-sm text-green-500">
            You got {points} points for your last commute from {inStation} to {outStation}
            {/* We&apos;ll automatically get your last public transporation transaction */}
          </p>
          <Button
            variant="plain"
            size="lg"
            className="bg-green-500 mt-4 hover:bg-green-600 w-full text-white"
          >
            <Coins size={12} className="mr-2" />
            See Points
          </Button>
        </React.Fragment>
      )}
    </div>
  )
}

const Add = () => {
  const [selectedTab, setSelectedTab] = React.useState<Tab>("run")
  return (
    <Layout className="px-4 gap-4 h-full flex flex-col">
      <p className="text-2xl font-semibold">Add</p>
      <div className="flex flex-col gap-4 h-full">
        <TabsList>
          <Tab
            onClick={() => setSelectedTab("run")}
            isActive={selectedTab === "run"}
          >
            Run
          </Tab>
          <Tab
            onClick={() => setSelectedTab("bike")}
            isActive={selectedTab === "bike"}
          >
            Bike
          </Tab>
          <Tab
            onClick={() => setSelectedTab("commute")}
            isActive={selectedTab === "commute"}
          >
            Commute
          </Tab>
        </TabsList>
        {selectedTab === "commute" ? (
          <Commute />
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="font-semibold">Strava URL</p>
              <Input
                className="input"
                placeholder="https://strava.app.link/Cs3tsdo9yLb"
              />
            </div>
            <Button size="lg">
              <Coins size={12} className="mr-2" />
              Get Points
            </Button>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Add
