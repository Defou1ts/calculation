import { type BreakPoints, type Colors, type Theme, type ThemeType } from '@interfaces';
import {
	ThemeName,
	ThemeBackgroundColor,
	ThemeContentColor,
	ThemeTextColor,
	ThemeMonitorColor,
	ThemeButtonColor,
} from '@types';

const colors: Colors = {
	red: '#FF6060',
	lightRed: '#FF7070',
	white: '#F9F9F9',
};

const fontSize = [16, 24, 36];
const fontWeight = [400];

const breakPoints: BreakPoints = {
	mobile: 1100,
};

export const lightTheme: ThemeType = {
	themeName: ThemeName.LIGHT,
	backgroundColor: ThemeBackgroundColor.LIGHT,
	contentColor: ThemeContentColor.LIGHT,
	textColor: ThemeTextColor.LIGHT,
	monitorColor: ThemeMonitorColor.LIGHT,
	buttonColor: ThemeButtonColor.LIGHT,
};

export const darkTheme: ThemeType = {
	themeName: ThemeName.DARK,
	backgroundColor: ThemeBackgroundColor.DARK,
	contentColor: ThemeContentColor.DARK,
	textColor: ThemeTextColor.DARK,
	monitorColor: ThemeMonitorColor.DARK,
	buttonColor: ThemeButtonColor.DARK,
};

export const theme: Theme = {
	breakPoints,
	fontSize,
	fontWeight,
	colors,
	themeType: lightTheme,
};
