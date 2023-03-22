import React from 'react';

import { useDispatch } from 'react-redux';

import { useAppSelector, toggleTheme } from '@store';

import { Round, SwitchWrapper } from '../styled';

export const SwitchFC = (): JSX.Element => {
	const dispatch = useDispatch();

	const theme = useAppSelector((state) => state.theme.themeName);

	const handleClick = (): void => {
		dispatch(toggleTheme());
	};

	return (
		<SwitchWrapper data-test-id="theme-switch" onClick={handleClick}>
			<Round active={theme === 'dark'} />
		</SwitchWrapper>
	);
};
