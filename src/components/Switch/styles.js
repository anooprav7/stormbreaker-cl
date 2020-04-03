import { theme } from "../../theme"
import { getColorFromAppearance } from "../../utils/stylesHelper"
import { size, width } from "styled-system"

export default {
  inActiveColor() {
    return getColorFromAppearance(theme, "mono", 200)
  },

  activeColor(props) {
    if (props.appearance)
      return getColorFromAppearance(theme, props.appearance, 500)
    else return getColorFromAppearance(theme, "mono", 200)
  },

  pointerEvents(props) {
    if (props.disabled) return "no-drop"
    return "grab"
  },

  size: {
    height(props) {
      const { size } = props
      if (size == "small") return theme.sizeOfSpace(5)
      else if (size === "medium") return theme.sizeOfSpace(6)
      else if (size === "large") return theme.sizeOfSpace(7)
      else return theme.sizeOfSpace(5)
    },
    width(props) {
      const { size } = props
      if (size == "small") return theme.sizeOfSpace(10)
      else if (size === "medium") return theme.sizeOfSpace(12)
      else if (size === "large") return theme.sizeOfSpace(14)
      else return theme.sizeOfSpace(10)
    }
  }
}
