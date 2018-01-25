"use strict";

module.exports = {
  extends: ["./index.js", "./import.js"],
  plugins: ["import", "prettier"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "prefer-destructuring": "off",
    "prettier/prettier": ["error", { trailingComma: "es5" }],
  },
};
