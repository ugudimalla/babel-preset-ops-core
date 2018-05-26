# `@copart/babel-preset-ops-core`

`yarn add @copart/babel-preset-ops-core`

This repo is home to a much-needed reusable Babel 7 configuration that is meant to simplify all the things.

## Usage

```js
// path/to/yourApp/.babelrc.js

module.exports = () => {
  return {
    presets: ['@copart/babel-preset-ops-core'],
  }
}
```

## Notes

This preset _requires_ Babel 7.
