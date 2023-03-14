import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import { lightTheme, type Theme } from '@constants';

export interface ThemeState {
	theme: Theme;
}

const initialState: ThemeState = {
	theme: lightTheme,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
