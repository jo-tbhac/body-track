import { FC, ReactNode, useState } from "react"

import { defaultTheme, Theme, ThemeContext } from "./theme"

interface Props {
  children: ReactNode
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme] = useState<Theme>(defaultTheme)

  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
