# eslint-config-lydell [![Build Status][travis-badge]][travis]

Kinda strict [Prettier]-friendly ESLint config.

- Only rules by default. No other config.
  - Optional: A less confusing `browser` env.
- No rules that that are unnecessary or might conflict with [Prettier].
- Find errors.
- Avoid potential problems.
- Forbid confusing code.
- Prefer ES2015+ syntax.
- Avoid rules that require arbitrary configuration.

## Installation

Install eslint-config-lydell:

```
$ npm install --save-dev eslint-config-lydell
```

Then, merge in the rules in your `.eslintrc.js` file. (You _have_ to use `.js`
for your ESLint config; see below.)

```js
const baseRules = require("eslint-config-lydell");

module.exports = {
  // Mix in rules from this config:
  rules: Object.assign({}, baseRules(), {
    // Your own rules here.
  }),
  // Optional: Less confusing `browser` env:
  globals: Object.assign({}, baseRules.browserEnv(), {
    // Your own globals here.
  }),
};
```

A few ESLint plugins are supported as well:

- [eslint-plugin-flowtype]
- [eslint-plugin-import]
- [eslint-plugin-jest]
- [eslint-plugin-react]

Note that you need to install those plugins yourself. (They are not included in the config because of [ESLint issue #3458].)

Enable rules for the plugins you use like so:

```js
baseRules({ flow: true, import: true, jest: true, react: true });
```

The reason this config is `require`:d instead of using the `extends` field
(which is the standard), is to easily allow `flow` to opt out from some base and
`react` rules, for example.

The config also comes with a browser env (globals), that is exactly like the
standard `browser` env in ESLint but without all the weird stuff like `name` and
`length`. (Prefix uncommon globals with `window.` or add them to your config.)

## Example configuration

This includes some extra recommended plugins, that don't need a ton of
configuration:

- [eslint-plugin-prettier]
- [eslint-plugin-sort-imports-es6-autofix]
- [eslint-plugin-flowtype-errors] \(if you use [Flow])
- [eslint-plugin-css-modules] \(if you use [CSS Modules])

It also shows how to set up linting for config files, [Storybook stories] and
[Jest] tests.

```js
const baseRules = require("eslint-config-lydell");

module.exports = {
  plugins: [
    // Provides rules for these plugins:
    "import",
    "jest",
    "flowtype",
    "react",

    // Recommended plugins:
    "prettier",
    "sort-imports-es6-autofix",

    // Recommended if using CSS Modules or Flow:
    "css-modules",
    "flowtype-errors",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    // node: true, // For Node.js apps.
    // browser: true, // NOT recommended; see below.
  },
  // Less confusing `browser` env (for browser apps):
  globals: Object.assign({}, baseRules.browserEnv(), {
    DEBUG: false,
  }),
  rules: Object.assign(
    {},
    // Merge in base rules, and enable the extra rules you want.
    baseRules({ flow: true, import: true, jest: true, react: true }),
    // Add more rules and override rules here:
    {
      "css-modules/no-undef-class": "error",
      "flowtype-errors/show-errors": "error",
      "prettier/prettier": "error",
      "sort-imports-es6-autofix/sort-imports-es6": "error",
    }
  ),
  // Example on how to configure certain config files and such.
  overrides: [
    {
      files: [".*.js", "*.config.js", ".storybook/*.js"],
      env: { node: true },
      rules: {
        "flowtype/require-valid-file-annotation": "off",
      },
    },
    {
      files: ["*.test.js"],
      env: { jest: true },
      // You can also enable Jest rules only for test files if you want.
      rules: baseRules({ builtin: false, jest: true }),
    },
    {
      files: ["stories.js"],
      globals: {
        module: false,
      },
    },
  ],
  // If you use React:
  settings: {
    react: {
      version: "16",
    },
  },
};
```

Recommended .eslintignore:

```
# Un-ignore config files.
!/*.js
!/.storybook/
!/**/.eslintrc.js

# You might want to ignore some directories:
# /build/
```

Recommended [prettier.config.js]:

```js
module.exports = {
  trailingComma: "es5",
};
```

## License

[MIT](LICENSE).

[css modules]: https://github.com/css-modules/css-modules
[eslint issue #3458]: https://github.com/eslint/eslint/issues/3458
[eslint-plugin-css-modules]: https://github.com/atfzl/eslint-plugin-css-modules
[eslint-plugin-flowtype-errors]: https://github.com/amilajack/eslint-plugin-flowtype-errors
[eslint-plugin-flowtype]: https://github.com/gajus/eslint-plugin-flowtype
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-prettier]: https://github.com/prettier/eslint-plugin-prettier
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[eslint-plugin-sort-imports-es6-autofix]: https://github.com/marudor/eslint-plugin-sort-imports-es6-autofix
[flow]: https://flow.org/
[jest]: https://facebook.github.io/jest/
[prettier.config.js]: https://prettier.io/docs/en/configuration.html
[prettier]: https://github.com/prettier/prettier
[storybook stories]: https://storybook.js.org/
[travis-badge]: https://travis-ci.org/lydell/eslint-config-lydell.svg?branch=master
[travis]: https://travis-ci.org/lydell/eslint-config-lydell
