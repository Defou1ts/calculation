import React from 'react';
import { ErrorBondary, Header } from '@components';
import { LayoutWrapper } from './styled';
import { Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
	return (
		<LayoutWrapper>
			<Header />
			<ErrorBondary>
				<Outlet />
			</ErrorBondary>
		</LayoutWrapper>
	);
};
