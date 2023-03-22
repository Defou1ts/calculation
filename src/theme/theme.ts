import type { BreakPoints, Theme, ThemeType } from '@interfaces';

export const colors = {
	red: '#FF6060',
	lightRed: '#FF7070',
	white: '#F9F9F9',
	black: '#00000',
	dark: '#2C2C2C',
	light: '#F1F1F1',
	dullYellow: '#FFD568',
	lightYellow: '#FEB700',
	darkGray: '#393939',
	lightGray: '#E6E6E6',
	dullWhite: '#BDBDBD',
	dullBlack: '#989898',
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

const { light, dark, white, darkGray, lightGray, lightYellow, dullYellow } = colors;

export const lightTheme: ThemeType = {
	themeName: 'light',
	themeBackgroundColor: light,
	themeContentColor: dark,
	themeTextColor: white,
	themeMonitorColor: darkGray,
	themeButtonColor: dullYellow,
};

export const darkTheme: ThemeType = {
	themeName: 'dark',
	themeBackgroundColor: dark,
	themeContentColor: light,
	themeTextColor: dark,
	themeMonitorColor: lightGray,
	themeButtonColor: lightYellow,
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
	themeType: darkTheme,
};
