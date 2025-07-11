import { add } from "date-fns"

interface Duration {
  years?: number
  months?: number
  weeks?: number
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}

export const addDuration = (
  date: Date | string | number,
  duration: Duration,
) => {
  return add(date, duration)
}
