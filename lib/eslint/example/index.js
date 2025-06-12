"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((name) => `https://example.com/rule/${name}`);
exports.rule = createRule({
    create(context) {
        return {
            FunctionDeclaration(node) {
                if (node.id != null) {
                    if (/^[a-z]/.test(node.id.name)) {
                        context.report({
                            messageId: "uppercase",
                            node: node.id,
                        });
                    }
                }
            },
        };
    },
    name: "uppercase-first-declarations",
    meta: {
        docs: {
            description: "Function declaration names should start with an upper-case letter.",
        },
        messages: {
            uppercase: "Start this name with an upper-case letter.",
        },
        type: "suggestion",
        schema: [],
    },
    defaultOptions: [],
});
