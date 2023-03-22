import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import type { RouteElement } from '@interfaces';
import { routes } from '@utils';
import { Layout } from '@components';
import { ROUTES } from '@constants';
import { useTheme } from '@hooks';
import { theme } from '@theme';

export const App = (): JSX.Element => {
	const { theme: themeType } = useTheme();

	return (
		<ThemeProvider theme={{ ...theme, themeType }}>
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
