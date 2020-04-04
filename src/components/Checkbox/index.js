import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import styles from './styles';

const StyledLabel = styled('label')`
	display: inline-flex;
	cursor: ${styles.pointerEvents};
	pointer-events: ${styles.pointerEvents};
	align-items: center;
`;

const StyledCheckbox = styled('div')`
	border: 1px solid;
	border-radius: 2px;
	height: ${styles.size};
	width: ${styles.size};
	margin-right: 8px;
	border-color: ${styles.borderColor};
	opacity: ${props => (props.disabled ? 0.5 : '')};
	transition: border-color 0.2s ease, background-color 0.2s ease;
`;

const StyledInput = styled('input')`
	height: 1px;
	width: 1px;
	opacity: 0;
	z-index: -1;
	&:checked + ${StyledCheckbox} {
		position: relative;
		background-color: ${styles.backgroundColor};
		&:after {
			content: '';
			position: absolute;
			left: 50%;
			top: 40%;
			transform: translate(-50%, -50%) rotate(-45deg);
			border-style: solid;
			border-width: 0 0 2.5px 2.5px;
			border-color: white;
			height: 4px;
			width: 9px;
		}
	}
	&:hover + ${StyledCheckbox} {
		border-color: ${styles.hover.borderColor};
	}
`;

function Checkbox(props) {
	const { children, ...remainingProps } = props;
	return (
		<StyledLabel disabled={remainingProps.disabled}>
			<StyledInput type='checkbox' {...remainingProps} />
			<StyledCheckbox {...remainingProps} />
			{children}
		</StyledLabel>
	);
}

Checkbox.propTypes = {
	/** Color class of checkbox */
	appearance: PropTypes.string,
	/** Checkbox onChange function */
	size: PropTypes.oneOf(['small', 'medium']),
	/** Disabled state of checkbox */
	disabled: PropTypes.bool,
	/** Decides active/ inactive state of checkbox */
	checked: PropTypes.bool,
	/** Checkbox onChange function */
	onChange: PropTypes.bool
};

Checkbox.defaultProps = {
	appearance: 'primary',
	size: 'small',
	disabled: false,
	onChange: () => {}
};

export {Checkbox};
