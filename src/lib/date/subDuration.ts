import { sub } from "date-fns"

import { Duration } from "./types"

export const subDuration = (
  date: Date | string | number,
  duration: Duration,
) => {
  return sub(date, duration)
}
