import { createContext } from 'react';

import { type ICalculator } from '@interfaces';

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const CalculatorContext = createContext<ICalculatorContext>({} as ICalculatorContext);

export interface ICalculatorContext {
	calculator: ICalculator;
	handleKeyboardClick: (value: string) => void;
}
