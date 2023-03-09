import React from 'react';
import { Switch } from '@components';
import { useTheme } from '@hooks';
import { SettingsWrapper } from './styled';
import { useAppSelector } from '@store';
import { ThemeType } from '@types';

export const Settings = (): JSX.Element => {
	const { toggleTheme } = useTheme();
	const theme = useAppSelector((state) => state.theme.theme);

	const handleClick = (): void => {
		toggleTheme();
	};

	return (
		<SettingsWrapper>
			<Switch onClick={handleClick} active={theme === ThemeType.DARK} />
			<span>clearHistory</span>
		</SettingsWrapper>
	);
};
