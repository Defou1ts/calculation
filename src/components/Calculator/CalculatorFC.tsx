import React from 'react';

import { Display, Keypad } from '@components';
import { useCalculatorContext } from '@hooks';

import { CalculatorWrapper } from './styled';

export const CalculatorFC = (): JSX.Element => {
	const { handleKeyboardClick } = useCalculatorContext();

	return (
		<CalculatorWrapper>
			<Display />
			<Keypad handleClick={handleKeyboardClick} />
		</CalculatorWrapper>
	);
};
