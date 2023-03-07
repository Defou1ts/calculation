export interface Command {
	execute: (expression: string) => string;
}
