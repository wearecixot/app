"use client"

import { cn } from "@/utils/cn"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader } from "lucide-react"
import * as React from "react"
import * as Tooltip from "./tooltip"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        plain: "",
        default: "bg-black text-white bg shadow hover:bg-black/80",
        destructive: "bg-red-500 text-white shadow-sm hover:bg-red-700",
        outline:
          "border border-black/10 bg-transparent hover:bg-black/[0.03] shadow-sm",
        secondary:
          "border border-black/10 bg-gradient-to-b from-white via-gray-50 to-gray-100 hover:via-gray-100 hover:to-gray-200 shadow-md",
        ghost: "bg-transparent",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        plain: "",
        default: "h-12 px-4 py-3",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: {
    icon: React.ElementType
    size?: number
  }
  tooltip?: string | React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      isLoading,
      tooltip,
      ...props
    },
    ref
  ) => {
    const { icon, size: iconSize = 16 } = props.icon ?? {}
    const Comp = asChild ? Slot : "button"
    const Icon = icon ?? React.Fragment
    return (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Comp
              className={cn(buttonVariants({ variant, size, className }))}
              ref={ref}
              disabled={isLoading}
              {...props}
            >
              {isLoading ? (
                <Loader size={16} className="mr-2 animate-spin" />
              ) : (
                <>
                  {icon ? (
                    <Icon
                      className={cn({ "mr-3": children })}
                      size={iconSize}
                    />
                  ) : null}
                  {children}
                </>
              )}
            </Comp>
          </Tooltip.Trigger>
          {tooltip ? (
            <Tooltip.Content>
              {typeof tooltip === "string" ? <p>{tooltip}</p> : tooltip}
            </Tooltip.Content>
          ) : null}
        </Tooltip.Root>
      </Tooltip.Provider>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
