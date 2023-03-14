import React from 'react';

import { Outlet } from 'react-router-dom';

import { ErrorBondary } from '@components';

import { Header } from './Header/Header';
import { LayoutWrapper } from './styled';

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
