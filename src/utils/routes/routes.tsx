import React from 'react';

import { Navigate } from 'react-router-dom';

import { HOME_CC_ROUTE, HOME_FC_ROUTE, HOME_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } from '@constants';
import { type IRoute } from '@types';
import { Home, HomeС, Settings, SettingsC } from '@pages';

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
		Component: <Settings />,
	},
	{
		path: SETTINGS_CC_ROUTE,
		Component: <SettingsC />,
	},
	{
		path: HOME_ROUTE,
		Component: <Navigate to={HOME_FC_ROUTE} replace />,
	},
	{
		path: '*',
		Component: <Navigate to={HOME_FC_ROUTE} replace />,
	},
];
