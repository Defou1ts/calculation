import React from 'react';

import { useDispatch } from 'react-redux';

import { setHistory, toggleIsOpenedHistory } from '@store';

import { StyledButton } from '../styled';

import type { ButtonProps } from '../interfaces';

export const ButtonFC = ({ type }: ButtonProps): JSX.Element => {
	const dispatch = useDispatch();

	const { type: buttonType } = type;

	const handleClick = (): void => {
		if (buttonType === 'clear') {
			dispatch(setHistory([]));
		}
		if (buttonType === 'close' || buttonType === 'open') {
			dispatch(toggleIsOpenedHistory());
		}
	};

	return (
		<StyledButton data-test-id={type.id} onClick={handleClick}>
			{type.title}
		</StyledButton>
	);
};
