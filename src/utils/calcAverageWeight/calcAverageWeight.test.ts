import { TIME_OF_DAY } from "@/constants"
import { WeightRecord } from "@/types"

import { calcAverageWeight } from "./calcAverageWeight"

const buildWeightRecords = (weightList: (number | null)[]): WeightRecord[] => {
  return weightList.map((weight, index) => ({
    id: index + 1,
    weight,
    bodyFatRate: null,
    measuredDate: new Date(),
    timeOfDay: TIME_OF_DAY.evening,
  }))
}

describe("calcAverageWeight", () => {
  test("should calculate average weight for single record", () => {
    const weightList = [65.5]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageWeight(records)
    expect(result).toBe(65.5)
  })

  test("should calculate average weight for multiple records", () => {
    const weightList = [65.0, 66.0, 64.0]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageWeight(records)
    expect(result).toBe(65)
  })

  test("should calculate average with decimal precision", () => {
    const weightList = [65.5, 66.3, 64.7]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageWeight(records)
    expect(result).toBeCloseTo(65.5, 1)
  })

  test("should skip null weights in calculation", () => {
    const weightList = [60.0, null, null, 70.0, 80.0]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageWeight(records)
    expect(result).toBe(70)
  })

  test("should return null when all weights are null", () => {
    const weightList = [null, null, null]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageWeight(records)
    expect(result).toBeNull()
  })
})
