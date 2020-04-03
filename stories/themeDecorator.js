import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"
import { addParameters } from "@storybook/react"
import { create } from "@storybook/theming"
import "@storybook/addon-knobs/register"
import "@storybook/addon-actions/register"

import { theme } from "../src/theme"
import { globalStyles } from "../src/theme/globalStyles"
// import "../index.css"

addParameters({
  options: {
    theme: create({
      brandTitle: "Stormbreaker",
      brandUrl: "https://github.com/anooprav7/stormbreaker-cl",
      base: "light"
    }),
    panelPosition: "right"
  }
})

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} /> {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
