import type { BreakPoints, Theme, ThemeType } from '@interfaces';
import {
	ThemeName,
	ThemeBackgroundColor,
	ThemeContentColor,
	ThemeTextColor,
	ThemeMonitorColor,
	ThemeButtonColor,
} from '@constants';

export const colors = {
	red: '#FF6060',
	lightRed: '#FF7070',
	white: '#F9F9F9',
	black: '#00000',
} as const;

export const fontSize = [16, 24, 36] as const;
export const fontWeight = [400] as const;
export const padding = [7, 14, 16, 20, 22, 24, 25, 26, 27, 30, 37, 150] as const;
export const height = [35, 70, 38] as const;
export const width = [30, 70, 107, 152, 450, 38, 110] as const;
export const gap = [10, 11, 14, 17, 21, 29] as const;
export const borderRadius = [10, 20, 50] as const;
export const lineHeight = [22, 33, 49] as const;

export const breakPoints: BreakPoints = {
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
	fontSize,
	fontWeight,
	padding,
	height,
	width,
	gap,
	borderRadius,
	lineHeight,
	colors,
	breakPoints,
	themeType: lightTheme,
};
