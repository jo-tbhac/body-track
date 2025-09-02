export const PERIOD = {
  "7days": "7days",
  "1month": "1month",
  "3months": "3months",
  "6months": "6months",
} as const

export const TIME_OF_DAY = {
  morning: "morning",
  evening: "evening",
} as const

export const SEX = {
  male: "male",
  female: "Female",
} as const

export const ALLOWED_CHAR_PATTERN_FOR_HEIGHT_INPUT = /^(?:\d+\.?\d*|\.\d+)$/
export const ALLOWED_CHAR_PATTERN_FOR_WEIGHT_INPUT = /^(?:\d+\.?\d*|\.\d+)$/
