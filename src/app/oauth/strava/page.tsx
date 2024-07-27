"use client";

import { OAUTH_STRAVA_LOADING_COPY } from "@/constants/oauth";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/button";
import { useMutation } from "@tanstack/react-query";
import { setCookie } from "nookies";

const OauthStrava = () => {
  const router = useRouter();
  const [step, setStep] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [alreadyCalled, setAlreadyCalled] = useState<boolean>(false);

  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    for (let i = 0; i < OAUTH_STRAVA_LOADING_COPY.length - 1; i++) {
      setTimeout(() => {
        setStep(i + 1);
      }, 3000 * (i + 1));
    }
  }, []);

  const { isPending, mutate } = useMutation({
    mutationFn: () => axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/strava?code=${code}`),
    onSuccess: (res) => {
      const data = res.data;
      setCookie(null, "token", data.data.token, {
        path: '/'
      });
      router.replace("/");
    },
    onError: (err) => {
      setError(err.toString());
    },
  })

  useEffect(() => {
    if (alreadyCalled) return;

    if (!code) {
      setError("Code not detected. Please try again.");
      return;
    }

    setAlreadyCalled(true);
    setError(null);
    if (!isPending) {
      mutate();
    }
  }, []);

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
