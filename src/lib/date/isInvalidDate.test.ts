import { isInvalidDate } from "./isInvalidDate"

describe("isInvalidDate", () => {
  test("2020-10-01 is valid", () => {
    const result = isInvalidDate("2020-10-01")
    expect(result).toBeFalsy()
  })

  test("2020-0-01 is invalid", () => {
    const result = isInvalidDate("2020-0-01")
    expect(result).toBeTruthy()
  })

  test("2020-05-0 is invalid", () => {
    const result = isInvalidDate("2020-05-0")
    expect(result).toBeTruthy()
  })

  test("empty string is invalid", () => {
    const result = isInvalidDate("")
    expect(result).toBeTruthy()
  })
})
