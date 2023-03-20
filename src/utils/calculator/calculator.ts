import { type ExpressionCommand, type Calculator } from 'interfaces/calculator';

import { AddNumber, OperatorExpressionCommand } from './commands';
import { ExpressionExceptionType } from './exceptions';
import { ExpressionService } from './expression';
import { HistoryService } from './history';

export class CalculatorService implements Calculator {
	private readonly _expression: ExpressionService = new ExpressionService('');
	private readonly _history: HistoryService = new HistoryService([]);
	result: string = '';

	executeCommand(command: ExpressionCommand): void {
		const lastHistoryResult = this._history.getLastHistoryResult();

		try {
			if (
				lastHistoryResult === +this._expression.calculate().toFixed(3) &&
				command instanceof OperatorExpressionCommand
			) {
				this._expression.value = String(lastHistoryResult);
				this.result = '';
			}

			if (lastHistoryResult === this._expression.calculate() && command instanceof AddNumber) {
				this._expression.value = '';
			}
		} catch (error: unknown) {}

		if (command instanceof AddNumber && this.result !== '') {
			this.result = '';
		}

		try {
			this._expression.value = command.execute(this._expression.value);
		} catch (e) {}
	}

	calcResult(): void {
		const lastHistoryExpression = this._history.getLastHistoryExpression();
		const lastHistoryResult = this._history.getLastHistoryResult() ?? '';

		if (this._expression.value === lastHistoryExpression) {
			this.result = String(lastHistoryResult);
			return;
		}

		try {
			const result = String(+this._expression.calculate().toFixed(3));

			if (result === 'NaN') {
				throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
			}

			if (result === 'Infinity') {
				throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
			}

			if (result === this._expression.value) {
				throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
			}

			if (+result !== 0) {
				this._history.add(`${this._expression.value}=${result}`);
			}

			this.result = result;
		} catch (e) {
			if (e instanceof Error) {
				this.result = e.message;
			}
		}
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

	clear(): void {
		this.clearExpression();
		this.clearResult();
	}

	clearResult(): void {
		this.result = '';
	}

	clearExpression(): void {
		this._expression.clear();
	}

	undoExpression(): void {
		this._expression.removeLastCharacter();
	}
}

export const calculator = new CalculatorService();
