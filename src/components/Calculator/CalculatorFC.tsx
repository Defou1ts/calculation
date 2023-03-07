import React, { useEffect, useState } from 'react';
import { useAppDispatch, setResult, setHistory, setDisplayValue, useAppSelector } from '@store';
import { Display, Keypad } from '@components';
import { CalculatorWrapper } from './styled';
import {
	AddCloseParent,
	AddDivision,
	AddMinus,
	AddMultiplier,
	AddNumber,
	AddOpenParent,
	AddPlus,
	Calculator,
} from '@utils';

export const CalculatorFC = (): JSX.Element => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [calculator, _] = useState<Calculator>(new Calculator());

	const dispatch = useAppDispatch();

	const history = useAppSelector((state) => state.calculator.history);
	const displayValue = useAppSelector((state) => state.calculator.displayValue);

	const handleKeyboardClick = (value: string): void => {
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
			case 'C':
				calculator.clearExpression();
				dispatch(setResult(null));
				break;
			case 'CE':
				calculator.undo();
				break;
			case '=':
				dispatch(setResult(calculator.calcResult()));
				dispatch(setHistory(calculator.history));
				break;
			default:
				calculator.executeCommand(new AddNumber(+value));
		}

		dispatch(setDisplayValue(calculator.currentExpression));
	};

	useEffect(() => {
		calculator.currentExpression = displayValue;
		calculator.history = history;
	}, []);

	return (
		<CalculatorWrapper>
			<Display />
			<Keypad handleClick={handleKeyboardClick} />
		</CalculatorWrapper>
	);
};
