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
	themeBackgroundColor: ThemeBackgroundColor.LIGHT,
	themeContentColor: ThemeContentColor.LIGHT,
	themeTextColor: ThemeTextColor.LIGHT,
	themeMonitorColor: ThemeMonitorColor.LIGHT,
	themeButtonColor: ThemeButtonColor.LIGHT,
};

export const darkTheme: ThemeType = {
	themeName: ThemeName.DARK,
	themeBackgroundColor: ThemeBackgroundColor.DARK,
	themeContentColor: ThemeContentColor.DARK,
	themeTextColor: ThemeTextColor.DARK,
	themeMonitorColor: ThemeMonitorColor.DARK,
	themeButtonColor: ThemeButtonColor.DARK,
};

export const theme: Theme = {
	breakPoints,
	fontSize,
	fontWeight,
	colors,
	themeType: lightTheme,
};
