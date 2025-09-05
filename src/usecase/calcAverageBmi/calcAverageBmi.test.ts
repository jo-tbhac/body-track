import { TIME_OF_DAY } from "@/constants"
import { WeightRecord } from "@/types"

import { calcAverageBmi } from "./calcAverageBmi"

const buildWeightRecords = (weightList: (number | null)[]): WeightRecord[] => {
  return weightList.map((weight, index) => ({
    id: index + 1,
    weight,
    bodyFatRate: null,
    measuredDate: new Date(),
    timeOfDay: TIME_OF_DAY.evening,
  }))
}

describe("calcAverageBmi", () => {
  test("should calculate average bmi for single record", () => {
    const height = 180
    const weightList = [65.5]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageBmi(height, records)
    expect(result).toBe(20.2)
  })

  test("should calculate average bmi for multiple records", () => {
    const height = 180
    const weightList = [65.0, 66.0, 64.0]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageBmi(height, records)
    expect(result).toBe(20.1)
  })

  test("should calculate average with decimal precision", () => {
    const height = 180
    const weightList = [65.5, 66.3, 64.7]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageBmi(height, records)
    expect(result).toBeCloseTo(20.2, 1)
  })

  test("should skip null weights in calculation", () => {
    const height = 180
    const weightList = [60.0, null, null, 70.0, 80.0]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageBmi(height, records)
    expect(result).toBe(21.6)
  })

  test("should return null when all weights are null", () => {
    const height = 180
    const weightList = [null, null, null]
    const records: WeightRecord[] = buildWeightRecords(weightList)
    const result = calcAverageBmi(height, records)
    expect(result).toBeNull()
  })
})
