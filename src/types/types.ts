import { PERIOD } from "@/constants"

export type Period = (typeof PERIOD)[keyof typeof PERIOD]
