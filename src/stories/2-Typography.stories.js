import React from 'react'
import Text from '../components/Typography';
import themeDecorator from './themeDecorator';

export default {
	title: 'Typography',
	component: Text,
	decorators: [themeDecorator]
};

export const size = () => (
	<Text fontSize='body2' fontWeight="semibold">
		Hello ! I am Text component
	</Text>
);
