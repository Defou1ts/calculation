import type { fontWeight, fontSize, padding, borderRadius, gap, height, lineHeight, width, colors } from '@theme';
import type {
	ThemeName,
	ThemeBackgroundColor,
	ThemeContentColor,
	ThemeTextColor,
	ThemeMonitorColor,
	ThemeButtonColor,
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
