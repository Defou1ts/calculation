import React, { useMemo } from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme } from '@theme';
import { type Theme, type RouteElement } from '@interfaces';
import { useAppSelector } from '@store';
import { routes } from '@utils';
import { Layout } from '@components';
import { ROUTES } from '@types';

export const App = (): JSX.Element => {
	const themeType = useAppSelector((state) => state.theme.theme);

	const evaluatedTheme: Theme = useMemo(() => ({ ...theme, themeType }), [themeType]);

	return (
		<ThemeProvider theme={evaluatedTheme}>
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
