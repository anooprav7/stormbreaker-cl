import React, { useState } from "react"
import { theme, colorKeys } from "../src/theme"
import Switch from "../src/components/Switch"
import { defaultDecoratorArr } from "./themeDecorator"
import Box from "../src/layout/Box"

export default {
  title: "theme/Sample",
  component: Switch,
  decorators: defaultDecoratorArr,
}

export const Showcase = () => {
  return <pre>{JSON.stringify(theme, null, 4)}</pre>
}
