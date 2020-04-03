import React from 'react';
import Box from '../components/Box';
import Text from '../components/Typography';
import Grid from '../components/Grid';
import Container from '../components/Container';
import themeDecorator from './themeDecorator';

import theme from '../theme';

export default {
	title: 'Container',
	component: Container,
	decorators: [themeDecorator]
};

export const Default = () => (
	<>
		<Text variant='h3' color='mono900'  fontWeight='bold'>
			Container properties
		</Text>
		<Box pt={1} />
		<Text variant='body2' color='mono' >
			Container is a wrapper element of the Grid system. Sets width and column gap
		</Text>
		<Box pt={7} />
		<Container>
			<Grid span={4}>
				<Box display='flex' alignItems='center' justifyContent='center'  bg={'primary700'} height={50}>
					<Text color='white' variant='body1'>
						4*column
					</Text>
				</Box>
			</Grid>
			<Grid span={2}>
				<Box display='flex' alignItems='center' justifyContent='center'  bg={'primary700'} height={50}>
					<Text color='white' variant='body1'>
						2*column
					</Text>
				</Box>
			</Grid>
			<Grid span={6}>
				<Box display='flex' alignItems='center' justifyContent='center'  bg={'primary700'} height={50}>
					<Text color='white' variant='body1'>
						6*column
					</Text>
				</Box>
			</Grid>
		</Container>
		<Box pt={10} />
	</>
);
