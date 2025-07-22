import { PERIOD, TIME_OF_DAY } from "@/constants"

export type Period = (typeof PERIOD)[keyof typeof PERIOD]

export type TimeOfDay = (typeof TIME_OF_DAY)[keyof typeof TIME_OF_DAY]
