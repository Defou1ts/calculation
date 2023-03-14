import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout, ErrorBoundary } from '@components';
import { Global } from '@styles';
import { useAppSelector } from '@store';
import { type IRoute } from '@types';
import { routes } from '@utils';
import { HOME_ROUTE } from '@constants';

export const App = (): JSX.Element => {
	const theme = useAppSelector((state) => state.theme.theme);

	return (
		<ThemeProvider theme={theme}>
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
		</ThemeProvider>
	);
};
