export interface History {
	get history(): string[];

	set history(history: string[]);

	add: (expression: string) => void;

	getLasHistoryItem: () => string;

	getLastHistoryExpression: () => string | null;

	getLastHistoryResult: () => number | null;
}
