import React from 'react';

import { DisplayFC, KeypadFC } from '@components';
import { useCalculatorContext } from '@hooks';

import { CalculatorWrapper } from '../styled';

export const CalculatorFC = (): JSX.Element => {
	const { handleKeyboardClick } = useCalculatorContext();

	return (
		<CalculatorWrapper>
			<DisplayFC />
			<KeypadFC handleClick={handleKeyboardClick} />
		</CalculatorWrapper>
	);
};
