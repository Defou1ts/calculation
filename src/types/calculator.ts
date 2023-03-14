export interface ExpressionCommand {
	execute: (expression: string) => string;
}

export interface OperatorCommand {
	execute: () => number;
}

export interface ICalculator {
	executeCommand: (command: ExpressionCommand) => void;
	calcResult: () => number;

	get history(): string[];
	set history(history: string[]);

	get expression(): string;
	set expression(expression: string);

	clearExpression: () => void;
	undoExpression: () => void;
}

export interface IExpression {
	get value(): string;
	set value(expression: string);

	executeCommand: (command: OperatorCommand) => number;

	removeLastCharacter: () => void;
	clear: () => void;

	calculate: () => number;
}
