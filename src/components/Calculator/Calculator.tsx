import React from 'react';
import { Display, Keyboard } from '@components';
import { CalculatorWrapper } from './styled';

export const Calculator = (): JSX.Element => {
	return (
		<CalculatorWrapper>
			<Display />
			<Keyboard />
		</CalculatorWrapper>
	);
};
