import {
	type ThemeName,
	type ThemeBackgroundColor,
	type ThemeContentColor,
	type ThemeTextColor,
	type ThemeMonitorColor,
	type ThemeButtonColor,
} from '@types';

export interface Colors {
	red: string;
	lightRed: string;
	white: string;
}

export interface BreakPoints {
	mobile: number;
}

export interface ThemeType {
	themeName: ThemeName;
	backgroundColor: ThemeBackgroundColor;
	contentColor: ThemeContentColor;
	textColor: ThemeTextColor;
	monitorColor: ThemeMonitorColor;
	buttonColor: ThemeButtonColor;
}

export interface Theme {
	breakPoints: BreakPoints;
	fontSize: number[];
	fontWeight: number[];
	colors: Colors;
	themeType: ThemeType;
}
