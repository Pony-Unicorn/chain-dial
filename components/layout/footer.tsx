import { HTMLAttributes } from "react"
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { LinkComponent } from "../shared/link-component"

export function Footer({ className, ...props }: HTMLAttributes<HTMLElement>) {
  const classes = cn(
    className,
    "flex flex-col items-center justify-center px-4 py-6"
  )

  return (
    <footer className={classes} {...props}>
      <h3>{siteConfig.title}</h3>
      <div className="mt-2 flex items-center space-x-2">
        <LinkComponent href={`${siteConfig.links.github}`}>
          <FaGithub />
        </LinkComponent>
        {/* <LinkComponent href={`${siteConfig.links.twitter}`}>
          <FaTwitter />
        </LinkComponent>
        <LinkComponent href={`${siteConfig.links.discord}`}>
          <FaDiscord />
        </LinkComponent> */}
      </div>
    </footer>
  )
}
