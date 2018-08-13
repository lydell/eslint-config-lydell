"use strict";

const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

const rimraf = require("rimraf");

const eslintTestConfig = require("../.eslintrc.all");

const TEST_CONFIG_DIR = "test-config";

createTestConfigDir();

function createTestConfigDir() {
  // Clear the test config dir.
  rimraf.sync(TEST_CONFIG_DIR);
  fs.mkdirSync(TEST_CONFIG_DIR);

  // Change all rules to "warn", so that ESLint warns about unknown rules.
  const newRules = Object.keys(eslintTestConfig.rules).reduce(
    (obj, ruleName) => {
      obj[ruleName] = "warn";
      return obj;
    },
    {}
  );

  const newConfig = Object.assign({}, eslintTestConfig, { rules: newRules });

  // Write the modified test ESLint config into the test config dir.
  fs.writeFileSync(
    path.join(TEST_CONFIG_DIR, ".eslintrc.js"),
    `module.exports = ${JSON.stringify(newConfig, null, 2)};`
  );
}

test("there are no unknown rules", () => {
  const result = childProcess.spawnSync(
    "npm",
    ["run", "test:lint-rules", "--silent"],
    { encoding: "utf8" }
  );
  const output = JSON.parse(result.stdout);

  const { messages } = output[0];

  expect(messages.length).toBeGreaterThan(0);

  messages.forEach(message => {
    expect(message.message).not.toMatch(/rule\s+'[^']+'.*not found/);
  });
});
