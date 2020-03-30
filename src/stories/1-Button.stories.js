import React from "react"
import { action } from "@storybook/addon-actions"
// import { Button } from "@storybook/react/demo"
import Button from "../components/Button"
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

export const Showcase = () => (
  <div style={{ margin: 10 }}>
    <Button>{"Default"}</Button>
    <div style={{ padding: 5 }} />
    <Button appearance="secondary">{"secondary"}</Button>
    <div style={{ padding: 5 }} />
    <Button outline>{"Outline"}</Button>
    <div style={{ padding: 5 }} />
    <Button block>{"Block"}</Button>
    <div style={{ padding: 5 }} />
    <Button loading>{"Loading"}</Button>
    <div style={{ padding: 5 }} />
    <Button disabled>{"Disabled"}</Button>
    <div style={{ padding: 5 }} />
    <Button size="small">{"small"}</Button>
    <span style={{ padding: 3 }} />
    <Button>{"Default"}</Button>
    <span style={{ padding: 3 }} />
    <Button size="large">{"large"}</Button>
    <div style={{ padding: 5 }} />
  </div>
)

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
