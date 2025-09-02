import { calcBmi } from "./calcBmi"

describe("calcBmi", () => {
  test("should round to 1 decimal place correctly", () => {
    const result = calcBmi({ height: 175, weight: 70 })
    expect(result).toBe(22.9)
  })

  test("should calculate correctly with decimal height and weight", () => {
    const result = calcBmi({ height: 172.5, weight: 68.5 })
    expect(result).toBe(23.0)
  })
})
