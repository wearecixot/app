'use client'

import { usePathname, useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: FC<AuthGuardProps> = ({ children }) => {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  const pathname = usePathname();

  const publicPath = [
    "/sign-in",
    "/oauth",
  ]
  const isPublic = publicPath.includes(pathname);

  useEffect(() => {
    if (isPublic) {
      setReady(true);
      return;
    }
    const token = localStorage.getItem("token");
    if (!token) {
      router.replace("/sign-in");
    } else {
      setReady(true);
    }
  }, [router, isPublic]);

  return ready ? children : null;
};

export default AuthGuard;