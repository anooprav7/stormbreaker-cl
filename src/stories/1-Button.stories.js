import React from "react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"

import Button from "../components/Button"
import themeDecorator from "./themeDecorator"
import styled from "@emotion/styled"

export default {
  title: "Button",
  component: Button,
  // decorators: [withInfo, themeDecorator]
  decorators: [themeDecorator]
}

export const Showcase = () => (
  <div style={{ margin: 10 }}>
    <Button>{"Default"}</Button>
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
    <Button appearance="accent">{"Accent"}</Button>
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
    <Button outline appearance="accent">
      {"Accent"}
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

export const BlockButton = () => <Button block>{"Block"}</Button>

export const Loading = () => (
  <>
    <div style={{ color: "#2f2f2f" }}>
      While loading state is applied, we change the font color to match bg color
      to maintain same width
    </div>
    <div style={{ margin: 5 }} />
    <Button loading>{"Primary"}</Button>
    <span style={{ padding: 5 }} />
    <Button loading appearance="accent">
      {"Accent"}
    </Button>
    <span style={{ padding: 5 }} />
    <Button loading appearance="warning">
      {"Warning"}
    </Button>
    <span style={{ padding: 5 }} />
    <Button loading appearance="success">
      {"Success"}
    </Button>
    <span style={{ padding: 5 }} />
    <Button loading appearance="error">
      {"Error"}
    </Button>
  </>
)

export const Disabled = () => <Button disabled>{"Disabled"}</Button>

export const AnchorButton = () => (
  <>
    <Button href="https://www.google.com/">{"Google Link"}</Button>
    <span style={{ padding: 5 }} />
    <Button href="https://www.google.com/" outline>
      {"Google Link"}
    </Button>
  </>
)
