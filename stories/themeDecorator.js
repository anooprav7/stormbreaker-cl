import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"
import { addParameters } from "@storybook/react"
import { create } from "@storybook/theming"
import "@storybook/addon-knobs/register"
import "@storybook/addon-actions/register"

import { theme } from "../src/theme"
import { globalStyles } from "../src/theme/globalStyles"


const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} /> {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
