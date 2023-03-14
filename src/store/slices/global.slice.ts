import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
	isOpenedHistory: boolean;
}

const initialState: GlobalState = {
	isOpenedHistory: true,
};

export const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		toggleIsOpenedHistory: (state, action: PayloadAction<void>) => {
			state.isOpenedHistory = !state.isOpenedHistory;
		},
	},
});

export const { toggleIsOpenedHistory } = globalSlice.actions;

export default globalSlice.reducer;
