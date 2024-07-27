"use client";

import { OAUTH_STRAVA_LOADING_COPY } from "@/constants/oauth";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/button";

const OauthStrava = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    for (let i = 0; i < OAUTH_STRAVA_LOADING_COPY.length - 1; i++) {
      setTimeout(() => {
        setStep(i + 1);
      }, 3000 * (i + 1));
    }
  }, []);

  useEffect(() => {
    if (!code) {
      setError("Code not detected. Please try again.");
      return;
    }

    setError(null);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/strava?code=${code}`)
      .then((res) => {
        const data = res.data;
        localStorage.setItem("token", data.data.token);
        router.replace("/");
      })
      .catch((err) => {
        setError(err.toString());
      });
  }, [code, router]);

  return (
    <main className="h-screen">
      <section className="flex flex-col my-auto h-full justify-between p-6">
        <div className="flex flex-col items-center my-auto gap-6 h-fit">
          {!!error ? (
            <h1 className="text-2xl font-semibold text-center w-3/4 text-red-500">
              {error}
            </h1>
          ) : (
            <>
              <Loader
                size={24}
                className="mr-2 animate-spin tracking-tight leading-tight"
              />
              <h1 className="text-2xl font-semibold text-center w-3/4">
                {OAUTH_STRAVA_LOADING_COPY[step]}
              </h1>
            </>
          )}
        </div>
        {!!error && (
          <Button onClick={() => router.replace("/sign-in")}>Try again</Button>
        )}
      </section>
    </main>
  );
};

export default OauthStrava;
