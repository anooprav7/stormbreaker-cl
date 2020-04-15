import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import {Box} from "../Box"
import { theme } from "../../theme"

let StyledGrid = styled(({ gap, span, direction, ...props }) => (
  <Box px={gap && direction==='row' ? (4 * gap) / 2 + "px" : 0} py={gap && direction==='column' ? (4 * gap) / 2 + "px" : 0}  flex="0 0 auto" {...props} />
))`
  box-sizing: border-box;
  flex-grow: 1;
  max-width: ${props =>
    props.span ? (props.span * 100) / theme.gridColumns[0] + "%" : ""};
  flex-basis: ${props =>
    props.span ? (props.span * 100) / theme.gridColumns[0] + "%" : ""};
`

function Grid(props) {
  return <StyledGrid {...props}>{props.children}</StyledGrid>
}

Grid.propTypes = {
  /** Define number of column span */
  span: PropTypes.number,
}

export {Grid}
