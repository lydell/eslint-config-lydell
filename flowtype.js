"use strict";

module.exports = {
  rules: {
    "flowtype/boolean-style": ["error", "boolean"],
    "flowtype/define-flow-type": "error",
    "flowtype/no-dupe-keys": "error",
    "flowtype/no-primitive-constructor-types": "error",
    "flowtype/no-types-missing-file-annotation": "error",
    "flowtype/no-unused-expressions": "error",
    "flowtype/require-parameter-type": [
      "error",
      { excludeArrowFunctions: true },
    ],
    "flowtype/require-return-type": [
      "error",
      "always",
      {
        excludeArrowFunctions: true,
        // Exclude React stuff.
        excludeMatching: ["^[A-Z]", "[Rr]ender"],
      },
    ],
    "flowtype/require-valid-file-annotation": [
      "error",
      "always",
      { annotationStyle: "line" },
    ],
    "flowtype/use-flow-type": "error",
    "flowtype/valid-syntax": "error",
  },
};
