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
	themeBackgroundColor: ThemeBackgroundColor;
	themeContentColor: ThemeContentColor;
	themeTextColor: ThemeTextColor;
	themeMonitorColor: ThemeMonitorColor;
	themeButtonColor: ThemeButtonColor;
}

export interface Theme {
	breakPoints: BreakPoints;
	fontSize: number[];
	fontWeight: number[];
	colors: Colors;
	themeType: ThemeType;
}
