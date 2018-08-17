"use strict";

const baseRules = require("..");

test("browserEnv", () => {
  const env = baseRules.browserEnv();
  expect(typeof env).toBe("object");
  expect(Object.keys(env).length).toBeGreaterThan(400);
  expect(env.window).toBe(false);
  expect(env.name).toBeUndefined();
});
