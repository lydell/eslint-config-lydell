# eslint-config-lydell [![Build Status][travis-badge]][travis]

Kinda strict [Prettier]-friendly ESLint config.

- Only rules. No other config.
- No rules that that are unnecessary or might conflict with [Prettier].
- Find errors.
- Avoid potential problems.
- Forbid confusing code.
- Prefer ES2015+ syntax.
- Avoid rules that require arbitrary configuration.
- Main file contains only core rules. Rules for other plugins are in separate
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
  "extends": [
    "lydell"
  ]
}
```

A few ESLint plugins are supported as well:

- [eslint-plugin-flowtype]
- [eslint-plugin-import]
- [eslint-plugin-react]

Add extra "extends" entries for the plugins you use like so:

```json
{
  "extends": [
    "lydell",
    "lydell/flowtype",
    "lydell/import",
    "lydell/react"
  ]
}
```

## Example configuration

```json
{
  "extends": [
    "lydell",
    "lydell/flowtype",
    "lydell/import",
    "lydell/react"
  ],
  "plugins": [
    "flowtype",
    "import",
    "react",
    "prettier"
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
  "rules": {
    "prettier/prettier": "error"
  }
}
```

## License

[MIT](LICENSE).

[eslint-plugin-flowtype]: https://github.com/gajus/eslint-plugin-flowtype
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-react]: https://github.com/yannickcr/eslint-plugin-react
[Prettier]: https://github.com/prettier/prettier
[travis-badge]: https://travis-ci.org/lydell/eslint-config-lydell.svg?branch=master
[travis]: https://travis-ci.org/lydell/eslint-config-lydell
