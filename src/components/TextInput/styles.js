import { theme } from "../../theme"
import { getColorFromAppearance } from "../../utils/stylesHelper"

const SIZE_MAP = {
  small: [1, 2],
  medium: [2, 3],
  large: [3, 4],
}
const FONT_SIZE_IDX_MAP = {
  small: 2,
  medium: 3,
  large: 4,
}
export default {
  backgroundColor(props) {
    if (props.hasError) return getColorFromAppearance(theme, "error", 50)
    return props.theme.colors.white
  },
  pointerEvents(props) {
    if (props.disabled) return "no-drop"
    return "auto"
  },
  opacity(props) {
    if (props.disabled) return "0.5"
    return ""
  },
  fontSize(props) {
    const idx = FONT_SIZE_IDX_MAP[props.size]
    return props.theme.fontSizes[idx]
  },
  color(props) {
    const { theme } = props
    return getColorFromAppearance(theme, "mono", 600)
  },
  padding(props) {
    return props.theme.sizeOfSpace(SIZE_MAP[props.size])
  },
  border(props) {
    const { theme } = props
    if (props.hasError) return getColorFromAppearance(theme, "error", 400)
    return getColorFromAppearance(theme, "mono", 300)
  },
  focus: {
    borderColor(props) {
      const { theme } = props
      if (!props.hasError) return getColorFromAppearance(theme, "primary", 400)
      return ""
    },
    boxShadow(props) {
      const { theme } = props
      if (!props.hasError)
        return `${getColorFromAppearance(
          theme,
          "primary",
          400
        )} 0px 0px 0px 1px`
      return ""
    },
  },
}
