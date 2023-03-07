import { type Command } from '@types';
import { Expression } from './expression';

export class Calculator {
	private readonly expression: Expression = new Expression('');
	private readonly _history: string[] = [];

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

	private addToHistory(expression: string): void {
		this._history.push(expression);
	}

	get history(): string[] {
		return this._history;
	}
}
