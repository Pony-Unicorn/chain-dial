"use client"

import type { ReactNode } from "react"
import { env } from "@/env.mjs"
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { WagmiProvider } from "wagmi"
import * as chains from "wagmi/chains"

import { siteConfig } from "@/config/site"

const config = getDefaultConfig({
  appName: siteConfig.name,
  projectId: env.NEXT_PUBLIC_PROJECT_ID,
  chains: [chains.mainnet, chains.sepolia, chains.acala, chains.arbitrum],
  ssr: true,
})

const queryClient = new QueryClient()

export function RainbowKit({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider locale="en-US">{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
