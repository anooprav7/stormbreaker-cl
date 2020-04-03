import React from 'react';
import Box from '../components/Box';
import Text from '../components/Typography';
import themeDecorator from './themeDecorator';

import theme, {colorKeys} from '../theme';

export default {
	title: 'Box',
	component: Box,
	decorators: [themeDecorator]
};

export const Showcase = () => (
	<>
		<Box bg='primary500' width={400} py={10} px={10} mb={8}>
			<Text color='white' variant='body3'>
				Box component
			</Text>
		</Box>
		<Box display='inline-flex' bg='mono100' borderRadius={4} px={3} py={1}>
			<Text variant='body1' color='mono800' >
				NOTE: Box component supports all{' '}
				<a target='_blank' href='https://styled-system.com/api'>
					styled system
				</a>{' '}
				props.
			</Text>
		</Box>
	</>
);

export const ThemeColors = () => (
	<>
		<Box display='flex'>
      {colorKeys.map((color) =>
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
      )}
			
		</Box>
	</>
);

export const Border = () => (
	<>
		<Box
      display='flex'
      alignItems='center'
      justifyContent='center'
      border="1px solid"
      borderColor="mono300"
      height={60}
      width={150}
      borderRadius={4}
      mr={2}
    >
      <Text color='mono800' variant='body1'>
        Box with border
      </Text>
    </Box>
	</>
);

export const BoxShadow = () => (
	<Box display='flex'>
		{Object.keys(theme.shadows).map((shadow, i) => (
			<Box
				display='flex'
				alignItems='center'
				justifyContent='center'
				bg='mono200'
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
			bg='primary'
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
