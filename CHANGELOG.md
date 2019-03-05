### Version 14.0.0 (2019-02-26)

- Added: [jest/prefer-todo].
- Added: [eslint-plugin-react-hooks] rules. This plugin is now _required_ to
  install if you use `react: true`.
- Removed: [react/self-closing-comp]. It’s not needed when using Prettier.
- Removed: [camelcase]. API’s often uses snake case in response objects, and
  it’s annoying not being able to do `const { full_name } = apiResponse`
  without renaming.

### Version 13.0.0 (2019-01-26)

- Added: [react/jsx-fragments].
- Added: [jest/no-truthy-falsy].
- Changed: Removed [prefer-arrow-callback] since it [can conflict with
  Prettier][arrow-conflict].
- Changed: Recommend using `version: "detect"` for eslint-plugin-react.

### Version 12.0.0 (2018-11-18)

- Removed: [import/order]. It's recommended to use
  [eslint-plugin-simple-import-sort] instead (and [import/order] for code that
  uses `require`, if you want to.)

### Version 11.0.0 (2018-11-10)

- Changed: Replaced [no-sequences] with a [Prettier-friendly
  alternative][no-sequences-alternative].

### Version 10.0.0 (2018-09-01)

- Fixed: [spaced-comment] is now configured to support Flow type comments.
- Removed: [arrow-body-style]. Sometimes functions can read better with braces
  even if it contains just a single `return` statement.
- Removed: [func-style]. Too little gain, too much debate.

### Version 9.0.1 (2018-08-20)

- Changed: Switch to caret version range for dependencies, instead of pinning
  them.

### Version 9.0.0 (2018-08-17)

- Added: The [curly] rule, enforce braces around for example `if` and `for`
  bodies.
- Added: A custom browser env, that is exactly like the standard `browser` env
  in ESLint but without all the weird stuff like `name` and `length`.

### Version 8.0.2 (2018-08-13)

- Removed: [flowtype/boolean-style]. It can conflict with Prettier.

### Version 8.0.1 (2018-07-21)

- Removed: [no-catch-shadow], which was deprecated in [ESLint 5.1.0].

### Version 8.0.0 (2018-07-03)

- Added: [react/no-unsafe]
- Added: [flowtype/array-style-complex-type] and [flowtype/array-style-simple-type].
- Added: [eslint-plugin-jest].

### Version 7.0.0 (2018-01-25)

- Changed: This package is no longer a collection of configs that you put into
  the `extends` field, but instead exports a single function that returns rules
  that you can merge into yours. This means that only `.eslintrc.js` (with the
  `.js` extension) is supported from now on. See the example config in the
  readme for how to use this new setup.
- Changed: Node.js 4 is no longer supported. Node.js 6 is now the oldest
  supported version.
- Added: [react/default-props-match-prop-types] and
  [react/no-unused-prop-types], but only when not using Flow. That's why the
  above change was made.
- Changed: [no-undef] now has `{ typeof: true }`.
- Added: [import/no-cycle], [import/no-self-import],
  [import/no-useless-path-segments] and [import/order]. Make sure to update
  [eslint-plugin-import] to a version supporting all of those.
- Removed: [class-methods-use-this], [no-inner-declarations],
  [no-negated-condition] and [react/display-name] because they caused more pain
  than gain or were irrelevant.
- Improved: Example config in the readme.

### Version 6.1.0 (2018-01-25)

- Added: [eslint-plugin-import].

### Version 6.0.0 (2017-11-19)

- Changed: Added `{ exceptAfterSingleLine: true }` to
  [lines-between-class-members], since it is nice when declaring the types of
  non-method class members in Flow.

### Version 5.0.0 (2017-11-19)

- Added: [react/button-has-type].

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

[arrow-body-style]: https://eslint.org/docs/rules/arrow-body-style
[arrow-conflict]: https://github.com/prettier/eslint-config-prettier/blob/2c842675e55b91aecaef6f997d234ebf2d220ffb/README.md#arrow-body-style-and-prefer-arrow-callback
[camelcase]: https://eslint.org/docs/rules/camelcase
[class-methods-use-this]: https://eslint.org/docs/rules/class-methods-use-this
[curly]: https://eslint.org/docs/rules/curly
[eslint 5.1.0]: https://eslint.org/blog/2018/07/eslint-v5.1.0-released
[eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-react-hooks]: https://www.npmjs.com/package/eslint-plugin-react-hooks
[eslint-plugin-simple-import-sort]: https://github.com/lydell/eslint-plugin-simple-import-sort/
[flowtype/array-style-complex-type]: https://github.com/gajus/eslint-plugin-flowtype#array-style-complex-type
[flowtype/array-style-simple-type]: https://github.com/gajus/eslint-plugin-flowtype#array-style-simple-type
[flowtype/boolean-style]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-boolean-style
[flowtype/no-unused-expressions]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-no-unused-expressions
[flowtype/require-return-type]: https://github.com/gajus/eslint-plugin-flowtype#eslint-plugin-flowtype-rules-require-return-type
[func-style]: https://eslint.org/docs/rules/func-style
[import/no-cycle]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
[import/no-self-import]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
[import/no-useless-path-segments]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
[import/order]: https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
[jest/no-truthy-falsy]: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
[jest/prefer-todo]: https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
[lines-between-class-members]: https://eslint.org/docs/rules/lines-between-class-members
[no-catch-shadow]: https://eslint.org/docs/rules/no-catch-shadow
[no-inner-declarations]: https://eslint.org/docs/rules/no-inner-declarations
[no-negated-condition]: https://eslint.org/docs/rules/no-negated-condition
[no-return-await]: https://eslint.org/docs/rules/no-return-await
[no-sequences-alternative]: https://github.com/prettier/eslint-config-prettier#no-sequences
[no-sequences]: https://eslint.org/docs/rules/no-sequences
[no-undef]: https://eslint.org/docs/rules/no-undef
[no-unexpected-multiline]: https://eslint.org/docs/rules/no-unexpected-multiline
[prefer-arrow-callback]: https://eslint.org/docs/rules/prefer-arrow-callback
[react/button-has-type]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/button-has-type.md
[react/default-props-match-prop-types]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/default-props-match-prop-types.md
[react/display-name]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
[react/jsx-curly-brace-presence]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
[react/jsx-fragments]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-fragments.md
[react/no-unsafe]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unsafe.md
[react/no-unused-prop-types]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
[react/self-closing-comp]: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
[require-await]: https://eslint.org/docs/rules/require-await
[spaced-comment]: https://eslint.org/docs/rules/spaced-comment
[yannickcr/eslint-plugin-react#1449]: https://github.com/yannickcr/eslint-plugin-react/issues/1449
