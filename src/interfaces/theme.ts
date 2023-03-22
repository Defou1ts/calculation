import type { fontWeight, fontSize, padding, borderRadius, gap, height, lineHeight, width, colors } from '@theme';

export interface BreakPoints {
	mobile: number;
}

export interface ThemeType {
	themeName: 'light' | 'dark';
	themeBackgroundColor: '#F1F1F1' | '#2C2C2C';
	themeContentColor: '#2C2C2C' | '#F1F1F1';
	themeTextColor: '#F9F9F9' | '#2C2C2C';
	themeMonitorColor: '#393939' | '#E6E6E6';
	themeButtonColor: '#FFD568' | '#FEB700';
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
