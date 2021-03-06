import React from "react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"

import {TextInput} from "../src/components/TextInput"
import { defaultDecoratorArr } from "./themeDecorator"

export default {
  title: "components/TextInput",
  component: TextInput,
  // decorators: [withInfo, themeDecorator]
  decorators: defaultDecoratorArr,
}

export const Showcase = () => (
  <div style={{ margin: 10 }}>
    <TextInput placeholder="Placeholder here" />
  </div>
)
export const Error = () => (
  <div style={{ margin: 10 }}>
    <TextInput
      placeholder="Placeholder here"
      hasError
      defaultValue="Input Value"
    />
  </div>
)
export const Disabled = () => (
  <div style={{ margin: 10 }}>
    <TextInput placeholder="Disabled" disabled value="No Editing" />
  </div>
)

export const Sizes = () => (
  <div style={{ margin: 10 }}>
    <TextInput placeholder="Small" size="small" />
    <div style={{ padding: 5 }} />
    <TextInput placeholder="Medium" />
    <div style={{ padding: 5 }} />
    <TextInput placeholder="Large" size="large" />
  </div>
)
