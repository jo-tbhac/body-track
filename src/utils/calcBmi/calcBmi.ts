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
  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)

  return Math.round(bmi * 10) / 10
}
