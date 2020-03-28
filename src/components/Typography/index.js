import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Text = styled(
	({
		as,
		color,
		colorWeight,
		fontSize,
		fontWeight,
		lineHeight,
		letterSpacing,
		noWrap,
		align,
		p,
		m,
		px,
		py,
		mx,
		my,
		pt,
		pr,
		pb,
		pl,
		mt,
		mr,
		mb,
		ml,
		children,
		...props
	}) => React.createElement(as && as, props, children)
)`
	padding: ${props => (props.p ? props.theme.sizeOfSpace(props.p) : '')};
	padding-top: ${props => (props.pt ? props.theme.sizeOfSpace(props.pt) : '')};
	padding-right: ${props => (props.pr ? props.theme.sizeOfSpace(props.pr) : '')};
	padding-bottom: ${props => (props.pb ? props.theme.sizeOfSpace(props.pb) : '')};
	padding-left: ${props => (props.pl ? props.theme.sizeOfSpace(props.pl) : '')};
	padding-left: ${props => (props.px ? props.theme.sizeOfSpace(props.px) : '')};
	padding-right: ${props => (props.px ? props.theme.sizeOfSpace(props.px) : '')};
	padding-top: ${props => (props.py ? props.theme.sizeOfSpace(props.py) : '')};
	padding-bottom: ${props => (props.py ? props.theme.sizeOfSpace(props.py) : '')};
	margin: ${props => (props.m ? props.theme.sizeOfSpace(props.m) : '')};
	margin-top: ${props => (props.mt ? props.theme.sizeOfSpace(props.mt) : '')};
	margin-right: ${props => (props.mr ? props.theme.sizeOfSpace(props.mr) : '')};
	margin-bottom: ${props => (props.mb ? props.theme.sizeOfSpace(props.mb) : '')};
	margin-left: ${props => (props.ml ? props.theme.sizeOfSpace(props.ml) : '')};
	margin-left: ${props => (props.mx ? props.theme.sizeOfSpace(props.mx) : '')};
	margin-right: ${props => (props.mx ? props.theme.sizeOfSpace(props.mx) : '')};
	margin-top: ${props => (props.my ? props.theme.sizeOfSpace(props.my) : '')};
	margin-bottom: ${props => (props.my ? props.theme.sizeOfSpace(props.my) : '')};
	font-size: ${props => (props.fontSize ? props.theme.fontSize[props.fontSize].size : '')};
	line-height: ${props => (props.fontSize ? props.theme.fontSize[props.fontSize].lineHeight : '')};
	text-align: ${props => props.align || ''};
	white-space: ${props => (props.noWrap || props.truncate ? 'nowrap' : '')};
	color: ${props => (props.color ? props.theme.colors[props.color][props.colorWeight] : '')};
	font-weight: ${props => (props.fontWeight ? props.theme.fontWeight[props.fontWeight] : '')};
	letter-spacing: ${props => (props.letterSpacing ? props.theme.letterSpacing[props.letterSpacing] : '')};
	text-overflow: ${props => (props.truncate ? 'ellipsis' : '')};
	overflow: ${props => (props.truncate ? 'hidden' : '')};
`;

Text.propTypes = {
	as: PropTypes.node,
	color: PropTypes.oneOf(['primary', 'secondary', 'error', 'success']),
	colorWeight: PropTypes.number,
	fontSize: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'caption1', 'caption2']),
	fontWeight: PropTypes.oneOf(['lighter', 'light', 'normal', 'medium', 'semibold', 'bold', 'bolder']),
	lineHeight: PropTypes.oneOf(['solid', 'title', 'copy']),
	letterSpacing: PropTypes.oneOf(['tight', 'normal', 'wide']),
	align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
	truncate: PropTypes.bool,
	noWrap: PropTypes.bool
};

Text.defaultProps = {
	as: 'div',
	colorWeight: 500
};

Text.displayName = 'Text';

export default Text;
