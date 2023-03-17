import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type ThemeType } from 'interfaces/theme';

import { lightTheme } from '@theme';

export interface ThemeState {
	theme: ThemeType;
}

const initialState: ThemeState = {
	theme: lightTheme,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<ThemeType>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
