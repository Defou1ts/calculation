import { type ExpressionCommand, type ICalculator } from 'interfaces/calculator';

import { AddNumber } from './commands';
import { Expression } from './expression';
import { History } from './history';

export class Calculator implements ICalculator {
	private readonly _expression: Expression = new Expression('');
	private readonly _history: History = new History([]);

	executeCommand(command: ExpressionCommand): void {
		const lastHistoryResult = this._history.getLastHistoryResult();

		if (lastHistoryResult === this._expression.calculate() && !(command instanceof AddNumber)) {
			this._expression.value = String(lastHistoryResult);
		}

		if (lastHistoryResult === this._expression.calculate() && command instanceof AddNumber) {
			this._expression.value = '';
		}

		this._expression.value = command.execute(this._expression.value);
	}

	calcResult(): number {
		const lastHistoryExpression = this._history.getLastHistoryExpression();
		const lastHistoryResult = this._history.getLastHistoryResult() ?? '';

		if (this._expression.value === lastHistoryExpression) {
			return +lastHistoryResult;
		}
		const result = +this._expression.calculate().toFixed(3);

		if (result !== 0) {
			this._history.add(`${this._expression.value}=${result}`);
		}

		return result;
	}

	get history(): string[] {
		return this._history.history;
	}

	set history(history: string[]) {
		this._history.history = history;
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
