import { RuleTester } from "@typescript-eslint/rule-tester"
import { rule } from "./index.js"

const ruleTester = new RuleTester()

ruleTester.run("uppercase-first-declarations", rule, {
  valid: [
    {
      code: `
        function Test() {
          return "valid function."
        }
      `,
    },
  ],
  invalid: [
    {
      code: `
        function test() {
          return "invalid function."
        }
      `,
      errors: [
        {
          messageId: "uppercase",
          suggestions: null,
        },
      ],
    },
  ],
})

console.log("All tests passed!")
