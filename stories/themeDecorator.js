import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import '@storybook/addon-knobs/register';
import '@storybook/addon-actions/register';
import { withA11y } from '@storybook/addon-a11y';

import { theme } from '../src/theme';
import { globalStyles } from '../src/theme/globalStyles';

const ThemeDecorator = (storyFn) => (
	<ThemeProvider theme={theme}>
		<Global styles={globalStyles} /> {storyFn()}
	</ThemeProvider>
);

const withTheme = (Component) => (props) => {
	return (
		<ThemeProvider theme={theme}>
			<Global styles={globalStyles} /> <Component {...props} />
		</ThemeProvider>
	);
};
// export const ThemeColors = withTheme(ThemeColorsWrapper);

const defaultDecoratorArr = [ThemeDecorator, withA11y];
export { defaultDecoratorArr, withTheme };
export default ThemeDecorator;
