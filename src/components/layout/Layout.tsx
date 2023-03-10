import React from 'react';
import { ErrorBondary } from '@components';
import { Header } from './Header/Header';
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
