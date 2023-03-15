export interface ExpressionCommand {
	execute: (expression: string) => string;
}

export interface Calculator {
	executeCommand: (command: ExpressionCommand) => void;
	calcResult: () => number;

	get history(): string[];
	set history(history: string[]);

	get expression(): string;
	set expression(expression: string);

	clearExpression: () => void;
	undoExpression: () => void;
}
