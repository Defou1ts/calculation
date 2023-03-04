import React from 'react';
import { Keyboard } from '@components';
import { CalculatorWrapper } from './styled';

export const Calculator = (): JSX.Element => {
	return (
		<CalculatorWrapper>
			<h1>Monitor</h1>
			<Keyboard />
		</CalculatorWrapper>
	);
};
