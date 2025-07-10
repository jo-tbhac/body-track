import { lightFormat } from "date-fns"

export const formatDate = (date: Date | string | number, format: string) => {
  return lightFormat(date, format)
}
