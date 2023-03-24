import { colors } from '@theme';
import type { fontWeight, fontSize, padding, borderRadius, gap, height, lineHeight, width } from '@theme';

export interface BreakPoints {
	mobile: number;
}

const { light, dark, white, darkGray, lightGray, lightYellow, dullYellow } = colors;

export interface ThemeType {
	themeName: 'light' | 'dark';
	themeBackgroundColor: typeof light | typeof dark;
	themeContentColor: typeof dark | typeof light;
	themeTextColor: typeof white | typeof dark;
	themeMonitorColor: typeof darkGray | typeof lightGray;
	themeButtonColor: typeof dullYellow | typeof lightYellow;
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
