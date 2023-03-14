import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Global } from 'theme';

import { type IRoute } from '@interfaces';
import { useAppSelector } from '@store';
import { routes } from '@utils';
import { Layout, ErrorBoundary, CalculatorProvider } from '@components';

import { HOME_ROUTE } from 'constants/routes';

export const App = (): JSX.Element => {
	const theme = useAppSelector((state) => state.theme.theme);

	return (
		<ThemeProvider theme={theme}>
			<CalculatorProvider>
				<ErrorBoundary>
					<Global />
					<Routes>
						<Route path={HOME_ROUTE} element={<Layout />}>
							{routes.map(({ path, Component }: IRoute) => (
								<Route key={path} path={path} element={Component} />
							))}
						</Route>
					</Routes>
				</ErrorBoundary>
			</CalculatorProvider>
		</ThemeProvider>
	);
};
