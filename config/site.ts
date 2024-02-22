import { env } from "@/env.mjs"

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Site
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
interface SiteConfig {
  name: string
  title: string
  emoji: string
  description: string
  localeDefault: string
  links: {
    docs: string
    discord: string
    twitter: string
    github: string
  }
}

export const SITE_CANONICAL = env.NEXT_PUBLIC_SITE_URL

export const siteConfig: SiteConfig = {
  name: "chain-dial",
  title: "chain-dial",
  emoji: "⬡",
  description: "智能合约 ABI 调用工具",
  localeDefault: "en",
  links: {
    docs: "",
    discord: "",
    twitter: "",
    github: "https://github.com/Pony-Unicorn/chain-dial",
  },
}
