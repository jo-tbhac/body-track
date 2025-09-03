import { Decimal } from "decimal.js"

/**
 * BMIを計算する
 * @param height 身長（cm）
 * @param weight 体重（kg）
 * @returns BMI値（小数点以下第二位を四捨五入）
 */
export const calcBmi = ({
  height,
  weight,
}: {
  height: number
  weight: number
}) => {
  const heightInMeters = new Decimal(height).dividedBy(100)
  const bmi = new Decimal(weight).dividedBy(heightInMeters.pow(2))

  return bmi.toDecimalPlaces(1, Decimal.ROUND_HALF_UP).toNumber()
}
