import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

import styles from "./styles"

let StyledButton = styled(
  ({ appearance, size, outline, block, loading, href, ...props }) => (
    <button {...props} />
  )
)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${styles.pointerEvents};
  text-transform: uppercase;
  color: ${styles.color};
  font-size: 12px;
  padding: ${styles.padding};
  width: ${props => (props.block ? "100%" : "")};
  border-width: 1px;
  border-style: solid;
  border-color: ${styles.borderColor};
  border-radius: 3px;
  pointer-events: ${styles.pointerEvents};
  opacity: ${styles.opacity};
  background-color: ${styles.backgroundColor};
  letter-spacing: 1px;
  transition: background 250ms ease, border-color 250ms ease;
  text-decoration: none;
  &:hover {
    color: ${styles.hover.color};
    background-color: ${styles.hover.backgroundColor};
    border-color: ${styles.hover.borderColor};
  }
`

function Button(props) {
  const { children, ...remainingProps } = props
  if (remainingProps.href) StyledButton = StyledButton.withComponent("a")
  return <StyledButton {...remainingProps}>{children}</StyledButton>
}

const colorKeys = ["primary", "secondary"]
// const colorKeys = Object.keys(theme.colors)

Button.propTypes = {
  /** Color class of button */
  appearance: PropTypes.oneOf(colorKeys),
  /** The size of the button */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** The color and border switches to color, background becomes white */
  outline: PropTypes.bool,
  /** Button width becomes container width */
  block: PropTypes.bool,
  /** Loading state */
  loading: PropTypes.bool,
  /** Anchor button to redirection to href */
  href: PropTypes.string
}

Button.defaultProps = {
  appearance: "primary",
  size: "medium",
  loading: false,
  outline: false,
  block: false
}

export default Button

/**
 * Props
 *  ...spread
 *  appearance = primary, secondary,
 *  outline
 *  block
 *  disabled
 *  loading
 *  href - anchor
 *  size = small, medium, large
 *
 */
