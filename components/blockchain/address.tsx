import { HTMLAttributes } from "react"
import { Address as AddressType } from "viem"
import { useAccount } from "wagmi"

import { truncateEthAddress } from "@/lib/utils"

import { LinkComponent } from "../shared/link-component"

interface AddressProps extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  address: AddressType
  truncate?: boolean
  isLink?: boolean
}

export const Address = ({
  address,
  className,
  truncate,
  isLink,
  ...props
}: AddressProps) => {
  const { chain } = useAccount()
  const blockExplorerUrl = chain?.blockExplorers?.default.url
  const formattedAddress = truncate ? truncateEthAddress(address) : address

  if (isLink && blockExplorerUrl) {
    return (
      <LinkComponent
        className={className}
        href={`${blockExplorerUrl}/address/${address}`}
        {...props}
      >
        {formattedAddress}
      </LinkComponent>
    )
  }

  return (
    <span className={className} {...props}>
      {formattedAddress}
    </span>
  )
}
