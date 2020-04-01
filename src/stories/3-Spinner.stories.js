import React from "react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"

// import { Button } from "@storybook/react/demo"
import Spinner from "../components/Spinner"
import themeDecorator from "./themeDecorator"
import styled from "@emotion/styled"

export default {
  title: "Spinner",
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
    <Spinner appearance="secondary" />
    <span style={{ padding: 5 }} />
    <Spinner appearance="success" />
    <span style={{ padding: 5 }} />
    <Spinner appearance="warning" />
    <span style={{ padding: 5 }} />
    <Spinner appearance="error" />
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
