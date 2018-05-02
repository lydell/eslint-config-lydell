"use strict";

const baseRules = require(".");

module.exports = {
  plugins: ["flowtype", "import", "prettier", "react"],
  env: {
    es6: true,
    node: true,
  },
  rules: baseRules({ flow: true, import: true, react: true }),
};
