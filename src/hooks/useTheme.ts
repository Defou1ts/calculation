import {
	setBackgroundColor,
	setThemeType,
	setTextColor,
	useAppDispatch,
	useAppSelector,
	setContentColor,
	setMonitorColor,
	setButtonColor,
} from '@store';
import {
	ThemeBackgroundColor,
	ThemeButtonColor,
	ThemeContentColor,
	ThemeMonitorColor,
	ThemeTextColor,
	ThemeType,
} from '@types';

export const useTheme = (): Record<string, () => void> => {
	const theme = useAppSelector((state) => state.theme.theme);

	const dispatch = useAppDispatch();

	const setLightTheme = (): void => {
		dispatch(setThemeType(ThemeType.LIGHT));
		dispatch(setBackgroundColor(ThemeBackgroundColor.LIGHT));
		dispatch(setTextColor(ThemeTextColor.LIGHT));
		dispatch(setContentColor(ThemeContentColor.LIGHT));
		dispatch(setMonitorColor(ThemeMonitorColor.LIGHT));
		dispatch(setButtonColor(ThemeButtonColor.LIGHT));
	};

	const setDarkTheme = (): void => {
		dispatch(setThemeType(ThemeType.DARK));
		dispatch(setBackgroundColor(ThemeBackgroundColor.DARK));
		dispatch(setTextColor(ThemeTextColor.DARK));
		dispatch(setContentColor(ThemeContentColor.DARK));
		dispatch(setMonitorColor(ThemeMonitorColor.DARK));
		dispatch(setButtonColor(ThemeButtonColor.DARK));
	};

	const toggleTheme = (): void => {
		if (theme === ThemeType.DARK) {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	};

	return {
		toggleTheme,
		setLightTheme,
		setDarkTheme,
	};
};
