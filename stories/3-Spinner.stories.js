import React from "react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"

// import { Button } from "@storybook/react/demo"
import { Spinner } from "../src/components/Spinner"
import themeDecorator from "./themeDecorator"
import styled from "@emotion/styled"

export default {
  title: "components/Spinner",
  component: Spinner,
  // decorators: [withInfo, themeDecorator]
  decorators: [themeDecorator]
}

export const Showcase = () => (
  <div style={{ margin: 10 }}>
    <Spinner />
  </div>
)

export const Appearance = () => (
  <div style={{ margin: 10 }}>
    <Spinner />
    <span style={{ padding: 5 }} />
    <Spinner color="accent500" />
    <span style={{ padding: 5 }} />
    <Spinner color="success500" />
    <span style={{ padding: 5 }} />
    <Spinner color="warning500" />
    <span style={{ padding: 5 }} />
    <Spinner color="error500" />
  </div>
)

export const Size = () => (
  <div style={{ margin: 10 }}>
    <Spinner size="small" />
    <span style={{ padding: 5 }} />
    <Spinner />
    <span style={{ padding: 5 }} />
    <Spinner size="large" />
  </div>
)
