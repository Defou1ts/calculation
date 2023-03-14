import React, { useCallback, useEffect, useState } from 'react';

import { Display, Keypad } from '@components';
import { setDisplayValue, setHistory, setResult, useAppDispatch, useAppSelector } from '@store';
import {
	AddCloseParent,
	AddDivision,
	AddDot,
	AddMinus,
	AddMultiplier,
	AddNumber,
	AddOpenParent,
	AddPlus,
	Calculator,
} from '@utils';

import { CalculatorWrapper } from './styled';

export const CalculatorFC = (): JSX.Element => {
	const [calculator] = useState<Calculator>(new Calculator());

	const dispatch = useAppDispatch();

	const history = useAppSelector((state) => state.calculator.history);
	const displayValue = useAppSelector((state) => state.calculator.displayValue);

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
				calculator.clearExpression();
				dispatch(setResult(null));
				break;
			case 'CE':
				calculator.undoExpression();
				break;
			case '=':
				dispatch(setResult(calculator.calcResult()));
				dispatch(setHistory(calculator.history));
				break;
			default:
				calculator.executeCommand(new AddNumber(+value));
		}
		dispatch(setDisplayValue(calculator.expression));
	}, []);

	useEffect(() => {
		calculator.expression = displayValue;
		calculator.history = history;
	}, []);

	return (
		<CalculatorWrapper>
			<Display />
			<Keypad handleClick={handleKeyboardClick} />
		</CalculatorWrapper>
	);
};
