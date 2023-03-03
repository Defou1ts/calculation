import React from 'react';
import { Global } from '@styles';
import { useAppSelector } from '@store';
import { Route, Routes } from 'react-router-dom';
import { ErrorBondary, Layout } from '@components';
import { type IRoute } from '@types';
import { routes } from '@utils';
import { HOME_ROUTE } from '@constants';

export const App = (): JSX.Element => {
	const theme = useAppSelector((state) => state.theme);

	const renderRoutes = (routes: IRoute[]): JSX.Element[] =>
		routes.map(({ path, Component }: IRoute) => <Route key={path} path={path} element={Component} />);

	const renderedRoutes = renderRoutes(routes);

	return (
		<>
			<Global {...theme} />
			<ErrorBondary>
				<Routes>
					<Route path={HOME_ROUTE} element={<Layout />}>
						{renderedRoutes}
					</Route>
				</Routes>
			</ErrorBondary>
		</>
	);
};
