"use client";

import { FC, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { usePathname, useRouter } from "next/navigation";

import { House, User, CirclePlus } from "lucide-react";

const Footer: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [on, setOn] = useState<"HOME" | "ADD" | "PROFILE">("HOME");

  useEffect(() => {
    if (pathname.startsWith("/add")) {
      setOn("ADD");
    } else if (pathname.startsWith("/profile")) {
      setOn("PROFILE");
    } else {
      setOn("HOME");
    }
  }, [pathname]);

  return (
    <div className="w-full py-4 flex justify-evenly border-t-0.5 border-t-gray-300">
      <House
        className={cn("cursor-pointer", on === "HOME" && "text-primary")}
        onClick={() => router.replace("/")}
      />
      <CirclePlus
        className={cn("cursor-pointer", on === "ADD" && "text-primary")}
        onClick={() => router.replace("/add")}
      />
      <User
        className={cn("cursor-pointer", on === "PROFILE" && "text-primary")}
        onClick={() => router.replace("/profile")}
      />
    </div>
  );
};

export default Footer;