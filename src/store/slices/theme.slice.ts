import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { ThemeType, ThemeColor } from 'types';

export interface ThemeState {
	theme: ThemeType;
	backgroundColor: ThemeColor;
	textColor: ThemeColor;
}

const initialState: ThemeState = {
	theme: ThemeType.LIGHT,
	backgroundColor: ThemeColor.WHITE,
	textColor: ThemeColor.BLACK,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeType: (state, action: PayloadAction<ThemeType>) => {
			state.theme = action.payload;
		},
		setBackgroundColor: (state, action: PayloadAction<ThemeColor>) => {
			state.backgroundColor = action.payload;
		},
		setTextColor: (state, action: PayloadAction<ThemeColor>) => {
			state.textColor = action.payload;
		},
	},
});

export const { setThemeType, setBackgroundColor, setTextColor } = themeSlice.actions;
export default themeSlice.reducer;
