import React from 'react';

import { Navigate } from 'react-router-dom';

import { HOME_CC_ROUTE, HOME_FC_ROUTE, HOME_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } from '@constants';
import { type IRoute } from '@interfaces';
import { HomeFC, HomeСC, SettingsFC, SettingsCC } from '@pages';

export const routes: IRoute[] = [
	{
		path: HOME_FC_ROUTE,
		Component: <HomeFC />,
	},
	{
		path: HOME_CC_ROUTE,
		Component: <HomeСC />,
	},
	{
		path: SETTINGS_FC_ROUTE,
		Component: <SettingsFC />,
	},
	{
		path: SETTINGS_CC_ROUTE,
		Component: <SettingsCC />,
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
