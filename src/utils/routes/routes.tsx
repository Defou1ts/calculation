import React from 'react';
import { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } from '@constants';
import { type IRoute } from '@types';
import { Navigate } from 'react-router-dom';
import { Home, HomeС } from '@pages';

export const routes: IRoute[] = [
	{
		path: HOME_FC_ROUTE,
		Component: <Home />,
	},
	{
		path: HOME_CC_ROUTE,
		Component: <HomeС />,
	},
	{
		path: SETTINGS_FC_ROUTE,
		Component: 'SettingsFC',
	},
	{
		path: SETTINGS_CC_ROUTE,
		Component: 'SettingsCC',
	},
	{
		path: '*',
		Component: <Navigate to={HOME_FC_ROUTE} replace />,
	},
];
