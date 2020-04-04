import React, { useState } from "react"
import { colorKeys } from "../src/theme"
import {Switch} from "../src/components/Switch"
import { defaultDecoratorArr } from "./themeDecorator"
import {Box} from "../src/layout/Box"

export default {
  title: "components/Switch",
  component: Switch,
  decorators: defaultDecoratorArr,
}

export const Showcase = () => {
  const [on, setOn] = useState(false)
  return <Switch on={on} onChange={() => setOn(!on)} />
}

export const Sizes = () => (
  <Box display="flex" alignItems="center">
    <Switch  size="small" on/>
    <Box pr={4} />
    <Switch size="medium" on/>
    <Box pr={4} />
    <Switch  size="large" on/>
  </Box>
)

export const Appearance = () => (
  <Box display="flex" alignItems="center">
    {colorKeys.map((color) => (
      <>
        <Switch on appearance={color} />
        <Box mr={4} />
      </>
    ))}
  </Box>
)

export const Disabled = () => (
  <Box display="flex" flexDirection="column">
    <Switch disabled />
    <Box mb={10} />
    <Switch on disabled />
  </Box>
)
