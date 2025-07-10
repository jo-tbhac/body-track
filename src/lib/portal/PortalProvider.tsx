import { PortalProvider as GorhomPortalProvider } from "@gorhom/portal"
import { FC, ReactNode } from "react"

interface Props {
  children: ReactNode
}

export const PortalProvider: FC<Props> = ({ children }) => {
  return <GorhomPortalProvider>{children}</GorhomPortalProvider>
}
