import theme from "../../theme"
import {
  getColorFromAppearance,
  getColorFromTheme
} from "../../utils/stylesHelper"

const { sizeOfSpace } = theme

const SIZE_PADDING_MAP = {
  small: sizeOfSpace([1, 2]),
  medium: sizeOfSpace([2, 4]),
  large: sizeOfSpace([3, 6])
}

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
    return SIZE_PADDING_MAP[props.size]
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
    }
  }
}
