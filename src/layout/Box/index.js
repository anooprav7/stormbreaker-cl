import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { space, color, border, flexbox, layout, background } from 'styled-system';
import styles from './styles';

let StyledBox = styled('div')`
	${border};
	${space};
	${color};
	${flexbox};
	${layout};
	${background};
	box-sizing: border-box;
	text-decoration: none;
	box-shadow: ${styles.boxShadow};
`;

function Box(props) {
	const { children, ...remainingProps } = props;
	if (remainingProps.href) StyledBox = StyledBox.withComponent('a');
	// else if (remainingProps.as) StyledBox = StyledBox.withComponent(remainingProps.as);
	else StyledBox = StyledBox.withComponent('div');
	return <StyledBox {...remainingProps}>{children}</StyledBox>;
}

// TODO: Border properties pending

Box.propTypes = {
	/**
	 * Use to add redirectional links to the component
	 */
	href: PropTypes.string,
	/**
	 * All colors - including theme colours
	 */
	background: PropTypes.string,
	
	/**
	 * Set box shadow from the following values
	 */
	boxShadow: PropTypes.oneOf([0, 1, 2, 3])
};


export {Box};
