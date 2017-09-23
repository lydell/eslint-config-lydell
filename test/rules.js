"use strict";

const test = require("ava");
const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");
const rimraf = require("rimraf");
const pkg = require("../package.json");
const eslintTestConfig = require("../.eslintrc.test");

const TEST_CONFIG_DIR = "test-config";

const ruleFiles = fs
  .readdirSync(".")
  .filter(name => !name.startsWith(".") && name.endsWith(".js"));

createTestConfigDir();

function createTestConfigDir() {
  // Clear the test config dir.
  rimraf.sync(TEST_CONFIG_DIR);
  fs.mkdirSync(TEST_CONFIG_DIR);

  // Copy all rule files into the test config dir.
  ruleFiles.forEach(ruleFileName => {
    const config = require(`../${ruleFileName}`);

    // Change all rules to "warn", so that ESLint warns about unknown rules.
    const newRules = Object.keys(config.rules).reduce((obj, ruleName) => {
      obj[ruleName] = "warn";
      return obj;
    }, {});

    const newConfig = Object.assign({}, config, { rules: newRules });

    fs.writeFileSync(
      path.join(TEST_CONFIG_DIR, ruleFileName),
      `module.exports = ${JSON.stringify(newConfig, null, 2)};`
    );
  });

  // Copy the test ESLint config into the test config dir.
  fs.writeFileSync(
    path.join(TEST_CONFIG_DIR, ".eslintrc.js"),
    `module.exports = ${JSON.stringify(eslintTestConfig, null, 2)};`
  );
}

test("All rule files are listed in package.json", t => {
  ruleFiles.forEach(ruleFileName => {
    t.true(pkg.files.indexOf(ruleFileName) >= 0);
  });
});

test("All rule files are included in the test ESLint config", t => {
  ruleFiles.forEach(ruleFileName => {
    const name = ruleFileName.replace(/\.js$/, "");
    t.true(eslintTestConfig.extends.indexOf(`./${ruleFileName}`) >= 0);
    if (ruleFileName !== "index.js") {
      t.true(eslintTestConfig.plugins.indexOf(name) >= 0);
    }
  });
});

test("All plugin rule files are mentioned in the README", t => {
  const readme = fs.readFileSync("README.md", "utf8");
  ruleFiles
    .filter(ruleFileName => ruleFileName !== "index.js")
    .forEach(ruleFileName => {
      const name = ruleFileName.replace(/\.js$/, "");
      t.true(readme.indexOf(`eslint-plugin-${name}`) >= 0);
      t.true(readme.indexOf(`"${name}"`) >= 0);
      t.true(readme.indexOf(`"lydell/${name}"`) >= 0);
    });
});

test("There are no unknown rules", t => {
  const result = childProcess.spawnSync(
    "npm",
    ["run", "test:lint-rules", "--silent"],
    { encoding: "utf8" }
  );
  const output = JSON.parse(result.stdout);

  const messages = output[0].messages;

  if (messages.length === 0) {
    t.pass();
  }

  messages.forEach(message => {
    t.notRegex(message.message, /rule\s+'[^']+'.*not found/);
  });
});
