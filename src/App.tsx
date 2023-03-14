import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Global } from '@styles';
import { useAppSelector } from '@store';
import { Layout } from '@components';
import { type IRoute } from '@types';
import { routes } from '@utils';
import { HOME_ROUTE } from '@constants';

export const App = (): JSX.Element => {
	const theme = useAppSelector((state) => state.theme);

	return (
		<>
			<Global {...theme} />
			<Routes>
				<Route path={HOME_ROUTE} element={<Layout />}>
					{routes.map(({ path, Component }: IRoute) => (
						<Route key={path} path={path} element={Component} />
					))}
				</Route>
			</Routes>
		</>
	);
};
