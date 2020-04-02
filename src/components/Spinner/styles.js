import theme from "../../theme"
import {
  getColorFromAppearance,
  getColorFromTheme
} from "../../utils/stylesHelper"
const { sizeOfSpace } = theme

const SIZE_MAP = {
  small: { size: sizeOfSpace(3), strokeWidth: "1px" },
  medium: { size: sizeOfSpace(6), strokeWidth: "2px" },
  large: { size: sizeOfSpace(9), strokeWidth: "3px" }
}

export default {
  border(props) {
    return `${SIZE_MAP[props.size].strokeWidth} solid ${getColorFromTheme(
      props.theme,
      props.color
    )}`
  },
  size(props) {
    return SIZE_MAP[props.size].size
  }
}
