import type { ReactNode } from 'react';

import type { ROUTES } from '@constants';

export interface RouteElement {
	path: ROUTES;
	Component: ReactNode;
}
