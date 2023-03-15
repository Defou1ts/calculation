import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Global } from 'theme';
import { PersistGate } from 'redux-persist/integration/react';

import { type RouteElement } from '@interfaces';
import { persistor, useAppSelector } from '@store';
import { routes } from '@utils';
import { Layout, ErrorBoundary, CalculatorProvider } from '@components';
import { ROUTES } from '@types';

export const App = (): JSX.Element => {
	const theme = useAppSelector((state) => state.theme.theme);

	return (
		<ThemeProvider theme={theme}>
			<PersistGate loading={null} persistor={persistor}>
				<CalculatorProvider>
					<ErrorBoundary>
						<Global />
						<Routes>
							<Route path={ROUTES.HOME_ROUTE} element={<Layout />}>
								{routes.map(({ path, Component }: RouteElement) => (
									<Route key={path} path={path} element={Component} />
								))}
							</Route>
						</Routes>
					</ErrorBoundary>
				</CalculatorProvider>
			</PersistGate>
		</ThemeProvider>
	);
};
