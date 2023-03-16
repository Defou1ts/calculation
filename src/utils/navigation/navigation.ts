import { type NavigationElement } from '@interfaces';
import { ROUTES } from '@types';

const { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } = ROUTES;

export const navigationElements: NavigationElement[] = [
	{
		name: 'Home FC',
		path: HOME_FC_ROUTE,
	},
	{
		name: 'Home CC',
		path: HOME_CC_ROUTE,
	},
	{
		name: 'Settings FC',
		path: SETTINGS_FC_ROUTE,
	},
	{
		name: 'Settings CC',
		path: SETTINGS_CC_ROUTE,
	},
];
