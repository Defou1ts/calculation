import { useEffect } from 'react';

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

export const useCalculator = (): void => {
	const history = useAppSelector((state) => state.calculator.history);
	const displayValue = useAppSelector((state) => state.calculator.displayValue);
	const result = useAppSelector((state) => state.calculator.result);
	const command = useAppSelector((state) => state.calculator.command);

	const dispatch = useAppDispatch();

	const handleCommand = (command: string | null): void => {
		switch (command) {
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
			case null:
				break;
			default:
				calculator.executeCommand(addNumber(+command));
		}
		dispatch(setResult(calculator.result));
		dispatch(setDisplayValue(calculator.expression));
	};

	useEffect(() => {
		handleCommand(command);
	}, [command]);

	useEffect(() => {
		calculator.expression = displayValue;
		calculator.result = result;
		calculator.history = history;
	}, [displayValue, result, history]);
};
