import { COLORS } from "./colors"
import { FONT_FAMILY, FONT_WEIGHT } from "./font"
import { SPACING } from "./spacing"

export const defaultTheme = {
  colors: COLORS,
  fontFamily: FONT_FAMILY,
  fontWeight: FONT_WEIGHT,
  spacing: SPACING,
} as const
