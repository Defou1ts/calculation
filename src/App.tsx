import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import type { RouteElement } from '@interfaces';
import { Global, theme } from '@theme';
import { routes } from '@utils';
import { Layout } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';

export const App = (): JSX.Element => {
	const { theme: themeType } = useTheme();

	return (
		<ThemeProvider theme={{ ...theme, themeType }}>
			<Global />
			<Routes>
				<Route path={ROUTES.HOME_ROUTE} element={<Layout />}>
					{routes.map(({ path, Component }: RouteElement) => (
						<Route key={path} path={path} element={Component} />
					))}
				</Route>
			</Routes>
		</ThemeProvider>
	);
};
