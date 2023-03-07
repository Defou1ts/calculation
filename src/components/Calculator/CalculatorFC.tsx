import React, { useState } from 'react';
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
	const [result, setResult] = useState<number | null>(null);
	const [displayValue, setDisplayValue] = useState<string>('');
	const [history, setHistory] = useState<string[]>([]);

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
				setResult(null);
				break;
			case 'CE':
				calculator.undo();
				break;
			case '=':
				setResult(calculator.calcResult());
				setHistory(calculator.history);
				break;
			default:
				calculator.executeCommand(new AddNumber(+value));
		}

		setDisplayValue(calculator.currentExpression);
	};

	console.log(history);

	return (
		<CalculatorWrapper>
			<Display displayValue={displayValue} result={result} />
			<Keypad handleClick={handleKeyboardClick} />
		</CalculatorWrapper>
	);
};
