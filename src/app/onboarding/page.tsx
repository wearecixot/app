"use client";

import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ONBOARDING_STEPS } from "@/constants/onboarding";
import { cn } from "@/utils/cn";

const Onboarding = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    if (step === ONBOARDING_STEPS.length - 1) {
      router.replace("/");
    } else {
      setStep(step + 1);
    }
  };

  return (
    <main className="h-screen">
      <section className="flex flex-col items-center justify-between h-full px-6 py-12">
        <div className="flex flex-1 items-center justify-center">
          <p>{ONBOARDING_STEPS[step].image.src}</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 text-center">
            <h1 className="text-4xl font-semibold">
              {ONBOARDING_STEPS[step].title}
            </h1>
            <h2 className="text-gray-500">{ONBOARDING_STEPS[step].subtitle}</h2>
          </div>
          <div className="w-full flex justify-center gap-2">
            {ONBOARDING_STEPS.map((_, index) => (
              <div
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full cursor-pointer",
                  index === step ? "bg-primary" : "bg-gray-300"
                )}
                onClick={() => setStep(index)}
              />
            ))}
          </div>
          <Button className="w-full" onClick={() => nextStep()}>
              {step === ONBOARDING_STEPS.length - 1 ? "Start" : "Next"}
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Onboarding;
