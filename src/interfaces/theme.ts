import {
	type ThemeType,
	type ThemeBackgroundColor,
	type ThemeContentColor,
	type ThemeTextColor,
	type ThemeMonitorColor,
	type ThemeButtonColor,
} from '@types';

export interface Theme {
	themeType: ThemeType;
	backgroundColor: ThemeBackgroundColor;
	contentColor: ThemeContentColor;
	textColor: ThemeTextColor;
	monitorColor: ThemeMonitorColor;
	buttonColor: ThemeButtonColor;
}
