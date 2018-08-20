"use strict";

const baseRules = require(".");

module.exports = {
  plugins: ["flowtype", "import", "jest", "prettier", "react"],
  env: {
    es6: true,
    node: true,
  },
  rules: baseRules({ flow: true, import: true, jest: true, react: true }),
  settings: {
    react: {
      version: "16",
    },
  },
};
