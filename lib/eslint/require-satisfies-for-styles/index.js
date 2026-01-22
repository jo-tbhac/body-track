"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://example.com/rule/${name}`);
exports.rule = createRule({
    create(context) {
        return {};
    },
    name: "require-satisfies-for-styles",
    meta: {
        docs: {
            description: "Require satisfies operator for style objects in createStyleSheet",
        },
        messages: {
            missingSatisfies: 'Style object "{{key}}" should use satisfies with {{expectedTypes}}',
            invalidSatisfiesType: 'Style object "{{key}}" uses {{actualType}} but should use one of: {{expectedTypes}}',
        },
        type: "suggestion",
        schema: [],
    },
    defaultOptions: [],
});
