import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
	ThemeType,
	ThemeBackgroundColor,
	ThemeTextColor,
	ThemeContentColor,
	ThemeMonitorColor,
	ThemeButtonColor,
} from 'types';

export interface ThemeState {
	theme: ThemeType;
	backgroundColor: ThemeBackgroundColor;
	contentColor: ThemeContentColor;
	textColor: ThemeTextColor;
	monitorColor: ThemeMonitorColor;
	buttonColor: ThemeButtonColor;
}

const initialState: ThemeState = {
	theme: ThemeType.LIGHT,
	backgroundColor: ThemeBackgroundColor.LIGHT,
	contentColor: ThemeContentColor.LIGHT,
	textColor: ThemeTextColor.LIGHT,
	monitorColor: ThemeMonitorColor.LIGHT,
	buttonColor: ThemeButtonColor.LIGHT,
};

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeType: (state, action: PayloadAction<ThemeType>) => {
			state.theme = action.payload;
		},
		setBackgroundColor: (state, action: PayloadAction<ThemeBackgroundColor>) => {
			state.backgroundColor = action.payload;
		},
		setContentColor: (state, action: PayloadAction<ThemeContentColor>) => {
			state.contentColor = action.payload;
		},
		setTextColor: (state, action: PayloadAction<ThemeTextColor>) => {
			state.textColor = action.payload;
		},
		setMonitorColor: (state, action: PayloadAction<ThemeMonitorColor>) => {
			state.monitorColor = action.payload;
		},
		setButtonColor: (state, action: PayloadAction<ThemeButtonColor>) => {
			state.buttonColor = action.payload;
		},
	},
});

export const { setThemeType, setBackgroundColor, setContentColor, setTextColor, setMonitorColor, setButtonColor } =
	themeSlice.actions;
export default themeSlice.reducer;
