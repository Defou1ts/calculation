import React from 'react';

import { useDispatch } from 'react-redux';

import { ButtonFC, SwitchFC } from '@components';
import { toggleTheme, useAppSelector } from '@store';
import { ThemeName } from '@constants';

import { ControlPanel } from '../styled';

export const SettingsFC = (): JSX.Element => {
	const dispatch = useDispatch();

	const theme = useAppSelector((state) => state.theme.themeName);
	const isOpenedHistory = useAppSelector((state) => state.history.isOpenedHistory);

	const handleClick = (): void => {
		dispatch(toggleTheme());
	};

	return (
		<ControlPanel>
			<SwitchFC data-test-id="theme-switch" onClick={handleClick} active={theme === ThemeName.DARK} />
			<ButtonFC type="clear history" />
			<ButtonFC type={isOpenedHistory ? 'close history' : 'open history'} />
		</ControlPanel>
	);
};
