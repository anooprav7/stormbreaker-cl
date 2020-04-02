import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { space, color, border, flexbox, layout } from 'styled-system';
import styles from './styles';

let StyledBox = styled('div')`
	${border};
	${space};
	${color};
	${flexbox};
	${layout};
	box-sizing: border-box;
	text-decoration: none;
	background-color: ${styles.background};
	color: ${styles.color};
	border-color: ${styles.borderColor};
	box-shadow: ${styles.boxShadow};
`;

function Box(props) {
	const { children, ...remainingProps } = props;
	if (remainingProps.href) StyledBox = StyledBox.withComponent('a');
	else StyledBox = StyledBox.withComponent('div');
	return <StyledBox {...remainingProps}>{children}</StyledBox>;
}

// TODO: Border properties pending

Box.propTypes = {
	/**
	 * Set give bg color
	 */
	background: PropTypes.oneOf(['primary', 'secondary', 'error', 'success', 'warning']),
	/**
	 * Set bg color levels
	 */
	colorLevel: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900]),
	/**
	 * Use to add redirectional links to the component
	 */
	href: PropTypes.string,

	/**
	 * Set box shadow from the following values
	 */
	boxShadow: PropTypes.oneOf([0, 1, 2, 3])
};

Box.defaultProps = {
	colorLevel: 400
};

export default Box;
