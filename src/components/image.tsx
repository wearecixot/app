"use client"

import NextImage from "next/image"
import React from "react"
import { Skeleton } from "./skeleton"
import { cn } from "@/utils/cn"

function Image({
  className,
  src,
  ...props
}: Omit<Parameters<typeof NextImage>[0], "fill" | "width" | "height">) {
  const isMounted = React.useRef(false)

  if (!isMounted || !src)
    return <Skeleton className={cn("h-full w-full", className)} />

  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <NextImage {...props} fill className="object-contain" src={src} />
    </div>
  )
}

export { Image }
