import React from 'react';

import { Display, Keypad } from '@components';
import { useCalculator } from '@hooks';

import { CalculatorWrapper } from './styled';

export const CalculatorFC = (): JSX.Element => {
	const { handleKeyboardClick } = useCalculator();

	return (
		<CalculatorWrapper>
			<Display />
			<Keypad handleClick={handleKeyboardClick} />
		</CalculatorWrapper>
	);
};
