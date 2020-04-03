import { getColorFromAppearance } from "../../utils/stylesHelper"

const SIZE_PADDING_MAP = {
  small: [1, 2],
  medium: [2, 4],
  large: [3, 6],
}

// TODO Anoop - Remove and replace theme import

export default {
  opacity(props) {
    if (props.disabled) return "0.5"
    return ""
  },
  pointerEvents(props) {
    if (props.loading) return "progress"
    if (props.disabled) return "no-drop"
    return "pointer"
  },
  borderColor(props) {
    // return props.theme.colors[props.appearance][400]
    const { theme, appearance } = props
    return getColorFromAppearance(theme, appearance, 500)
  },
  color(props) {
    const { theme, appearance } = props
    if (props.outline) return getColorFromAppearance(theme, appearance, 500)
    return props.theme.colors.white
  },
  backgroundColor(props) {
    const { theme, appearance } = props
    if (props.outline) return props.theme.colors.white
    return getColorFromAppearance(theme, appearance, 500)
  },
  padding(props) {
    return props.theme.sizeOfSpace(SIZE_PADDING_MAP[props.size])
  },
  hover: {
    backgroundColor(props) {
      const { theme, appearance } = props
      if (props.loading || props.disabled) return ""
      if (props.outline) return ""
      return getColorFromAppearance(theme, appearance, 700)
    },
    borderColor(props) {
      const { theme, appearance } = props
      // if (props.outline) return props.theme.color[props.color]
      return getColorFromAppearance(theme, appearance, 700)
    },
    color(props) {
      const { theme, appearance } = props
      if (props.outline) return getColorFromAppearance(theme, appearance, 700)
      return props.theme.colors.white
    },
  },
}
