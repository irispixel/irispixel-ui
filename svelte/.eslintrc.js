// .eslintrc.js
module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true
  },
  globals: {
    Promise: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: ["./tsconfig.json"],
    extraFileExtensions: ['.svelte']
  },
  plugins: [
    "jest",
    "jsdoc",
    "svelte3", 
    "@typescript-eslint"
  ],
  extends: [
    "eslint:recommended",
    "plugin:jsdoc/recommended",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  settings: {
    'svelte3/typescript': require('typescript')
  },
  ignorePatterns: ['node_modules'],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "no-console": 2
  }

}
