import React, { Children } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {Box} from '../Box';

let StyledContainer = styled(({ gap, direction, wrap, ...props }) => (
	<Box
		flexDirection={direction ? direction : 'row'}
		mx={gap ? (-4 * gap) / 2 + 'px' : -1}
		flexWrap={wrap ? 'wrap' : 'nowrap'}
		{...props}
	/>
))`
	box-sizing: border-box;
	display: flex;
`;

function Container(props) {
	const childrenWithProps = Children.map(props.children, child => React.cloneElement(child, { gap: props.gap }));
	return <StyledContainer {...props}>{childrenWithProps}</StyledContainer>;
}

Container.propTypes = {
	/** Define the max width of container */
	maxWidth: PropTypes.oneOfType(['string','number']),
	/** Define the col gap between the grid elements */
	gap: PropTypes.number,
	/** Implies the direction of col elements */
	direction: PropTypes.oneOf(['row', 'column']),
	/** Defines wrap or nowrap state for grid elements */
	wrap: PropTypes.bool
};

Container.defaultProps = {
	gap: 2,
	direction: 'row',
	wrap: true
};

export {Container};
