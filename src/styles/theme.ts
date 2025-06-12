import { createContext, useContext, useMemo } from "react"
import { StyleSheet } from "react-native"

import { COLORS } from "./colors"
import { FONT_FAMILY, FONT_WEIGHT } from "./font"
import { SPACING } from "./spacing"

export const defaultTheme = {
  colors: COLORS,
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT,
  spacing: SPACING,
} as const

export type Theme = typeof defaultTheme

export const ThemeContext = createContext<Theme>(defaultTheme)
export const useTheme = (): Theme => useContext(ThemeContext)

// シンプルに以下のような型定義でもいいかもしれない
// <T extends Record<string, ViewStyle | TextStyle | ImageStyle>
export const createStyleSheet = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>,
>(
  factory: (theme: Theme) => T,
) => {
  const useStyles = () => {
    const theme = useTheme()
    return useMemo(() => StyleSheet.create(factory(theme)), [theme])
  }

  return useStyles
}
