"use client"

import { Button } from "@/components/button"
import { PageTransition } from "@/layouts/transition"
import { useRouter } from "next/navigation"

const InitialRewardsPage = () => {
  const { back } = useRouter()
  return (
    <PageTransition>
      <main className="h-screen">
        <section className="flex flex-col h-full justify-between px-6 py-12">
          <h1 className="text-5xl font-semibold">You got 1231312 points</h1>
          <div className="flex flex-col gap-3">
            <Button onClick={() => back()}>Back</Button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}

export { InitialRewardsPage }
