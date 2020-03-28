import React from 'react';

const Text = props => {
	const {
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
		...additionalProps
	} = props;

	return (
		<p>
			{children}
		</p>
	)
};

Text.defaultProps = {}

Text.displayName = 'Text';

export default Text;
