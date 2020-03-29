import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

import styles from "./styles"

const Button = styled(
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

  &:hover {
    color: ${styles.hover.color};
    background-color: ${styles.hover.backgroundColor};
    border-color: ${styles.hover.borderColor};
  }
`

Button.propTypes = {
  /* appearance decides the color */
  appearance: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  outline: PropTypes.bool,
  block: PropTypes.bool,
  loading: PropTypes.bool,
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
