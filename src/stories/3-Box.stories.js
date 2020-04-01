import React from 'react';
import Box from '../components/Box';
import Text from '../components/Typography';
import themeDecorator from './themeDecorator';

import theme from '../theme';

export default {
	title: 'Box',
	component: Box,
	decorators: [themeDecorator]
};

export const Showcase = () => (
	<>
		<Box bg='primary' colorLevel={800} py={10} borderRadius={4} mb={8}>
			<Text color='white' align='center' variant='body3'>
				Box component
			</Text>
		</Box>
		<Box display='inline-flex' bg='secondary' colorLevel={100} borderRadius={4} px={3} py={1}>
			<Text variant='body1' color='secondary' colorLevel={700}>
				NOTE: Box component supports all{' '}
				<a target='_blank' href='https://styled-system.com/api'>
					styled system
				</a>{' '}
				props.
			</Text>
		</Box>
	</>
);

export const BackgroundColor = () => (
	<>
		<Box display='flex'>
			{Object.keys(theme.colors).map((color, i) => (
				<Box
					display='flex'
					alignItems='center'
					justifyContent='center'
					bg={color}
					height={60}
					width={100}
					borderRadius={4}
					mr={2}
				>
					<Text color='white' variant='body1'>
						{color}
					</Text>
				</Box>
			))}
		</Box>
	</>
);

export const ColorLevel = () => (
	<Box display='flex'>
		{Object.keys(theme.colors.primary).map((weight, i) => (
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				bg='primary'
				height={60}
				width={100}
				borderRadius={4}
				colorLevel={weight}
				mr={2}
			>
				<Text color='white' variant='body1'>
					Bg {weight}
				</Text>
			</Box>
		))}
	</Box>
);

export const BoxShadow = () => (
	<Box display='flex'>
		{Object.keys(theme.shadows).map((shadow, i) => (
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				bg='secondary'
				colorLevel={200}
				height={60}
				width={100}
				borderRadius={4}
				mr={2}
				boxShadow={shadow}
			>
				<Text color='secondary' colorLevel={900} variant='body1'>
					shadow {shadow}
				</Text>
			</Box>
		))}
	</Box>
);

export const AnchorBox = () => (
	<>
		<Box
			display='flex'
			alignItems='center'
			justifyContent='center'
			bg='warning'
			height={60}
			width={100}
			borderRadius={4}
			colorLevel={900}
			mr={2}
			href='https://www.google.com'
			target='_blank'
		>
			<Text color='white' variant='body1'>
				Link
			</Text>
		</Box>
	</>
);
