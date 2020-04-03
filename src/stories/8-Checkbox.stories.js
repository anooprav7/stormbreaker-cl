import React from 'react';
import { colorKeys } from '../theme';
import Checkbox from '../components/Checkbox';
import themeDecorator from './themeDecorator';
import Text from '../components/Typography';
import Box from '../layout/Box';

export default {
	title: 'components/Checkbox',
	component: Checkbox,
	decorators: [themeDecorator]
};

export const Showcase = () => (
	<Checkbox>
		<Text variant='body2' color='mono800'>
			Checkbox component
		</Text>
	</Checkbox>
);

export const Appearance = () => (
	<Box display='flex'>
		{colorKeys.map(color => (
			<>
				<Checkbox appearance={color}>{color}</Checkbox>
				<Box mr={4} />
			</>
		))}
	</Box>
);

export const Disabled = () => (
	<Box display='flex' flexDirection="column">
		<Checkbox disabled appearance='mono'>
			<Text variant='body2' color='mono800'>
				Disabled checkbox
			</Text>
		</Checkbox>
    <Box mb={10} />
    <Checkbox disabled checked appearance='mono'>
			<Text variant='body2' color='mono800'>
				Disabled checkbox
			</Text>
		</Checkbox>
	</Box>
);
