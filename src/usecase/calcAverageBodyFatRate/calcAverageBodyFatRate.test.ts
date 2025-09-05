import { TIME_OF_DAY } from "@/constants"
import { WeightRecord } from "@/types"

import { calcAverageBodyFatRate } from "./calcAverageBodyFatRate"

const buildWeightRecords = (
  bodyFatRateList: (number | null)[],
): WeightRecord[] => {
  return bodyFatRateList.map((bodyFatRate, index) => ({
    id: index + 1,
    weight: null,
    bodyFatRate,
    measuredDate: new Date(),
    timeOfDay: TIME_OF_DAY.evening,
  }))
}

describe("calcAverageBodyFatRate", () => {
  test("should calculate average body fat rate for single record", () => {
    const bodyFatRateList = [16.0]
    const records: WeightRecord[] = buildWeightRecords(bodyFatRateList)
    const result = calcAverageBodyFatRate(records)
    expect(result).toBe(16.0)
  })

  test("should calculate average body fat rate for multiple records", () => {
    const bodyFatRateList = [16.0, 15.0, 14.0]
    const records: WeightRecord[] = buildWeightRecords(bodyFatRateList)
    const result = calcAverageBodyFatRate(records)
    expect(result).toBe(15)
  })

  test("should calculate average with decimal precision", () => {
    const bodyFatRateList = [15.5, 16.3, 14.7]
    const records: WeightRecord[] = buildWeightRecords(bodyFatRateList)
    const result = calcAverageBodyFatRate(records)
    expect(result).toBeCloseTo(15.5, 1)
  })

  test("should skip null body fat rates in calculation", () => {
    const bodyFatRateList = [16.0, null, null, 15.0, 14.0]
    const records: WeightRecord[] = buildWeightRecords(bodyFatRateList)
    const result = calcAverageBodyFatRate(records)
    expect(result).toBe(15)
  })

  test("should return null when all body fat rates are null", () => {
    const bodyFatRateList = [null, null, null]
    const records: WeightRecord[] = buildWeightRecords(bodyFatRateList)
    const result = calcAverageBodyFatRate(records)
    expect(result).toBeNull()
  })
})
