import React from 'react';
import { action } from '@storybook/addon-actions';
import Text  from '../components/Typography';

export default {
	title: 'Typography',
	component: Text
};

export const Typography = () => <Text>Hello ! I am Text component</Text>;
