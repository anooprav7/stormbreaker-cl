export default {
  size(props) {
    if(props.height || props.width)
      console.warn('use size props instead of height and width')
    if(props.size === 'small')
      return props.theme.sizeOfSpace(6)
    else if(props.size === 'medium')
      return props.theme.sizeOfSpace(12)
    else if(props.size === 'large')
      return props.theme.sizeOfSpace(18)
    else if(props.size) 
      return props.theme.sizeOfSpace(props.size)
    else
      return ''
  },

  borderradius(props) {
    if(props.rounded) 
      return normaliseSize('100%')
    else if(props.borderRadius) {
      return normaliseSize(props.borderRadius)
    }
    else 
      return ''
  }
}

function normaliseSize(value) {
  const values = [].concat(value)
  return values.map(v => (typeof v === "string" ? v : `${v}px`)).join(" ")
}