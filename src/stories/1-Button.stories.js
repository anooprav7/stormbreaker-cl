import React from "react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"

// import { Button } from "@storybook/react/demo"
import Button from "../components/Button"
import themeDecorator from "./themeDecorator"
import styled from "@emotion/styled"

// function Button(props) {
//   return <StyledButton {...props}>{props.children}</StyledButton>
// }

export default {
  title: "Button",
  component: Button,
  // decorators: [withInfo, themeDecorator]
  decorators: [themeDecorator]
}

const Btn = styled.button`
  background-color: ${props => props.theme.colors.primary[100]};
`

export const Showcase = () => (
  <div style={{ margin: 10 }}>
    <Button>{"Default"}</Button>
    {/* <div style={{ padding: 5 }} />
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
    <Button href="https://www.google.com/">{"Google anchor"}</Button>
    <div style={{ padding: 5 }} />
    <Button href="https://www.google.com/" outline>
      {"Google anchor"}
    </Button> */}
  </div>
)

export const Sizes = () => (
  <>
    <Button size="small">{"small"}</Button>
    <span style={{ padding: 3 }} />
    <Button>{"Default"}</Button>
    <span style={{ padding: 3 }} />
    <Button size="large">{"large"}</Button>
  </>
)

export const Appearances = () => (
  <>
    <Button>{"Primary"}</Button>
    <span style={{ padding: 5 }} />
    <Button appearance="secondary">{"Secondary"}</Button>
    <span style={{ padding: 5 }} />
    <Button appearance="warning">{"Warning"}</Button>
    <span style={{ padding: 5 }} />
    <Button appearance="success">{"Success"}</Button>
    <span style={{ padding: 5 }} />
    <Button appearance="error">{"Error"}</Button>
  </>
)

export const Outline = () => (
  <>
    <Button outline>{"Primary"}</Button>
    <span style={{ padding: 5 }} />
    <Button outline appearance="secondary">
      {"Secondary"}
    </Button>
    <span style={{ padding: 5 }} />
    <Button outline appearance="warning">
      {"Warning"}
    </Button>
    <span style={{ padding: 5 }} />
    <Button outline appearance="success">
      {"Success"}
    </Button>
    <span style={{ padding: 5 }} />
    <Button outline appearance="error">
      {"Error"}
    </Button>
  </>
)

// export const Outline = () => <Button outline>{"Outline"}</Button>

export const BlockButton = () => <Button block>{"Block"}</Button>

export const Loading = () => <Button loading>{"Loading"}</Button>

export const Disabled = () => <Button disabled>{"Loading"}</Button>

export const AnchorButton = () => (
  <>
    <Button href="https://www.google.com/">{"Google Link"}</Button>
    <span style={{ padding: 5 }} />
    <Button href="https://www.google.com/" outline>
      {"Google Link"}
    </Button>
  </>
)
