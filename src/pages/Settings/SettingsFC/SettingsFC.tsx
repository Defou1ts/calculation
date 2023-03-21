import React from 'react';

import { ButtonFC, SwitchFC } from '@components';
import { useTheme } from '@hooks';
import { useAppSelector } from '@store';
import { ThemeName } from '@types';

import { ControlPanel } from '../styled';

export const SettingsFC = (): JSX.Element => {
	const { toggleTheme } = useTheme();

	const theme = useAppSelector((state) => state.theme.theme.themeName);
	const isOpenedHistory = useAppSelector((state) => state.global.isOpenedHistory);

	const handleClick = (): void => {
		toggleTheme();
	};

	return (
		<ControlPanel>
			<SwitchFC data-test-id="theme-switch" onClick={handleClick} active={theme === ThemeName.DARK} />
			<ButtonFC type="clear history" />
			<ButtonFC type={isOpenedHistory ? 'close history' : 'open history'} />
		</ControlPanel>
	);
};
