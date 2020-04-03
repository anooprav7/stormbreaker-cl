import React from "react"
import Text from "../src/components/Typography"
import { defaultDecoratorArr } from "./themeDecorator"

import { theme, colorKeys } from "../src/theme"

export default {
  title: "components/Typography",
  component: Text,
  decorators: defaultDecoratorArr,
}

export const variant = () => (
  <>
    {Object.keys(theme.typographyVariants).map((size, i) => (
      <Text variant={size} key={i}>
        size: {size} ({theme.typographyVariants[size].size}{" "}
        {theme.typographyVariants[size].lineHeight})
      </Text>
    ))}
  </>
)

export const fontWeight = () => (
  <>
    {Object.keys(theme.fontWeight).map((weight, i) => (
      <Text variant="body3" fontWeight={weight} key={i}>
        weight: {weight} ({theme.fontWeight[weight]})
      </Text>
    ))}
  </>
)

export const colors = () => (
  <>
    {colorKeys.map((color, i) => (
      <Text variant="body3" color={color} key={i}>
        color: {color}
      </Text>
    ))}
  </>
)
