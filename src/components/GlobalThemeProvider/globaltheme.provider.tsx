import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme, Global } from '@theme';
import { useTheme } from '@hooks';

import { type GlobalThemeProviderProps } from './interfaces';

export const GlobalThemeProvider = ({ children }: GlobalThemeProviderProps): JSX.Element => {
	const { theme: themeType } = useTheme();

	return (
		<ThemeProvider theme={{ ...theme, themeType }}>
			<Global />
			{children}
		</ThemeProvider>
	);
};
