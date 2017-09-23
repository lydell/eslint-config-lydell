"use strict";

const pkg = require("./package.json");

module.exports = {
  extends: pkg.files
    .filter(name => name.indexOf("/") === -1)
    .map(ruleFileName => `./${ruleFileName}`),
  plugins: ["prettier"].concat(
    pkg.files
      .filter(name => name.indexOf("/") === -1 && name !== "index.js")
      .map(ruleFileName => ruleFileName.replace(/\.js$/, ""))
  ),
  env: {
    es6: true,
    node: true,
  },
};
