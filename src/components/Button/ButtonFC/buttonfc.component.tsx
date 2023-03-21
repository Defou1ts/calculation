import React from 'react';

import { useDispatch } from 'react-redux';

import { setHistory, toggleIsOpenedHistory } from '@store';

import { StyledButton } from '../styled';

import type { ButtonProps } from '../interfaces';

export const ButtonFC = ({ type }: ButtonProps): JSX.Element => {
	const dispatch = useDispatch();

	const handleClearHistory = (): void => {
		dispatch(setHistory([]));
	};

	const handleToggleIsOpenedHistory = (): void => {
		dispatch(toggleIsOpenedHistory());
	};

	switch (type) {
		case 'open history':
			return <StyledButton onClick={handleToggleIsOpenedHistory}>Open history</StyledButton>;
		case 'clear history':
			return (
				<StyledButton data-test-id="clear-history" onClick={handleClearHistory}>
					Clear all history
				</StyledButton>
			);
		case 'close history':
			return <StyledButton onClick={handleToggleIsOpenedHistory}>Close history</StyledButton>;

		default:
			return <></>;
	}
};
