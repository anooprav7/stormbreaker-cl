import React, {useState} from 'react';
import { colorKeys } from '../theme';
import Switch from '../components/Switch';
import themeDecorator from './themeDecorator';
import Box from '../layout/Box';

export default {
	title: 'components/Switch',
	component: Switch,
	decorators: [themeDecorator]
};

export const Showcase = () => {
	const [on, setOn] = useState(false);
	return <Switch on={on} onChange={() => setOn(!on)} />;
};

export const Sizes = () => (
	<Box display='flex' alignItems="center">
		<Switch on  size="small"/>
		<Box pr={4} />
		<Switch on size="medium"/>
		<Box pr={4} />
		<Switch on size="large"/>
	</Box>
);

export const Appearance = () => (
	<Box display='flex' alignItems="center">
    {colorKeys.map(color => (
			<>
				<Switch on appearance={color}/>
				<Box mr={4} />
			</>
		))}
		
	</Box>
);

export const Disabled = () => (
	<Box display='flex' flexDirection="column">
		<Switch disabled />
		<Box mb={10} />
    <Switch on disabled />
	</Box>
);
