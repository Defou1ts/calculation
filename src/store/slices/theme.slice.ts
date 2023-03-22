import { createSlice } from '@reduxjs/toolkit';

export interface ThemeState {
	themeName: 'light' | 'dark';
}

const initialState: ThemeState = {
	themeName: 'light',
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.themeName === 'light' ? (state.themeName = 'dark') : (state.themeName = 'light');
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
