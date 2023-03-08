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
import { type RootState, setDisplayValue, setHistory, setResult } from '@store';
import { connect, type ConnectedProps } from 'react-redux';

class CalculatorClass extends React.Component<CalculatorProps> {
	calculator: Calculator;

	constructor(props: any) {
		super(props);

		this.calculator = new Calculator();
	}

	componentDidMount(): void {
		this.calculator.currentExpression = this.props.displayValue;
		this.calculator.history = this.props.history;
	}

	handleKeyboardClick = (value: string): void => {
		const { setResult, setHistory, setDisplayValue } = this.props;
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
				setResult(null);
				break;
			case 'CE':
				this.calculator.undo();
				break;
			case '=':
				setResult(this.calculator.calcResult());
				setHistory(this.calculator.history);
				break;
			default:
				this.calculator.executeCommand(new AddNumber(+value));
		}

		setDisplayValue(this.calculator.currentExpression);
	};

	render(): JSX.Element {
		return (
			<CalculatorWrapper>
				<DisplayC />
				<KeypadC handleClick={this.handleKeyboardClick} />
			</CalculatorWrapper>
		);
	}
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
	displayValue: state.calculator.displayValue,
	history: state.calculator.history,
	result: state.calculator.result,
});

const mapDispatch = {
	setResult: (result: number | null) => setResult(result),
	setHistory: (history: string[]) => setHistory(history),
	setDisplayValue: (value: string) => setDisplayValue(value),
};

const connector = connect(mapState, mapDispatch);

type CalculatorProps = ConnectedProps<typeof connector>;

export const CalculatorC = connector(CalculatorClass);
