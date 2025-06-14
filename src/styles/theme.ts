import { createContext, useContext, useMemo } from "react"
import { StyleSheet } from "react-native"

import { BORDER_RADIUS, BORDER_WIDTH } from "./border"
import { COLORS } from "./colors"
import { FONT_FAMILY, FONT_SIZE } from "./font"
import { SPACING } from "./spacing"

export const defaultTheme = {
  borderRadius: BORDER_RADIUS,
  borderWidth: BORDER_WIDTH,
  colors: COLORS,
  fontFamily: FONT_FAMILY,
  fontSize: FONT_SIZE,
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
