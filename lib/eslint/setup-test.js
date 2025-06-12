import { RuleTester } from "@typescript-eslint/rule-tester"
import * as test from "node:test"

RuleTester.afterAll = test.after
RuleTester.describe = test.describe
RuleTester.it = test.it
RuleTester.itOnly = test.it.only
