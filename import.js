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
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unresolved": "error",
  },
};
