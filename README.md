# Stormbreaker

[![npm version](https://img.shields.io/npm/v/stormbreaker.svg?style=flat)](https://www.npmjs.com/package/stormbreaker)
[![issues](https://img.shields.io/github/issues/anooprav7/stormbreaker-cl)](https://www.github.com/anooprav7/stormbreaker-cl/issues)
[![contributors](https://img.shields.io/github/contributors/anooprav7/stormbreaker-cl)](https://www.github.com/anooprav7/stormbreaker-cl/)
![core size](https://img.shields.io/bundlephobia/min/stormbreaker.svg?label=core%20size)
![core gzip size](https://img.shields.io/bundlephobia/minzip/stormbreaker.svg?label=core%20gzip%20size)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/anooprav7/stormbreaker-cl/blob/master/LICENSE)

> Stormbreaker Component Library

## Install

```
yarn add stormbreaker

npm install stormbreaker --save
```

## Usage

The components need a theme to be set through the `ThemeProvider` at the root level. We provide a default theme along with the components in the package named `theme` as shown below.
We also provide some `globalStyles` styles in the package (Recommended).

```jsx padded dark
import { ThemeProvider, Global, theme, globalStyles } from "stormbreaker"

export default () => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    // Code starts here Eg. <App />
  </ThemeProvider>
)
```

Then, to include components from `stormbreaker`

```js dark
import React from 'react'
import { Button, Checkbox } from 'stormbreaker'
...

```

## Storybook

[Stormbreaker Storybook Docs](https://stormbreaker-v2.netlify.com/)

## [License](LICENSE)

MIT
