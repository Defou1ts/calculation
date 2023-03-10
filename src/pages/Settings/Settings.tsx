import React from 'react';
import { Button, Switch } from '@components';
import { useTheme } from '@hooks';
import { ControlPanel } from './styled';
import { setHistory, useAppDispatch, useAppSelector } from '@store';
import { ThemeType } from '@types';

export const Settings = (): JSX.Element => {
	const { toggleTheme } = useTheme();
	const dispatch = useAppDispatch();

	const theme = useAppSelector((state) => state.theme.theme);

	const handleClick = (): void => {
		toggleTheme();
	};

	const handleClearHistory = (): void => {
		dispatch(setHistory([]));
	};

	return (
		<ControlPanel>
			<Switch data-test-id="theme-switch" onClick={handleClick} active={theme === ThemeType.DARK} />
			<Button data-test-id="clear-history" onClick={handleClearHistory}>
				Clear all history
			</Button>
		</ControlPanel>
	);
};
