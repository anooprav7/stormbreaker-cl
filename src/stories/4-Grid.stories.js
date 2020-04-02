// import React from 'react';
// import Box from '../components/Box';
// import Text from '../components/Typography';
// import Grid from '../components/Grid';
// import Container from '../components/Container';
// import themeDecorator from './themeDecorator';

// import theme from '../theme';

// export default {
// 	title: 'Grid',
// 	component: Grid,
// 	decorators: [themeDecorator]
// };

// export const Showcase = () => (
// 	<>
// 		<Text variant='h3' color='secondary' colorLevel={900} fontWeight='semibold'>
// 			Grid combinations
// 		</Text>
// 		<Box pt={1} />
// 		<Text variant='body2' color='secondary' colorLevel={600}>
// 			Based on 12 grid column layout. Grid elements should wrap inside <b>Container</b> component.
// 		</Text>
// 		<Box pt={7} />
// 		<Container>
// 			<Grid span={2}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						2*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={2}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						2*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={2}>
// 				<Box display='flex' alignItems='center' justifyContent='center ' colorLevel={800} bg={'primary'} height={50}>
// 					<Text color='white' variant='body1'>
// 						2*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={2}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						2*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={2}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						2*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={2}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						2*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 		</Container>
// 		<Box pt={5} />
// 		<Container>
// 			<Grid span={3}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						3*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={3}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						3*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={3}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						3*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={3}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						3*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 		</Container>
// 		<Box pt={5} />
// 		<Container>
// 			<Grid span={4}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						4*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={4}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						4*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={4}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						4*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 		</Container>
// 		<Box pt={5} />
// 		<Container>
// 			<Grid span={6}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						6*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={6}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						6*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 		</Container>
// 		<Box pt={5} />
// 		<Container>
// 			<Grid span={12}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						12*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 		</Container>
// 		<Box pt={5} />
// 		<Container>
// 			<Grid span={1}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						1*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 			<Grid span={11}>
// 				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary'} colorLevel={800}  height={50}>
// 					<Text color='white' variant='body1'>
// 						11*col
// 					</Text>
// 				</Box>
// 			</Grid>
// 		</Container>
// 		<Box pt={10} />
// 		<Box display='inline-flex' bg='secondary' colorLevel={100} borderRadius={4} px={3} py={1}>
// 			<Text variant='body1' color='secondary' colorLevel={700}>
// 				NOTE: Always wrap with Container. Container will add the column gap
// 			</Text>
// 		</Box>
// 	</>
// );
