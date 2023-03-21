import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
	displayValue: string;
	result: string;
	history: string[];
	command: CommandValue | null;
}

export interface CommandValue {
	value: string;
}

const initialState: CalculatorState = {
	displayValue: '',
	history: [],
	result: '',
	command: null,
};

export const calculatorSlice = createSlice({
	name: 'calculator',
	initialState,
	reducers: {
		setDisplayValue: (state, action: PayloadAction<string>) => {
			state.displayValue = action.payload;
		},
		setHistory: (state, action: PayloadAction<string[]>) => {
			state.history = action.payload;
		},
		setResult: (state, action: PayloadAction<string>) => {
			state.result = action.payload;
		},
		setCommand: (state, action: PayloadAction<CommandValue>) => {
			state.command = action.payload;
		},
	},
});

export const { setDisplayValue, setHistory, setResult, setCommand } = calculatorSlice.actions;

export default calculatorSlice.reducer;
