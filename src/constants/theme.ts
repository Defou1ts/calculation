import { type ThemeType } from 'interfaces/theme';

import {
	ThemeBackgroundColor,
	ThemeButtonColor,
	ThemeContentColor,
	ThemeMonitorColor,
	ThemeTextColor,
	ThemeName,
} from '@types';

export const lightTheme: ThemeType = {
	themeName: ThemeName.LIGHT,
	backgroundColor: ThemeBackgroundColor.LIGHT,
	contentColor: ThemeContentColor.LIGHT,
	textColor: ThemeTextColor.LIGHT,
	monitorColor: ThemeMonitorColor.LIGHT,
	buttonColor: ThemeButtonColor.LIGHT,
};

export const darkTheme: ThemeType = {
	themeName: ThemeName.DARK,
	backgroundColor: ThemeBackgroundColor.DARK,
	contentColor: ThemeContentColor.DARK,
	textColor: ThemeTextColor.DARK,
	monitorColor: ThemeMonitorColor.DARK,
	buttonColor: ThemeButtonColor.DARK,
};
