import { PERIOD, SEX, TIME_OF_DAY } from "@/constants"

export type Period = (typeof PERIOD)[keyof typeof PERIOD]

export type TimeOfDay = (typeof TIME_OF_DAY)[keyof typeof TIME_OF_DAY]

export type Sex = (typeof SEX)[keyof typeof SEX]

export interface WeightRecord {
  id: number
  weight: number | null
  bodyFatRate: number | null
  measuredDate: Date
  timeOfDay: TimeOfDay
}
