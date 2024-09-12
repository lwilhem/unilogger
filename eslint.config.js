// @ts-check
import antfu from "@antfu/eslint-config"

export default antfu({
  type: "lib",
  stylistic: {
    quotes: "double",
    semi: false,
  },
  rules: {
    "no-console": "warn",
  },
})
