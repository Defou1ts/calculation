import React from 'react';

import { ButtonFC, SwitchFC } from '@components';
import { useTheme } from '@hooks';
import { setHistory, toggleIsOpenedHistory, useAppDispatch, useAppSelector } from '@store';
import { ThemeType } from '@types';

import { ControlPanel } from '../styled';

export const SettingsFC = (): JSX.Element => {
	const { toggleTheme } = useTheme();
	const dispatch = useAppDispatch();

	const theme = useAppSelector((state) => state.theme.theme.themeType);
	const isOpenedHistory = useAppSelector((state) => state.global.isOpenedHistory);

	const handleClick = (): void => {
		toggleTheme();
	};

	const handleClearHistory = (): void => {
		dispatch(setHistory([]));
	};

	const handleToggleIsOpenedHistory = (): void => {
		dispatch(toggleIsOpenedHistory());
	};

	return (
		<ControlPanel>
			<SwitchFC data-test-id="theme-switch" onClick={handleClick} active={theme === ThemeType.DARK} />
			<ButtonFC data-test-id="clear-history" onClick={handleClearHistory}>
				Clear all history
			</ButtonFC>
			<ButtonFC onClick={handleToggleIsOpenedHistory}>
				{isOpenedHistory ? 'Close history' : 'Open history'}
			</ButtonFC>
		</ControlPanel>
	);
};
