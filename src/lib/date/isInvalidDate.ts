export const isInvalidDate = (date: Date | string) => {
  if (date instanceof Date) {
    return Number.isNaN(date.getTime())
  }
  return Number.isNaN(new Date(date).getTime())
}
