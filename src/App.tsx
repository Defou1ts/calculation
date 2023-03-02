import React from 'react';
import { Global } from '@styles';
import { useAppSelector } from '@store';
import { Route, Routes } from 'react-router-dom';
import { ErrorBondary } from '@components';
import { type IRoute } from '@types';
import { routes } from '@utils';

export const App = (): JSX.Element => {
	const theme = useAppSelector((state) => state.theme);

	const renderRoutes = (routes: IRoute[]): JSX.Element[] =>
		routes.map(({ path, Component }: IRoute) => <Route key={path} path={path} element={Component} />);

	const renderedRoutes = renderRoutes(routes);

	return (
		<>
			<Global {...theme} />
			<ErrorBondary>
				<Routes>{renderedRoutes}</Routes>
			</ErrorBondary>
		</>
	);
};
