"use strict";

const globals = require("globals");

function baseRules({
  builtin = true,
  flow = false,
  import: import_ = false,
  jest = false,
  react = false,
} = {}) {
  return Object.assign(
    builtin
      ? {
          "array-callback-return": "error",
          "consistent-return": "error",
          "constructor-super": "error",
          curly: "error",
          "default-case": "error",
          "dot-notation": "error",
          "for-direction": "error",
          "func-name-matching": "error",
          "init-declarations": "error",
          "lines-between-class-members": [
            "error",
            "always",
            { exceptAfterSingleLine: true },
          ],
          "new-cap": ["error", { newIsCap: true, capIsNew: false }],
          "no-alert": "error",
          "no-array-constructor": "error",
          "no-bitwise": "error",
          "no-buffer-constructor": "error",
          "no-caller": "error",
          "no-case-declarations": "error",
          "no-class-assign": "error",
          "no-compare-neg-zero": "error",
          "no-cond-assign": "error",
          "no-const-assign": "error",
          "no-constant-condition": "error",
          "no-control-regex": "error",
          "no-debugger": "error",
          "no-delete-var": "error",
          "no-div-regex": "error",
          "no-dupe-args": "error",
          "no-dupe-class-members": "error",
          "no-dupe-keys": "error",
          "no-duplicate-case": "error",
          "no-else-return": "error",
          "no-empty": "error",
          "no-empty-character-class": "error",
          "no-empty-function": "error",
          "no-empty-pattern": "error",
          "no-eval": "error",
          "no-ex-assign": "error",
          "no-extend-native": "error",
          "no-extra-bind": "error",
          "no-extra-boolean-cast": "error",
          "no-extra-label": "error",
          "no-fallthrough": "error",
          "no-func-assign": "error",
          "no-global-assign": "error",
          "no-implicit-coercion": "error",
          "no-implicit-globals": "error",
          "no-implied-eval": "error",
          "no-invalid-regexp": "error",
          "no-invalid-this": "error",
          "no-irregular-whitespace": "error",
          "no-iterator": "error",
          "no-label-var": "error",
          "no-labels": "error",
          "no-lone-blocks": "error",
          "no-lonely-if": "error",
          "no-loop-func": "error",
          "no-mixed-requires": "error",
          "no-multi-assign": "error",
          "no-multi-str": "error",
          "no-new": "error",
          "no-new-func": "error",
          "no-new-object": "error",
          "no-new-require": "error",
          "no-new-symbol": "error",
          "no-new-wrappers": "error",
          "no-obj-calls": "error",
          "no-octal": "error",
          "no-octal-escape": "error",
          "no-param-reassign": "error",
          "no-path-concat": "error",
          "no-proto": "error",
          "no-prototype-builtins": "error",
          "no-redeclare": "error",
          "no-regex-spaces": "error",
          // Prettier-friendly subsitute for `"no-sequences": "error"`:
          // https://github.com/prettier/eslint-config-prettier#no-sequences
          "no-restricted-syntax": [
            "error",
            {
              selector: "SequenceExpression",
              message:
                "The comma operator is confusing and a common mistake. Don’t use it!",
            },
          ],
          "no-return-assign": "error",
          "no-return-await": "error",
          "no-script-url": "error",
          "no-self-assign": "error",
          "no-self-compare": "error",
          "no-shadow": "error",
          "no-shadow-restricted-names": "error",
          "no-sparse-arrays": "error",
          "no-template-curly-in-string": "error",
          "no-this-before-super": "error",
          "no-throw-literal": "error",
          "no-undef": ["error", { typeof: true }],
          "no-unmodified-loop-condition": "error",
          "no-unneeded-ternary": "error",
          "no-unreachable": "error",
          "no-unsafe-finally": "error",
          "no-unsafe-negation": "error",
          "no-unused-expressions": "error",
          "no-unused-labels": "error",
          "no-unused-vars": [
            "error",
            { ignoreRestSiblings: true, argsIgnorePattern: "^_" },
          ],
          "no-use-before-define": flow
            ? "off"
            : ["error", { functions: false }],
          "no-useless-call": "error",
          "no-useless-computed-key": "error",
          "no-useless-concat": "error",
          "no-useless-constructor": "error",
          "no-useless-escape": "error",
          "no-useless-rename": "error",
          "no-useless-return": "error",
          "no-var": "error",
          "no-void": "error",
          "no-with": "error",
          "object-shorthand": "error",
          "one-var": ["error", "never"],
          "operator-assignment": "error",
          "prefer-const": "error",
          "prefer-destructuring": ["error", { array: false, object: true }],
          "prefer-numeric-literals": "error",
          "prefer-promise-reject-errors": "error",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
          "prefer-template": "error",
          "require-yield": "error",
          "spaced-comment": [
            "error",
            "always",
            {
              block: {
                markers: [":", "::"], // Support Flow type comments.
                balanced: true,
              },
            },
          ],
          "symbol-description": "error",
          "use-isnan": "error",
          "valid-typeof": "error",
          eqeqeq: ["error", "always", { null: "ignore" }],
          radix: "error",
          strict: "error",
          yoda: "error",
        }
      : {},

    flow
      ? {
          "flowtype/array-style-complex-type": "error",
          "flowtype/array-style-simple-type": "error",
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
        }
      : {},

    import_
      ? {
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
          "import/no-unresolved": ["error", { commonjs: true }],
          "import/no-useless-path-segments": "error",
        }
      : {},

    jest
      ? {
          "jest/no-disabled-tests": "error",
          "jest/no-focused-tests": "error",
          "jest/no-identical-title": "error",
          "jest/no-jasmine-globals": "error",
          "jest/no-jest-import": "error",
          "jest/no-test-prefixes": "error",
          "jest/no-truthy-falsy": "error",
          "jest/prefer-to-be-null": "error",
          "jest/prefer-to-be-undefined": "error",
          "jest/prefer-to-have-length": "error",
          "jest/prefer-todo": "error",
          "jest/valid-describe": "error",
          "jest/valid-expect": "error",
          "jest/valid-expect-in-promise": "error",
        }
      : {},

    react
      ? {
          "react-hooks/exhaustive-deps": "error",
          "react-hooks/rules-of-hooks": "error",
          "react/button-has-type": "error",
          "react/default-props-match-prop-types": flow ? "off" : "error",
          "react/jsx-fragments": "error",
          "react/jsx-key": "error",
          "react/jsx-no-comment-textnodes": "error",
          "react/jsx-no-duplicate-props": "error",
          "react/jsx-no-target-blank": "error",
          "react/jsx-no-undef": "error",
          "react/jsx-pascal-case": ["error", { allowAllCaps: true }],
          "react/jsx-uses-react": "error",
          "react/jsx-uses-vars": "error",
          "react/no-danger-with-children": "error",
          "react/no-deprecated": "error",
          "react/no-direct-mutation-state": "error",
          "react/no-find-dom-node": "error",
          "react/no-is-mounted": "error",
          "react/no-render-return-value": "error",
          "react/no-string-refs": "error",
          "react/no-typos": "error",
          "react/no-unescaped-entities": "error",
          "react/no-unknown-property": "error",
          "react/no-unsafe": "error",
          "react/no-unused-prop-types": flow ? "off" : "error",
          "react/no-unused-state": "error",
          "react/prop-types": "error",
          "react/react-in-jsx-scope": "error",
          "react/require-default-props": "error",
          "react/require-render-return": "error",
          "react/style-prop-object": "error",
        }
      : {}
  );
}

const lowercaseBrowserGlobals = [
  "cancelAnimationFrame",
  "cancelIdleCallback",
  "clearInterval",
  "clearTimeout",
  "console",
  "document",
  "fetch",
  "performance",
  "requestAnimationFrame",
  "requestIdleCallback",
  "setInterval",
  "setTimeout",
  "window",
];

// This is like the standard `browser` env in ESLint, but without all the weird
// stuff.
baseRules.browserEnv = () =>
  Object.keys(globals.browser)
    .filter(key => /^[A-Z]/.test(key))
    .concat(lowercaseBrowserGlobals)
    .reduce((result, key) => {
      result[key] = false;
      return result;
    }, {});

module.exports = baseRules;
