'use client'

import { usePathname, useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import { FC, useEffect, useMemo, useState } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [ready, setReady] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    const publicPath = [
      "/sign-in",
      "/oauth",
    ]

    // If current path is public, then setReady to True
    for (const path of publicPath) {
      if (pathname.startsWith(path)) {
        setReady(true);
        return;
      }
    }

    // If current path is not public, then check if user is authenticated
    const token = parseCookies().token;
    if (!token) {
      router.replace("/sign-in");
      return;
    }

    setReady(true);
  }, [router, pathname]);

  return ready ? children : null;
};

export default AuthGuard;