import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import styles from "./styles"
import { colorKeys } from "../../theme"

/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"

const rotate1 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const containerCss = css`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.span`
  width: ${styles.size};
  height: ${styles.size};
  ${containerCss} /* background-color: black; */
`
const SpinningWrapper = styled.div`
  position: relative;
  width: ${styles.size};
  height: ${styles.size};
  ${containerCss}
  animation: ${rotate1} 1s linear 0s infinite;
`

const Line1 = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  position: absolute;
  top: 0px;
  /* left: 0px; */
  right: 0px;
  height: 50%;
  width: 50%;
  border-radius: 0 100% 0 0;
  border-top: ${styles.border};
  border-right: ${styles.border};
`
const Line2 = styled.div`
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  position: absolute;
  top: 0px;
  /* right: 0px; */
  left: 0px;
  height: 50%;
  width: 50%;
  border-radius: 100% 0 0 0;
  border-top: ${styles.border};
  /* border-left: 7px solid aqua; */
`

function Spinner(props) {
  const { size, color } = props
  return (
    <Container size={size}>
      <SpinningWrapper size={size}>
        <Line2 color={color} size={size} />
        <Line1 color={color} size={size} />
      </SpinningWrapper>
    </Container>
  )
}

Spinner.propTypes = {
  /** The size of the button */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Theme color or CSS valid color string */
  color: PropTypes.string
}

Spinner.defaultProps = {
  size: "medium",
  color: "primary500"
}

export { Spinner }
