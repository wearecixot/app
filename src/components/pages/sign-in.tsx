"use client"

import { Button } from "@/components/button"
import { Image } from "@/components/image"
import { PageTransition } from "@/layouts/transition"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import React from "react"

const SignInPage = () => {
  const { push } = useRouter()
  return (
    <PageTransition>
      <main className="h-screen">
        <section className="flex flex-col h-full justify-between px-6 py-12">
          {/*           <motion.div
            key={"sign-in"}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              type: "tween",
              duration: 0.5,
            }}
            variants={{
              initialState: {
                x: "100vw",
                opacity: 0,
              },
              animateState: {
                x: 0,
                opacity: 1,
              },
              exitState: {
                x: "-100vw",
                opacity: 0,
              },
            }}
          > */}
          <h1 className="text-5xl font-semibold">
            Welcome to <br /> Hidup Sehat!
          </h1>
          {/*           </motion.div> */}
          <div className="flex flex-col gap-3">
            <Button onClick={() => push("/reward")}>
              <Image
                src="/brand/strava.png"
                alt="Google Login"
                className="mr-3 h-[19px] w-[18px]"
              />
              Continue with Strava
            </Button>
            <Button>
              <svg
                className="text-white mr-3 mt-0.5"
                height="42"
                viewBox="0 0 14 44"
                width="14"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z"></path>
              </svg>
              Continue with Apple
            </Button>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}

export default SignInPage
