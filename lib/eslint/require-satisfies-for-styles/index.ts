import { ESLintUtils } from "@typescript-eslint/utils"

const createRule = ESLintUtils.RuleCreator(
  (name) => `https://example.com/rule/${name}`,
)

export const rule = createRule({
  create(context) {
    return {}
  },
  name: "require-satisfies-for-styles",
  meta: {
    docs: {
      description:
        "Require satisfies operator for style objects in createStyleSheet",
    },
    messages: {
      missingSatisfies:
        'Style object "{{key}}" should use satisfies with {{expectedTypes}}',
      invalidSatisfiesType:
        'Style object "{{key}}" uses {{actualType}} but should use one of: {{expectedTypes}}',
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],
})
