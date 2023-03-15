import { type Theme } from 'interfaces/theme';

import {
	ThemeBackgroundColor,
	ThemeButtonColor,
	ThemeContentColor,
	ThemeMonitorColor,
	ThemeTextColor,
	ThemeType,
} from '@types';

export const lightTheme: Theme = {
	themeType: ThemeType.LIGHT,
	backgroundColor: ThemeBackgroundColor.LIGHT,
	contentColor: ThemeContentColor.LIGHT,
	textColor: ThemeTextColor.LIGHT,
	monitorColor: ThemeMonitorColor.LIGHT,
	buttonColor: ThemeButtonColor.LIGHT,
};

export const darkTheme: Theme = {
	themeType: ThemeType.DARK,
	backgroundColor: ThemeBackgroundColor.DARK,
	contentColor: ThemeContentColor.DARK,
	textColor: ThemeTextColor.DARK,
	monitorColor: ThemeMonitorColor.DARK,
	buttonColor: ThemeButtonColor.DARK,
};
