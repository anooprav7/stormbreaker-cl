import React from "react"

import { Button } from "../src/components/Button"
import { defaultDecoratorArr } from "./themeDecorator"
import Box from "../src/layout/Box"
import Text from "../src/components/Typography"

export default {
  title: "components/Button",
  component: Button,
  // decorators: [withInfo, themeDecorator]
  decorators: defaultDecoratorArr,
  // parameters: {
  //   grid: { cellSize: 4 },
  // },
}

export const Showcase = () => <Button>{"Default"}</Button>

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
    <div style={{ margin: 10 }} />
    <Box display="inline-flex" bg="mono100" borderRadius={4} px={3} py={1}>
      <Text variant="body1" color="mono800">
        NOTE: While loading state is applied, we change the font color to match
        bg color to maintain same width
      </Text>
    </Box>
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
