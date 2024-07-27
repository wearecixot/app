'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";

interface ReactQueryProviderProps {
    children: React.ReactNode
}
const ReactQueryProvider: FC<ReactQueryProviderProps> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default ReactQueryProvider;