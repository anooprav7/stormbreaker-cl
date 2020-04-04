import React from "react"
import { ThemeProvider } from "emotion-theming"
import { Global } from "@emotion/core"
import { addParameters } from "@storybook/react"
import { create } from "@storybook/theming"
import "@storybook/addon-knobs/register"
import "@storybook/addon-actions/register"
// import "@storybook/addon-a11y/register"
import { withA11y } from "@storybook/addon-a11y"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"

import { theme } from "../src/theme"
import { globalStyles } from "../src/theme/globalStyles"

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  options: {
    theme: create({
      brandTitle: "Stormbreaker",
      brandUrl: "https://stormbreaker-v2.netlify.com/",
      // brandImage: "/storybook.png",
      base: "light",
    }),
    panelPosition: "right",
    // grid: { cellSize: 4 },
  },
})

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} /> {storyFn()}
  </ThemeProvider>
)

const withTheme = (Component) => (props) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} /> <Component {...props} />
    </ThemeProvider>
  )
}

const defaultDecoratorArr = [ThemeDecorator, withA11y]
export { defaultDecoratorArr, withTheme }
export default ThemeDecorator
