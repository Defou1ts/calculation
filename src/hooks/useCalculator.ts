import { useState, useCallback } from 'react';

import { useAppDispatch, setResult, setHistory, setDisplayValue } from '@store';
import {
	CalculatorService,
	AddPlus,
	AddMinus,
	AddMultiplier,
	AddDivision,
	AddOpenParent,
	AddCloseParent,
	AddDot,
	AddNumber,
} from '@utils';
import { type ICalculatorContext } from '@interfaces';

export const useCalculator = (): ICalculatorContext => {
	const [calculator] = useState<CalculatorService>(new CalculatorService());

	const dispatch = useAppDispatch();

	const handleKeyboardClick = useCallback((value: string): void => {
		switch (value) {
			case '+':
				calculator.executeCommand(new AddPlus());
				break;
			case '-':
				calculator.executeCommand(new AddMinus());
				break;
			case '*':
				calculator.executeCommand(new AddMultiplier());
				break;
			case '/':
				calculator.executeCommand(new AddDivision());
				break;
			case '(':
				calculator.executeCommand(new AddOpenParent());
				break;
			case ')':
				calculator.executeCommand(new AddCloseParent());
				break;
			case '.':
				calculator.executeCommand(new AddDot());
				break;
			case 'C':
				calculator.clear();
				break;
			case 'CE':
				calculator.undoExpression();
				break;
			case '=':
				calculator.calcResult();
				dispatch(setHistory(calculator.history));
				break;
			default:
				calculator.executeCommand(new AddNumber(+value));
		}
		dispatch(setResult(calculator.result));
		dispatch(setDisplayValue(calculator.expression));
	}, []);

	return { calculator, handleKeyboardClick };
};
