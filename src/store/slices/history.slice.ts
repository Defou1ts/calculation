import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

interface HistoryState {
	isOpenedHistory: boolean;
}

const initialState: HistoryState = {
	isOpenedHistory: true,
};

export const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		toggleIsOpenedHistory: (state, action: PayloadAction<void>) => {
			state.isOpenedHistory = !state.isOpenedHistory;
		},
	},
});

export const { toggleIsOpenedHistory } = historySlice.actions;

export default historySlice.reducer;
