export interface ExpressionCommand {
	execute: (expression: string) => string;
}

export interface Calculator {
	result: number | '';
	executeCommand: (command: ExpressionCommand) => void;
	calcResult: () => void;

	get history(): string[];
	set history(history: string[]);

	get expression(): string;
	set expression(expression: string);

	clearExpression: () => void;
	undoExpression: () => void;
}
