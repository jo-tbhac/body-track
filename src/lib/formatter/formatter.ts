export const numberFormat = (
  value: number,
  options?: Intl.NumberFormatOptions,
) => {
  const defaultOptions: Intl.NumberFormatOptions = {
    maximumFractionDigits: 1,
    minimumFractionDigits: 1,
  }

  return Intl.NumberFormat("ja-jp", { ...defaultOptions, ...options }).format(
    value,
  )
}
