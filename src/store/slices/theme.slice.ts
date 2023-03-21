import { createSlice } from '@reduxjs/toolkit';

import { ThemeName } from '@types';

export interface ThemeState {
	themeName: ThemeName;
}

const initialState: ThemeState = {
	themeName: ThemeName.LIGHT,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.themeName === 'light' ? (state.themeName = ThemeName.DARK) : (state.themeName = ThemeName.LIGHT);
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
