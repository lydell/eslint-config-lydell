### Version 4.0.0 (2017-11-04)

- Removed: [no-unexpected-multiline]. It can conflict with Prettier.
- Removed: [require-await]. Marking functions with `async` have more uses than
  simply enabling `await` syntax. I guarantees that the function always returns
  a `Promise` and never throws.
- Added: [no-return-await]. `return await` is always useless.
- Added: [lines-between-class-members]. Some breathing room is nice.

### Version 3.0.0 (2017-10-13)

- Added: [flowtype/require-return-type].

### Version 2.0.1 (2017-09-26)

- Removed: [react/jsx-curly-brace-presence]. It is unfortunately too buggy:
  [yannickcr/eslint-plugin-react#1449].

### Version 2.0.0 (2017-09-26)

- Added: [flowtype/no-unused-expressions].
- Added: [react/jsx-curly-brace-presence].

### Version 1.0.0 (2017-09-23)

- Initial release.

[flowtype/no-unused-expressions]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
[flowtype/require-return-type]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
[lines-between-class-members]: https://eslint.org/docs/rules/lines-between-class-members
[no-return-await]: https://eslint.org/docs/rules/no-return-await
[no-unexpected-multiline]: https://eslint.org/docs/rules/no-unexpected-multiline
[react/jsx-curly-brace-presence]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[require-await]: https://eslint.org/docs/rules/require-await
[yannickcr/eslint-plugin-react#1449]: https://github.com/yannickcr/eslint-plugin-react/issues/1449
