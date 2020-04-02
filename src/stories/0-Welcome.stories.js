import React from "react"
import { linkTo } from "@storybook/addon-links"
import { Welcome } from "@storybook/react/demo"

export default {
  title: "Stormbreaker",
  component: Welcome
}

export const Description = () => (
  <div style={{ margin: 15 }}>{"Stormbreaker IS Here"}</div>
)

Description.story = {
  name: "Description"
}
