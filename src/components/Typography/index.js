// Props

/* 

<Typography></Typography>
<Text></Text>

https://material-ui.com/api/typography/

  {...spread}
  color - add inherit
  colorWeight
  fontSize- add inherit
  fontWeight
  align
  noWrap
  variant h1 - <h1></h1>
  pt
  pb
  pl
  pr
  p
  m
  mr
  ml
  mt
  mb
  as
  letterSpacing [tight, ]

*/


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
