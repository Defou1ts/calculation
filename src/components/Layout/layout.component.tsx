import React from 'react';

import { Outlet } from 'react-router-dom';

import { ErrorBoundary, Header } from '@components';

import { LayoutWrapper } from './styled';

export const Layout = (): JSX.Element => {
	return (
		<LayoutWrapper data-test-id='layout-wrapper'>
			<Header />
			<ErrorBoundary>
				<Outlet />
			</ErrorBoundary>
		</LayoutWrapper>
	);
};
