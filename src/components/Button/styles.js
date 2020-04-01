import theme from "../../theme"
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
    // if (props.outline) return props.theme.color[props.color]
    return props.theme.colors[props.appearance][500]
  },
  color(props) {
    // TODO Anoop - Add outline hover to 700 and remove bkground color
    if (props.outline) return props.theme.colors[props.appearance][500]
    return props.theme.colors.white
  },
  backgroundColor(props) {
    if (props.outline) return props.theme.colors.white
    return props.theme.colors[props.appearance][500]
  },
  padding(props) {
    return SIZE_PADDING_MAP[props.size]
  },
  hover: {
    backgroundColor(props) {
      if (props.loading || props.disabled) return ""
      if (props.outline) return ""
      return props.theme.colors[props.appearance][700]
    },
    borderColor(props) {
      // if (props.outline) return props.theme.color[props.color]
      return props.theme.colors[props.appearance][700]
    },
    color(props) {
      if (props.outline) return props.theme.colors[props.appearance][700]
      return props.theme.colors.white
    }
  }
}
