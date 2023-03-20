import React from 'react';

import { CalculatorContext } from '@interfaces';
import { useCalculator } from '@hooks';

import type { CalculatorProviderProps } from './interfaces';

export const CalculatorProvider = ({ children }: CalculatorProviderProps): JSX.Element => {
	const { calculator, handleKeyboardClick } = useCalculator();

	return (
		<CalculatorContext.Provider value={{ calculator, handleKeyboardClick }}>{children}</CalculatorContext.Provider>
	);
};
