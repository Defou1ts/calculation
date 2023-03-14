import { type ICalculator } from '@interfaces';

export interface ICalculatorContext {
	calculator: ICalculator;
	handleKeyboardClick: (value: string) => void;
}
