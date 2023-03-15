export interface OperatorCommand {
	execute: () => number;
}

export interface Expression {
	get value(): string;
	set value(expression: string);

	executeCommand: (command: OperatorCommand) => number;

	removeLastCharacter: () => void;
	clear: () => void;

	calculate: () => number;
}
