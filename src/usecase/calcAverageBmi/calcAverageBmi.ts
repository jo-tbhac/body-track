import { Decimal } from "decimal.js"

import { WeightRecord } from "@/types"
import { calcBmi } from "@/usecase/calcBmi"

/**
 * BMIの平均値を計算する
 * @param height 身長（cm）
 * @param WeightRecord[]
 * @returns BMIの平均値（小数点以下第二位を四捨五入） 対象の体重が全てnullの場合はnullを返す
 */
export const calcAverageBmi = (
  height: number,
  weightRecords: WeightRecord[],
) => {
  const bmiList: Decimal[] = []
  for (const { weight } of weightRecords) {
    if (weight != null) {
      const bmi = calcBmi({ height, weight })
      bmiList.push(new Decimal(bmi))
    }
  }

  if (bmiList.length === 0) {
    return null
  }

  const total = Decimal.sum(...bmiList)
  return total
    .dividedBy(bmiList.length)
    .toDecimalPlaces(1, Decimal.ROUND_HALF_UP)
    .toNumber()
}
