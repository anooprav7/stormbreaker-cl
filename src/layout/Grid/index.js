import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Box from '../Box';
import theme from '../../theme';

let StyledGrid = styled(({ gap, span, ...props }) => (
	<Box px={gap ? (4 * gap) / 2  + 'px' : 1} flex='0 0 auto' {...props} />
))`
	box-sizing: border-box;
	max-width: ${props => (props.span ? (props.span * 100) / theme.gridColumns[0] + '%' : '')};
	flex-basis: ${props => (props.span ? (props.span * 100) / theme.gridColumns[0] + '%' : '')};
`;

function Grid(props) {
	return <StyledGrid {...props}>{props.children}</StyledGrid>;
}

Grid.propTypes = {
	/** Define number of column span */
	span: PropTypes.number
};

Grid.defaultProps = {
	span: 12
};

export default Grid;
