import React from 'react';
import './App.css';
import Text from './components/Typography';

function App() {
	return (
		<>
      <Text as="h1" mb={8} my={5} px={4}  fontSize='h1' >
				Text component
			</Text>

			<Text my={2} px={4}  fontSize='body2' fontWeight='lighter'>
				We spend the prime years of our lives preparing for our careers. But we spend hardly any time preparing for
				things that will determine the quality of our life experience and the quality of our relationships, health,
				mindset and wellbeing. Mindvalley teaches you the things that actually matter most in life.
			</Text>

			<Text my={2} px={4} fontSize='body2' color='error' fontWeight='lighter'>
				We spend the prime years of our lives preparing for our careers. But we spend hardly any time preparing for
				things that will determine the quality of our life experience and the quality of our relationships, health,
				mindset and wellbeing. Mindvalley teaches you the things that actually matter most in life.
			</Text>
		</>
	);
}

export default App;
