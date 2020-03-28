import React from "react"
import { action } from "@storybook/addon-actions"
import { Button } from "@storybook/react/demo"
import themeDecorator from "./themeDecorator"
import styled from "@emotion/styled"

export default {
  title: "Button",
  component: Button,
  decorators: [themeDecorator]
}

const Btn = styled.button`
  background-color: ${props => props.theme.colors.primary[100]};
`

export const Text = () => (
  <Btn>{"Hello Button"}</Btn>
  // </ThemeProvider>
)

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
