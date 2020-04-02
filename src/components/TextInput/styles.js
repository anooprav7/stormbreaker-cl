import theme from "../../theme"
const { sizeOfSpace } = theme

export default {
  padding() {
    return sizeOfSpace([2, 4])
  },
  border(props) {
    if (props.hasError) return props.theme.colors.error[400]
    return `#000`
  },
  focus: {
    borderColor(props) {
      return props.theme.colors.primary[400]
    },
    boxShadow(props) {
      return `${props.theme.colors.primary[400]} 0px 0px 0px 1px`
    }
  }
}
