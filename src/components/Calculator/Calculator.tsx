import React from 'react';
import { Display, Keypad } from '@components';
import { CalculatorWrapper } from './styled';

export const Calculator = (): JSX.Element => {
	return (
		<CalculatorWrapper>
			<Display />
			<Keypad />
		</CalculatorWrapper>
	);
};
