import { type ReactNode } from 'react';

import { type ROUTES } from '@types';

export interface RouteElement {
	path: ROUTES;
	Component: ReactNode;
}
