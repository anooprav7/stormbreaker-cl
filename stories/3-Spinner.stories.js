import React from "react"
import { Spinner } from "../src/components/Spinner"
import { defaultDecoratorArr } from "./themeDecorator"

export default {
  title: "components/Spinner",
  component: Spinner,
  // decorators: [withInfo, themeDecorator]
  decorators: defaultDecoratorArr,
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
