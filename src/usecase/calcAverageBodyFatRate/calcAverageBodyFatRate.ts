import { Decimal } from "decimal.js"

import { WeightRecord } from "@/types"

/**
 * 体脂肪率の平均値を計算する
 * @param WeightRecord[]
 * @returns 体脂肪率の平均値（小数点以下第二位を四捨五入） 対象の体脂肪率が全てnullの場合はnullを返す
 */
export const calcAverageBodyFatRate = (weightRecords: WeightRecord[]) => {
  const bodyFatRates: Decimal[] = []
  for (const { bodyFatRate } of weightRecords) {
    if (bodyFatRate != null) {
      bodyFatRates.push(new Decimal(bodyFatRate))
    }
  }

  if (bodyFatRates.length === 0) {
    return null
  }

  const total = Decimal.sum(...bodyFatRates)
  return total
    .dividedBy(bodyFatRates.length)
    .toDecimalPlaces(1, Decimal.ROUND_HALF_UP)
    .toNumber()
}
