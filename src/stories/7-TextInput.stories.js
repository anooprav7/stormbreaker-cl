import React from "react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"

import Button from "../components/Button"
import TextInput from "../components/TextInput"
import themeDecorator from "./themeDecorator"
import styled from "@emotion/styled"

export default {
  title: "TextInput",
  component: TextInput,
  // decorators: [withInfo, themeDecorator]
  decorators: [themeDecorator]
}

export const Showcase = () => (
  <div style={{ margin: 10 }}>
    <TextInput placeholder="Placeholder here">{"Default"}</TextInput>
  </div>
)
export const Error = () => (
  <div style={{ margin: 10 }}>
    <TextInput placeholder="Placeholder here" hasError>
      {"Default"}
    </TextInput>
  </div>
)
