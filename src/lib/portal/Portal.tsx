import { Portal as GorhomPortal } from "@gorhom/portal"
import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const Portal: FC<Props> = ({ children }) => {
  return <GorhomPortal>{children}</GorhomPortal>
}
