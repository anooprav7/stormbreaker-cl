import { getColorFromTheme } from "../../utils/stylesHelper"

const SIZE_MAP = {
  small: { size: 3, strokeWidth: "1px" },
  medium: { size: 6, strokeWidth: "2px" },
  large: { size: 9, strokeWidth: "3px" },
}

export default {
  border(props) {
    return `${SIZE_MAP[props.size].strokeWidth} solid ${getColorFromTheme(
      props.theme,
      props.color
    )}`
  },
  size(props) {
    return props.theme.sizeOfSpace(SIZE_MAP[props.size].size)
  },
}
