import { RuleTester } from "@typescript-eslint/rule-tester"
import { rule } from "./index.js"

const ruleTester = new RuleTester()

ruleTester.run("require-satisfies-for-styles", rule, {
  valid: [],
  invalid: [],
})
