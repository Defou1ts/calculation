import { createContext } from 'react';

import { type Calculator } from '@interfaces';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CalculatorContext = createContext<ICalculatorContext>({} as ICalculatorContext);

export interface ICalculatorContext {
	calculator: Calculator;
	handleKeyboardClick: (value: string) => void;
}
