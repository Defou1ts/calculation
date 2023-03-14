import { type ExpressionCommand, type OperatorCommand } from '@interfaces';

import { CalculatorExceptionType } from './exceptions';

export class AddNumber implements ExpressionCommand {
	constructor(private readonly value: number) {}

	execute(expression: string): string {
		if (!isFinite(this.value)) throw new Error(CalculatorExceptionType.NOT_NUMBER_ERROR);
		return `${expression}${this.value}`;
	}
}

export class AddPlus implements ExpressionCommand {
	execute(expression: string): string {
		if (expression.slice(-1) === '+') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}+`;
	}
}

export class AddMinus implements ExpressionCommand {
	execute(expression: string): string {
		if (expression.slice(-1) === '-') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}-`;
	}
}

export class AddDivision implements ExpressionCommand {
	execute(expression: string): string {
		if (expression.slice(-1) === '/') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}/`;
	}
}

export class AddMultiplier implements ExpressionCommand {
	execute(expression: string): string {
		if (expression.slice(-1) === '*') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}*`;
	}
}

export class AddDot implements ExpressionCommand {
	execute(expression: string): string {
		if (expression.slice(-1) === '.') throw new Error(CalculatorExceptionType.DOUBLE_OPERATOR_ERROR);
		return `${expression}.`;
	}
}

export class AddOpenParent implements ExpressionCommand {
	execute(expression: string): string {
		return `${expression}(`;
	}
}

export class AddCloseParent implements ExpressionCommand {
	execute(expression: string): string {
		return `${expression})`;
	}
}

export class SumCommand implements OperatorCommand {
	constructor(private readonly firstValue: number, private readonly secondValue: number) {}

	execute(): number {
		return this.firstValue + this.secondValue;
	}
}

export class SubCommand implements OperatorCommand {
	constructor(private readonly firstValue: number, private readonly secondValue: number) {}

	execute(): number {
		return this.firstValue - this.secondValue;
	}
}

export class MultiplyCommand implements OperatorCommand {
	constructor(private readonly firstValue: number, private readonly secondValue: number) {}

	execute(): number {
		return this.firstValue * this.secondValue;
	}
}

export class DivideCommand implements OperatorCommand {
	constructor(private readonly firstValue: number, private readonly secondValue: number) {}

	execute(): number {
		return this.firstValue / this.secondValue;
	}
}
