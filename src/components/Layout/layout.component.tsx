import React from 'react';

import { Outlet } from 'react-router-dom';

import { ErrorBoundary, Header } from '@components';

import { LayoutWrapper } from './styled';

export const Layout = (): JSX.Element => {
	return (
		<LayoutWrapper>
			<Header />
			<ErrorBoundary>
				<Outlet />
			</ErrorBoundary>
		</LayoutWrapper>
	);
};
