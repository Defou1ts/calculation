import React from 'react';

import { Route, Routes } from 'react-router-dom';

import type { RouteElement } from '@interfaces';
import { routes } from '@utils';
import { Layout } from '@components';
import { ROUTES } from '@constants';

export const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path={ROUTES.HOME_ROUTE} element={<Layout />}>
				{routes.map(({ path, Component }: RouteElement) => (
					<Route key={path} path={path} element={Component} />
				))}
			</Route>
		</Routes>
	);
};
