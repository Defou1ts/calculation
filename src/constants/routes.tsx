import React from 'react';

import { Navigate } from 'react-router-dom';

import type { RouteElement } from '@interfaces';
import { HomeFC, HomeСC, SettingsFC, SettingsCC } from '@pages';

export enum ROUTES {
	HOME_ROUTE = '/',
	HOME_FC_ROUTE = '/fc',
	HOME_CC_ROUTE = '/cc',
	SETTINGS_FC_ROUTE = '/settings-fc',
	SETTINGS_CC_ROUTE = '/settings-cc',
	ALL = '*',
}

const { HOME_CC_ROUTE, HOME_FC_ROUTE, HOME_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE, ALL } = ROUTES;

export const routes: RouteElement[] = [
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
		path: ALL,
		Component: <Navigate to={HOME_FC_ROUTE} replace />,
	},
];
