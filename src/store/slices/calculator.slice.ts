import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
	displayValue: string;
	result: string;
	history: string[];
}

const initialState: CalculatorState = {
	displayValue: '',
	history: [],
	result: '',
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
	},
});

export const { setDisplayValue, setHistory, setResult } = calculatorSlice.actions;

export default calculatorSlice.reducer;
