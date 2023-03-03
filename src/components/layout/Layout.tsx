import React from 'react';
import { Header } from './Header';
import { LayoutWrapper } from './styled';
import { Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
	return (
		<LayoutWrapper>
			<Header />
			<Outlet />
		</LayoutWrapper>
	);
};
