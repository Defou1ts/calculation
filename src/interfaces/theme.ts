import {
	type fontWeight,
	type fontSize,
	type padding,
	type borderRadius,
	type gap,
	type height,
	type lineHeight,
	type width,
	type colors,
} from '@theme';
import {
	type ThemeName,
	type ThemeBackgroundColor,
	type ThemeContentColor,
	type ThemeTextColor,
	type ThemeMonitorColor,
	type ThemeButtonColor,
} from '@types';

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
	fontSize: typeof fontSize;
	fontWeight: typeof fontWeight;
	padding: typeof padding;
	height: typeof height;
	width: typeof width;
	gap: typeof gap;
	borderRadius: typeof borderRadius;
	lineHeight: typeof lineHeight;
	colors: typeof colors;
	breakPoints: BreakPoints;
	themeType: ThemeType;
}
