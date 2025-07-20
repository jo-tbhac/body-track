import {
  NotoSansJP_100Thin,
  NotoSansJP_200ExtraLight,
  NotoSansJP_300Light,
  NotoSansJP_400Regular,
  NotoSansJP_500Medium,
  NotoSansJP_600SemiBold,
  NotoSansJP_700Bold,
  NotoSansJP_800ExtraBold,
  NotoSansJP_900Black,
  useFonts as useNotoSansFonts,
} from "@expo-google-fonts/noto-sans-jp"
import { useEffect } from "react"

export const FONT_FAMILY = {
  NotoSansJP_100: "NotoSansJP_100",
  NotoSansJP_200: "NotoSansJP_200",
  NotoSansJP_300: "NotoSansJP_300",
  NotoSansJP_400: "NotoSansJP_400",
  NotoSansJP_500: "NotoSansJP_500",
  NotoSansJP_600: "NotoSansJP_600",
  NotoSansJP_700: "NotoSansJP_700",
  NotoSansJP_800: "NotoSansJP_800",
  NotoSansJP_900: "NotoSansJP_900",
} as const

export type FontFamily = (typeof FONT_FAMILY)[keyof typeof FONT_FAMILY]

const fontMap: Record<FontFamily, number> = {
  NotoSansJP_100: NotoSansJP_100Thin,
  NotoSansJP_200: NotoSansJP_200ExtraLight,
  NotoSansJP_300: NotoSansJP_300Light,
  NotoSansJP_400: NotoSansJP_400Regular,
  NotoSansJP_500: NotoSansJP_500Medium,
  NotoSansJP_600: NotoSansJP_600SemiBold,
  NotoSansJP_700: NotoSansJP_700Bold,
  NotoSansJP_800: NotoSansJP_800ExtraBold,
  NotoSansJP_900: NotoSansJP_900Black,
}

export const FONT_SIZE = {
  xs: 10,
  sm: 12,
  base: 14,
  lg: 16,
  xl: 18,
  "2xl": 20,
  "3xl": 24,
  "4xl": 30,
  "5xl": 36,
  "6xl": 48,
} as const

export type FontSize = (typeof FONT_SIZE)[keyof typeof FONT_SIZE]

type UseFontsResult = boolean

export const useFonts = (): UseFontsResult => {
  const [loaded, error] = useNotoSansFonts(fontMap)

  useEffect(() => {
    if (error) {
      console.error("[Error] Failed to load fonts: ", error)
    }
  }, [error])

  useEffect(() => {
    if (loaded) {
      console.log("[INFO] Fonts are loaded.")
      return
    }
    console.log("[INFO] Loading fonts.")
  }, [loaded])

  return loaded
}
