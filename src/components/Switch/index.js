import React, { useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from './styles';
import { getColorFromAppearance } from '../../utils/stylesHelper';

const Wrapper = styled('label')`
	border-radius: 30px;
	height: ${styles.size.height};
	width: ${styles.size.width};
	cursor: ${styles.pointerEvents};
	pointer-events: ${styles.pointerEvents};
	opacity: ${props => (props.disabled ? 0.5 : 1)};
	border: 2px solid;
	border-color: ${styles.inActiveColor};
	transition: background-color 0.3s ease-in-out, border-color 0.2s ease-in-out;
	background-color: ${styles.inActiveColor};
	display: inline-flex;
`;

const StyledKnob = styled('span')`
	border-radius: 100%;
	height: ${styles.size.height};
	width: ${styles.size.height};
	background-color: white;
	transition: transform 0.2s ease-in-out;
	box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.25), 0 4px 11px 0 rgba(0, 0, 0, 0.08), -1px 3px 3px 0 rgba(0, 0, 0, 0.14);
`;

const StyledInput = styled('input')`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
	&:checked + ${Wrapper} {
		background-color: ${styles.activeColor};
		border-color: ${styles.activeColor};
	}

	&:checked + ${Wrapper} > ${StyledKnob} {
		transform: translateX(100%);
	}
`;

function Switch(props) {
	const { on, ...remainingProps } = props;
	return (
		<>
			<StyledInput checked={on} id='switch' type='checkbox' {...remainingProps} />
			<Wrapper htmlFor='switch' {...remainingProps}>
				<StyledKnob {...remainingProps} />
			</Wrapper>
		</>
	);
}

Switch.propTypes = {
	/** Defines switch's on/off state */
	on: PropTypes.bool,
	/** Make the the switch outline */
	appearance: PropTypes.string,
	/** Different sizes of switch available */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/** Disabled state of switch */
	disabled: PropTypes.bool,
	/**  Function to switch the active state */
	onChange: PropTypes.bool
};

Switch.defaultProps = {
	appearance: 'primary',
	size: 'medium',
	disabled: false,
	onChange: () => {}
};

export default Switch;
