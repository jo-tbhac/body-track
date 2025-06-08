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
} from "@expo-google-fonts/noto-sans-jp"

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

export const fontMap: Record<FontFamily, number> = {
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
