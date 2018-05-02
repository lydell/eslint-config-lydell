"use strict";

module.exports = {
  rules: {
    "import/default": "error",
    "import/export": "error",
    "import/extensions": ["error", { js: "never", json: "always" }],
    "import/first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "error",
    "import/no-cycle": "error",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-self-import": "error",
    "import/no-unresolved": "error",
    "import/no-useless-path-segments": "error",
    "import/order": ["error", { "newlines-between": "always" }],
  },
};
