"use client"

import { Button } from "@/components/button"
import { PageTransition } from "@/layouts/transition"
import { Loader } from "lucide-react"
import { useRouter } from "next/navigation"
import React from "react"

const InitialRewardsPage = () => {
  const { back } = useRouter()
  const [isCalculating, setCalculating] = React.useState(true)

  return (
    <PageTransition>
      <main className="h-screen">
        <section className="flex flex-col my-auto h-full justify-between px-6 py-12">
          <div className="flex flex-col items-center my-auto gap-6 h-fit">
            <Loader
              size={24}
              className="mr-2 animate-spin tracking-tight leading-tight"
            />
            <h1 className="text-2xl font-semibold text-center w-3/4">
              {isCalculating
                ? "We're calculating redeemable points for you"
                : "You got 10000"}
            </h1>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}

export { InitialRewardsPage }
