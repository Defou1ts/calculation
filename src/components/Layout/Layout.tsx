import React from 'react';

import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '@components';

import { Header } from './Header/Header';
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
