import React from 'react';
import { Global } from '@styles';
import { useAppSelector } from '@store';
import { Route, Routes, Navigate } from 'react-router-dom';
import { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_FC_ROUTE, SETTINGS_CC_ROUTE } from '@constants';
import { ErrorBondary } from '@components';

function App(): JSX.Element {
	const theme = useAppSelector((state) => state.theme);

	return (
		<>
			<Global {...theme} />
			<ErrorBondary>
				<Routes>
					<Route path={HOME_FC_ROUTE} element={'LayoutFC'} />
					<Route path={HOME_CC_ROUTE} element={'LayoutCC'} />
					<Route path={SETTINGS_FC_ROUTE} element={'SettingsFC'} />
					<Route path={SETTINGS_CC_ROUTE} element={'SettingsCC'} />
					<Route path="*" element={<Navigate to={HOME_FC_ROUTE} />} />
				</Routes>
			</ErrorBondary>
		</>
	);
}

export default App;
