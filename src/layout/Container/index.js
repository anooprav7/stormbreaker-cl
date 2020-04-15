import React, { Children } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Box } from '../Box';

let StyledContainer = styled(({ gap, direction, wrap, ...props }) => (
	<Box
		flexDirection={direction ? direction : 'row'}
		mx={gap && direction==='row' ? -2 * gap + 'px' : 0}
		flexWrap={wrap ? 'wrap' : 'nowrap'}
		my={gap && direction==='column' ? -2 * gap + 'px' : 0}
		{...props}
	/>
))`
	box-sizing: border-box;
	display: flex;
`;

const StyledDivForMargin = styled('div')`
	margin: auto;
	max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : '')};
`;

function Container(props) {
	const { maxWidth, gap, direction, wrap, children, ...remainingProps } = props;
	const childrenWithProps = Children.map(children, (child) => React.cloneElement(child, { gap, direction }));
	return (
		<StyledDivForMargin maxWidth={maxWidth}>
			<StyledContainer {...remainingProps} direction={direction} gap={gap} wrap={wrap}>
				{childrenWithProps}
			</StyledContainer>
		</StyledDivForMargin>
	);
}

Container.propTypes = {
	/** Define the max width of container */
	maxWidth: PropTypes.oneOfType(['string', 'number']),
	/** Define the col gap between the grid elements */
	gap: PropTypes.number,
	/** Implies the direction of col elements */
	direction: PropTypes.oneOf(['row', 'column']),
	/** Defines wrap or nowrap state for grid elements */
	wrap: PropTypes.bool,
};

Container.defaultProps = {
	gap: 1,
	direction: 'row',
	wrap: true,
};

export { Container };
