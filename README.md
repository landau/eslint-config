# eslint-config

[![Build Status](https://travis-ci.com/landau/eslint-config.svg?branch=master)](https://travis-ci.com/landau/eslint-config)

My eslint-config

## Create a `.prettierrc`

```sh
echo "module.exports = { singleQuote: true };" > .prettierrc.js
```

## JS Projects

```sh
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier \
  eslint-plugin-import
```

```js
module.exports = {
  extends: ['@landau/eslint-config']
};
```

#### With jsdoc

```sh
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier \
  eslint-plugin-import eslint-plugin-jsdoc
```

```js
module.exports = {
  extends: ['@landau/eslint-config', '@landau/eslint-config/rules/jsdoc']
};
```

## TS Projects

```sh
npm i -D eslint prettier eslint-plugin-prettier eslint-config-prettier \
  eslint-plugin-import @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

```js
module.exports = {
  extends: ['@landau/eslint-config', '@landau/eslint-config/rules/ts']
};
```
