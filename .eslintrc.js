"use strict";

module.exports = {
  extends: ["./index.js"],
  plugins: ["prettier"],
  env: {
    es6: true,
    node: true,
  },
  rules: {
    "prefer-destructuring": "off",
    "prettier/prettier": ["error", { trailingComma: "es5" }],
  },
};
