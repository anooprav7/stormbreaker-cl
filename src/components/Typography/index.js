import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import theme from '../../theme';

const styles = {
	color(props) {
		if (props.color === 'white' || props.color === 'white') {
			return props.theme.colors[props.color];
		} else if (props.color) {
			return props.theme.colors[props.color][props.colorWeight];
		}
		return '';
	},

	lineHeight(props) {
		if (props.lineHeight) return props.theme.lineHeight[props.lineHeight];
		else if (props.variant && props.fontSize !== 0) return props.theme.typographyVariants[props.variant].lineHeight;
		else return '';
	},

	fontSize(props) {
		if (props.fontSize || props.fontSize === 0) {
			if (props.fontSize > props.theme.fontSizes.length) {
				const values = [].concat(props.fontSize);
				return values.map(v => (typeof v === 'string' ? v : `${v}px`)).join(' ');
			} else {
				return props.theme.fontSizes[props.fontSize];
			}
		} else if (props.variant) return props.theme.typographyVariants[props.variant].size;
		else return '';
	}
};

const StyledText = styled(
	({
		as,
		variant,
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
	}) => {
		const variantFn = () => {
			if (as) return as;
			else if (variant) return theme.typographyVariants[variant].as;
			else return 'div';
		};
		return React.createElement(variantFn(), props, children);
	}
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
	font-size: ${styles.fontSize};
	line-height: ${styles.lineHeight};
	text-align: ${props => props.align || ''};
	white-space: ${props => (props.noWrap || props.truncate ? 'nowrap' : '')};
	color: ${styles.color};
	font-weight: ${props => (props.fontWeight ? props.theme.fontWeight[props.fontWeight] : '')};
	letter-spacing: ${props => (props.letterSpacing ? props.theme.letterSpacing[props.letterSpacing] : '')};
	text-overflow: ${props => (props.truncate ? 'ellipsis' : '')};
	overflow: ${props => (props.truncate ? 'hidden' : '')};
`;

function Text(props){
	return <StyledText {...props}>{props.children}</StyledText>
}

Text.propTypes = {
	as: PropTypes.node,
	/** variant decides the text variant with predefined fontsize and lineheight */
	variant: PropTypes.oneOf(['h1','h2','h3','h4','body3','body2','body1','caption2','caption1']),
	/** Defines color of text */
	color: PropTypes.oneOf(Object.keys(theme.colors)),
	/** Defines the shade of color  */
	colorWeight: PropTypes.number,
	/** Defines the font size of the text  */
	fontSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
	fontWeight: PropTypes.oneOf(['lighter', 'light', 'normal', 'medium', 'semibold', 'bold', 'bolder']),
	lineHeight: PropTypes.oneOf(['solid', 'title', 'copy']),
	letterSpacing: PropTypes.oneOf(['tight','normal','wide']),
	align: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
	truncate: PropTypes.bool,
	noWrap: PropTypes.bool
};

Text.defaultProps = {
	colorWeight: 500,
	fontWeight: 'normal'
};

Text.displayName = 'Text';

export default Text;
