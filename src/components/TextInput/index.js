import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import styles from "./styles"

const StyledTextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: ${styles.fontSize};
  color: ${styles.color};
  background: ${styles.backgroundColor};
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  border-color: ${styles.border};
  cursor: ${styles.pointerEvents};
  border-radius: 3px;
  padding: ${styles.padding};
  transition: border-color 0.25s ease 0s, box-shadow 0.25s ease 0s;
  opacity: ${styles.opacity};
  &:focus {
    box-shadow: ${styles.focus.boxShadow};
    border-color: ${styles.focus.borderColor};
    outline: none;
  }
  &::placeholder {
    color: ${props => props.theme.colors.mono300};
  }
`

// function TextInput(props) {
//   const { children, ...remainingProps } = props
//   return <StyledTextInput {...remainingProps} />
// }

const TextInput = React.forwardRef((props, ref) => {
  const { children, ...remainingProps } = props
  return <StyledTextInput ref={ref} {...remainingProps} />
})

TextInput.propTypes = {
  /** Size of the Input */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Show highlight with error boundary */
  hasError: PropTypes.bool,
  /** Disabled editing */
  disabled: PropTypes.bool,
  /** Message to be shown when no input  */
  placeholder: PropTypes.string
}
TextInput.defaultProps = {
  size: "medium",
  hasError: false
}

export { TextInput }
