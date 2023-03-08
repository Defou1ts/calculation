/* eslint-disable no-unmodified-loop-condition */
/* eslint-disable no-useless-escape */

import { ExpressionExceptionType } from './exceptions';

const sum = (num1: number, num2: number): number => num1 + num2;
const sub = (num1: number, num2: number): number => num1 - num2;
const multiply = (num1: number, num2: number): number => num1 * num2;
const division = (num1: number, num2: number): number => num1 / num2;

export type Operator = '+' | '-' | '*' | '/' | '(' | ')';

export class Expression {
	constructor(private _value: string) {}

	get value(): string {
		return this._value;
	}

	set value(expression: string) {
		this._value = expression;
	}

	removeLastCharacter(): void {
		if (this._value.length > 0) {
			this._value = this._value.slice(0, -1);
		}
	}

	clear(): void {
		this._value = '';
	}

	calculate(): number {
		const numbers: number[] = [];
		const operators: Operator[] = [];

		const operate = (operator: Operator): number => {
			const num2 = numbers.pop();
			const num1 = numbers.pop();

			if (typeof num1 === 'number' && typeof num2 === 'number') {
				switch (operator) {
					case '+':
						return sum(num1, num2);
					case '-':
						return sub(num1, num2);
					case '*':
						return multiply(num1, num2);
					case '/':
						return division(num1, num2);
				}
			}

			return 0;
		};

		const parseNumber = (start: number): [number, string] => {
			let numStr = '';
			let pos = start;

			while (pos < this._value.length) {
				const char = this._value[pos];

				if (char >= '0' && char <= '9') {
					numStr += char;
					pos++;
				} else if (char === '.' && !numStr.includes('.')) {
					numStr += char;
					pos++;
				} else if (char === '-' && numStr.length === 0) {
					numStr += char;
					pos++;
				} else {
					break;
				}
			}

			return [parseFloat(numStr), numStr];
		};

		let pos = 0;
		let lastChar = '';

		while (pos < this._value.length) {
			const char = this._value[pos];

			if (
				(char >= '0' && char <= '9') ||
				char === '.' ||
				(char === '-' && lastChar === '(') ||
				(char === '-' && lastChar === '')
			) {
				const [number, numberStr] = parseNumber(pos);
				if (Number.isNaN(number)) {
					throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
				} else {
					numbers.push(number);
					pos += numberStr.length;
					lastChar = 'number';
				}
			} else if (char === '+' || char === '-' || char === '*' || char === '/') {
				if (lastChar !== 'number' && lastChar !== ')') {
					throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
				}

				while (
					(operators.length > 0 &&
						operators[operators.length - 1] !== '(' &&
						(char === '+' || char === '-') &&
						(operators[operators.length - 1] === '*' || operators[operators.length - 1] === '/')) ||
					((char === '*' || char === '/') &&
						(operators[operators.length - 1] === '*' || operators[operators.length - 1] === '/'))
				) {
					const operator = operators.pop();
					if (operator !== undefined) {
						numbers.push(operate(operator));
					}
				}
				operators.push(char);
				pos++;
				lastChar = 'operator';
			} else if (char === '(') {
				if (lastChar === 'number' || lastChar === ')') {
					throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
				}
				operators.push(char);
				pos++;
				lastChar = '(';
			} else if (char === ')') {
				if (lastChar === 'operator' || lastChar === '(') {
					throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
				}
				while (operators.length > 0 && operators[operators.length - 1] !== '(') {
					const operator = operators.pop();
					if (operator !== undefined) {
						numbers.push(operate(operator));
					}
				}
				if (operators.length === 0) {
					throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
				} else {
					operators.pop();
					pos++;
				}
				lastChar = ')';
			} else if (char === ' ') {
				pos++;
			} else {
				throw new Error(`${ExpressionExceptionType.INVALID_CHARACTER}:${char}`);
			}
		}

		while (operators.length > 0) {
			const operator = operators.pop();
			if (operator === '(') {
				throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
			} else {
				if (operator !== undefined) {
					numbers.push(operate(operator));
				}
			}
		}

		if (numbers.length !== 1) {
			throw new Error(ExpressionExceptionType.INVALID_EXPRESSION);
		} else {
			return numbers.pop() as number;
		}
	}
}
