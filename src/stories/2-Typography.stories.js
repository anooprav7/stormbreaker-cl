import React from 'react';
import Text from '../components/Typography';
import themeDecorator from './themeDecorator';
import styled from '@emotion/styled';
import { withInfo } from "@storybook/addon-info"

import theme from '../theme';

export default {
	title: 'Typography',
	component: Text,
	decorators: [withInfo, themeDecorator]
};

const View = styled.div({
	// background: theme.colors.primary[50],
	padding: '20px',
	borderRadius: '4px',
	border: '1px solid',
	borderColor: theme.colors.secondary[200]
});



export const variant = () => (
	<>
		{Object.keys(theme.typographyVariants).map((size, i) => (
			<Text variant={size} key={i}>
				size: {size} ({theme.typographyVariants[size].size} {theme.typographyVariants[size].lineHeight})
			</Text>
		))}
	</>
);

export const fontWeight = () => (
	<>
		{Object.keys(theme.fontWeight).map((weight, i) => (
			<Text variant='body3' fontWeight={weight} key={i}>
				weight: {weight} ({theme.fontWeight[weight]})
			</Text>
		))}
	</>
);

export const colors = () => (
	<>
		{Object.keys(theme.colors).map((color, i) => (
			<Text variant='body3' fontWeight='semibold' color={color} key={i}>
				color: {color}
			</Text>
		))}
	</>
);
