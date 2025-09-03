import { Decimal } from "decimal.js"

import { WeightRecord } from "@/types"

/**
 * 体重の平均値を計算する
 * @param WeightRecord[]
 * @returns 体重の平均値（小数点以下第二位を四捨五入） 対象の体重が全てnullの場合はnullを返す
 */
export const calcAverageWeight = (weightRecords: WeightRecord[]) => {
  const weights: Decimal[] = []
  for (const { weight } of weightRecords) {
    if (weight != null) {
      weights.push(new Decimal(weight))
    }
  }

  if (weights.length === 0) {
    return null
  }

  const total = Decimal.sum(...weights)
  return total
    .dividedBy(weights.length)
    .toDecimalPlaces(1, Decimal.ROUND_HALF_UP)
    .toNumber()
}
