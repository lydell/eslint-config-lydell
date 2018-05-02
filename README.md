# eslint-config-lydell [![Build Status][travis-badge]][travis]

Kinda strict [Prettier]-friendly ESLint config.

* Only rules. No other config.
* No rules that that are unnecessary or might conflict with [Prettier].
* Find errors.
* Avoid potential problems.
* Forbid confusing code.
* Prefer ES2015+ syntax.
* Avoid rules that require arbitrary configuration.
* Main file contains only core rules. Rules for other plugins are in separate
  files.

## Installation

Install eslint-config-lydell:

```
$ npm install --save-dev eslint-config-lydell
```

Then, add eslint-config-lydell to the "extends" array in your `.eslintrc.*`
file.

```json
{
  "extends": ["lydell"]
}
```

A few ESLint plugins are supported as well:

* [eslint-plugin-flowtype]
* [eslint-plugin-import]
* [eslint-plugin-react]

You need to install those plugins yourself.

Add extra "extends" entries for the plugins you use like so:

```json
{
  "extends": ["lydell", "lydell/flowtype", "lydell/import", "lydell/react"]
}
```

## Example configuration

This includes some extra recommended plugins, that don't need a ton of
configuration:

* [eslint-plugin-prettier]
* [eslint-plugin-sort-imports-es6-autofix]
* [eslint-plugin-flowtype-errors] \(if you use [Flow])
* [eslint-plugin-css-modules] \(if you use [CSS Modules])

It also shows how to set up linting for config files, [Storybook stories] and
[Jest] tests, as well as some globals you might want to use (instead of the
bloated [browser env]; prefix uncommon globals with `window.`).

```json
{
  "extends": ["lydell", "lydell/flowtype", "lydell/import", "lydell/react"],
  "plugins": [
    "css-modules",
    "flowtype",
    "flowtype-errors",
    "import",
    "prettier",
    "react",
    "sort-imports-es6-autofix"
  ],
  "parserOptions": {
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true
  },
  "globals": {
    "DEBUG": false,
    "console": false,
    "document": false,
    "fetch": false,
    "window": false
  },
  "rules": {
    "css-modules/no-undef-class": "error",
    "flowtype-errors/show-errors": "error",
    "prettier/prettier": "error",
    "sort-imports-es6-autofix/sort-imports-es6": "error"
  },
  "overrides": [
    {
      "files": [".*.js", "*.config.js", ".storybook/*.js"],
      "env": { "node": true },
      "flowtype/require-valid-file-annotation": "off"
    },
    {
      "files": ["*.test.js"],
      "env": { "jest": true }
    },
    {
      "files": ["stories.js"],
      "globals": {
        "module": false
      }
    }
  ]
}
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
  trailingComma: "es5"
};
```

## License

[MIT](LICENSE).

[browser env]: https://github.com/sindresorhus/globals/blob/4ce1b7aa14ffc799a4e7b867e7d91c634ef81efb/globals.json#L223
[css modules]: https://github.com/css-modules/css-modules
[eslint-plugin-css-modules]: https://github.com/atfzl/eslint-plugin-css-modules
[eslint-plugin-flowtype-errors]: https://github.com/amilajack/eslint-plugin-flowtype-errors
[eslint-plugin-flowtype]: https://github.com/gajus/eslint-plugin-flowtype
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
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
