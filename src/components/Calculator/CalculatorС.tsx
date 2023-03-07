import React from 'react';
import { DisplayC, KeypadC } from '@components';
import { CalculatorWrapper } from './styled';
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

interface DisplayState {
	displayValue: string;
	result: number | null;
	history: string[];
}

export class CalculatorC extends React.Component<Record<string, unknown>, DisplayState> {
	calculator: Calculator;

	constructor(props: any) {
		super(props);

		this.calculator = new Calculator();

		this.state = {
			displayValue: '',
			history: [],
			result: null,
		};
	}

	handleKeyboardClick = (value: string): void => {
		switch (value) {
			case '+':
				this.calculator.executeCommand(new AddPlus());
				break;
			case '-':
				this.calculator.executeCommand(new AddMinus());
				break;
			case '*':
				this.calculator.executeCommand(new AddMultiplier());
				break;
			case '/':
				this.calculator.executeCommand(new AddDivision());
				break;
			case '(':
				this.calculator.executeCommand(new AddOpenParent());
				break;
			case ')':
				this.calculator.executeCommand(new AddCloseParent());
				break;
			case '.':
				this.calculator.executeCommand(new AddDot());
				break;
			case 'C':
				this.calculator.clearExpression();
				this.setState((state) => ({
					...state,
					result: null,
				}));
				break;
			case 'CE':
				this.calculator.undo();
				break;
			case '=':
				this.setState((state) => ({
					...state,
					result: this.calculator.calcResult(),
					history: this.calculator.history,
				}));
				break;
			default:
				this.calculator.executeCommand(new AddNumber(+value));
		}

		this.setState((state) => ({
			...state,
			displayValue: this.calculator.currentExpression,
		}));
	};

	render(): JSX.Element {
		const { result, displayValue } = this.state;

		return (
			<CalculatorWrapper>
				<DisplayC displayValue={displayValue} result={result} />
				<KeypadC handleClick={this.handleKeyboardClick} />
			</CalculatorWrapper>
		);
	}
}
