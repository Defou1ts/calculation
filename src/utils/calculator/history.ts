import type { History } from '@interfaces';

export class HistoryService implements History {
	constructor(private _history: string[]) {}

	get history(): string[] {
		return this._history;
	}

	set history(history: string[]) {
		this._history = history;
	}

	add(expression: string): void {
		this._history = [expression, ...this._history];
	}

	getLasHistoryItem(): string {
		return this._history[0];
	}

	getLastHistoryExpression(): string | null {
		return this._history.length > 0 ? this.getLasHistoryItem().split('=')[0] : null;
	}

	getLastHistoryResult(): number | null {
		return this._history.length > 0 ? +this.getLasHistoryItem().split('=')[1] : null;
	}
}
