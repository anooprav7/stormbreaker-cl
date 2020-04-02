import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import styles from "./styles"

const StyledTextInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  color: rgb(85, 85, 85);
  cursor: auto;
  background: rgb(255, 255, 255);
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  /* border-color: rgb(204, 204, 204); */
  border-color: ${styles.border};
  border-radius: 3px;
  padding: ${styles.padding};
  transition: border-color 0.25s ease 0s, box-shadow 0.25s ease 0s;
  &:focus {
    box-shadow: ${styles.focus.boxShadow};
    border-color: ${styles.focus.borderColor};
    outline: none;
  }
`

function TextInput(props) {
  const { children, ...remainingProps } = props
  return <StyledTextInput {...remainingProps} />
}

TextInput.propTypes = {
  /** Show highlight with error boundary */
  hasError: PropTypes.bool
}
TextInput.defaultProps = {
  hasError: false
}

export default TextInput
