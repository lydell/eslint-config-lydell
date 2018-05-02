"use strict";

const baseRules = require(".");

module.exports = {
  plugins: ["import", "prettier"],
  env: {
    es6: true,
    node: true,
  },
  rules: Object.assign({}, baseRules({ import: true }), {
    "prettier/prettier": "error",
  }),
};
