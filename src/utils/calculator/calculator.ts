import { type Command } from '@types';
import { Expression } from './expression';

export class Calculator {
	private readonly expression: Expression = new Expression('');
	private _history: string[] = [];

	executeCommand(command: Command): void {
		this.expression.value = command.execute(this.expression.value);
	}

	calcResult(): number {
		const result = this.expression.calculate();

		this.addToHistory(`${this.expression.value}=${result}`);

		return result;
	}

	undo(): void {
		this.expression.removeLastCharacter();
	}

	clearExpression(): void {
		this.expression.clear();
	}

	get currentExpression(): string {
		return this.expression.value;
	}

	set currentExpression(expression: string) {
		this.expression.value = expression;
	}

	private addToHistory(expression: string): void {
		this._history = [...this._history, expression];
	}

	get history(): string[] {
		return this._history;
	}

	set history(history: string[]) {
		this._history = history;
	}
}
