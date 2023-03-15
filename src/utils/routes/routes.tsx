import React from 'react';

import { Navigate } from 'react-router-dom';

import { ROUTES } from '@types';
import { type RouteElement } from '@interfaces';
import { HomeFC, HomeСC, SettingsFC, SettingsCC } from '@pages';

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
