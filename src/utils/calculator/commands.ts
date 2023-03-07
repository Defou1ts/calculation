import { type Command } from '@types';
import { CalculatorExceptionType } from './exceptions';

export class AddNumber implements Command {
	constructor(private readonly value: number) {}

	execute(expression: string): string {
		if (!isFinite(this.value)) throw new Error(CalculatorExceptionType.NOT_NUMBER_ERROR);
		return `${expression}${this.value}`;
	}
}

export class AddPlus implements Command {
	execute(expression: string): string {
		if (expression.slice(-1) === '+') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}+`;
	}
}

export class AddMinus implements Command {
	execute(expression: string): string {
		if (expression.slice(-1) === '-') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}-`;
	}
}

export class AddDivision implements Command {
	execute(expression: string): string {
		if (expression.slice(-1) === '/') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}/`;
	}
}

export class AddMultiplier implements Command {
	execute(expression: string): string {
		if (expression.slice(-1) === '*') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}*`;
	}
}

export class AddDot implements Command {
	execute(expression: string): string {
		if (expression.slice(-1) === '.') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}.`;
	}
}

export class AddOpenParent implements Command {
	execute(expression: string): string {
		return `${expression}(`;
	}
}

export class AddCloseParent implements Command {
	execute(expression: string): string {
		return `${expression})`;
	}
}
