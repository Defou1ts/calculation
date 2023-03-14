import React, { createContext } from 'react';

import { type ICalculatorContext } from '@interfaces';
import { useKeyboardClick } from '@hooks';

import { type CalculatorProviderProps } from './interfaces';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CalculatorContext = createContext<ICalculatorContext>({} as ReturnType<typeof useKeyboardClick>);

export const CalculatorProvider = ({ children }: CalculatorProviderProps): JSX.Element => {
	const { calculator, handleKeyboardClick } = useKeyboardClick();

	return (
		<CalculatorContext.Provider value={{ calculator, handleKeyboardClick }}>{children}</CalculatorContext.Provider>
	);
};
