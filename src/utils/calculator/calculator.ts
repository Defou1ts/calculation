import { type Command } from '@types';
import { Expression } from './expression';

export class Calculator {
	private readonly _expression: Expression = new Expression('');
	private _history: string[] = [];

	executeCommand(command: Command): void {
		this._expression.value = command.execute(this._expression.value);
	}

	calcResult(): number {
		const result = this._expression.calculate();

		this.addToHistory(`${this._expression.value}=${result}`);

		return result;
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

	get expression(): string {
		return this._expression.value;
	}

	set expression(expression: string) {
		this._expression.value = expression;
	}

	clearExpression(): void {
		this._expression.clear();
	}

	undoExpression(): void {
		this._expression.removeLastCharacter();
	}
}
