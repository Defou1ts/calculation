import { useCallback, useEffect } from 'react';

import { useAppDispatch, setResult, setHistory, setDisplayValue, useAppSelector } from '@store';
import {
	addPlus,
	addMinus,
	addMultiplier,
	addDivision,
	addOpenParent,
	addCloseParent,
	addDot,
	addNumber,
	calculator,
} from '@utils';
import type { ICalculatorContext } from '@interfaces';

export const useCalculator = (): ICalculatorContext => {
	const history = useAppSelector((state) => state.calculator.history);
	const displayValue = useAppSelector((state) => state.calculator.displayValue);
	const result = useAppSelector((state) => state.calculator.result);

	const dispatch = useAppDispatch();

	const handleKeyboardClick = useCallback((value: string): void => {
		switch (value) {
			case '+':
				calculator.executeCommand(addPlus());
				break;
			case '-':
				calculator.executeCommand(addMinus());
				break;
			case '*':
				calculator.executeCommand(addMultiplier());
				break;
			case '/':
				calculator.executeCommand(addDivision());
				break;
			case '(':
				calculator.executeCommand(addOpenParent());
				break;
			case ')':
				calculator.executeCommand(addCloseParent());
				break;
			case '.':
				calculator.executeCommand(addDot());
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
				calculator.executeCommand(addNumber(+value));
		}
		dispatch(setResult(calculator.result));
		dispatch(setDisplayValue(calculator.expression));
	}, []);

	useEffect(() => {
		calculator.expression = displayValue;
		calculator.result = result;
		calculator.history = history;
	}, [displayValue, result, history]);

	return { calculator, handleKeyboardClick };
};
