// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config")
const expoConfig = require("eslint-config-expo/flat")
const eslintConfigPrettier = require("eslint-config-prettier/flat")
// const eslintPluginLocalRules = require("./lib/eslint/eslint-plugin-local-rules")

module.exports = defineConfig([
  expoConfig,
  eslintConfigPrettier,
  {
    ignores: ["dist/*", "lib/*"],
    // plugins: { localRules: eslintPluginLocalRules },
    // rules: {
    //   "localRules/example": "error",
    // },
  },
])
