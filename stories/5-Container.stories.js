import React from 'react';
import { Box } from '../src/layout/Box';
import { Text } from '../src/components/Typography';
import { Grid } from '../src/layout/Grid';
import { Container } from '../src/layout/Container';
import { defaultDecoratorArr } from './themeDecorator';

// import theme from '../theme';

export default {
	title: 'layout/Container',
	component: Container,
	decorators: defaultDecoratorArr,
};

export const Default = () => (
	<>
		<Text variant='h3' color='mono900' fontWeight='bold'>
			Container properties
		</Text>
		<Box pt={1} />
		<Text variant='body2' color='mono'>
			Container is a wrapper element of the Grid system. Sets width and column gap
		</Text>
		<Box pt={7} />
		<Container>
			<Grid span={4}>
				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary700'} height={50}>
					<Text color='white' variant='body1'>
						4*column
					</Text>
				</Box>
			</Grid>
			<Grid span={2}>
				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary700'} height={50}>
					<Text color='white' variant='body1'>
						2*column
					</Text>
				</Box>
			</Grid>
			<Grid span={6}>
				<Box display='flex' alignItems='center' justifyContent='center' bg={'primary700'} height={50}>
					<Text color='white' variant='body1'>
						6*column
					</Text>
				</Box>
			</Grid>
		</Container>
		<Box pt={10} />
	</>
)

export const Gap = () => (
  <>
    <Container gap={0}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
    <Box pt={10}/>
    <Container gap={1}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
    <Box pt={10}/>
    <Container gap={2}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
    <Box pt={10}/>
    <Container gap={4}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
    <Box pt={10}/>
    <Container gap={7}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
  </>
)

export const Direction = () => (
  <>
    <Container>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
    <Box pt={10}/>
    <Container direction="column">
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
  </>
);

export const MaxWidth = () => (
  <>
    <Container maxWidth={500}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
    <Box pt={10}/>
    <Container  maxWidth={700}>
      <Grid>
        <Box height={60} bg="primary"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
      <Grid>
        <Box height={60} bg="accent"  display="flex" alignItems="center" justifyContent="center">
          <Text variant="body2" fontWeight="light" color="white">Grid</Text>
        </Box>
      </Grid>
    </Container>
  </>
);