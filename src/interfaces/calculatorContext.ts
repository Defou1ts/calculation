import { createContext } from 'react';

import type { Calculator } from '@interfaces';

export const CalculatorContext = createContext<ICalculatorContext>({} as any as ICalculatorContext);

export interface ICalculatorContext {
	calculator: Calculator;
	handleKeyboardClick: (value: string) => void;
}
