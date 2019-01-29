module.exports = {
  env: {
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all"
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": ["error", "single"],
    "object-curly-spacing": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "computed-property-spacing": ["error", "never"],
    "operator-linebreak": ["error", "after"],
    "comma-dangle": [
      "error", {
        "arrays": "never",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "only-multiline",
        "functions": "never"
      }
    ],
    "semi": [
      "error",
      "never"
    ],
  },
  "globals": {
    "console": true,
    "global": true,
    "require": true,
    "module": true,
    "Buffer": true,
    "__DEV__": true,
    "alert": true,
    "setTimeout": true,
    "describe": true,
    "expect": true,
    "it": true,
  }
}
