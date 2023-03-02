import { setBackgroundColor, setThemeType, setTextColor, useAppDispatch, useAppSelector } from '@store';
import { ThemeColor, ThemeType } from 'types';

export const useTheme = (): Record<string, () => void> => {
	const theme = useAppSelector((state) => state.theme.theme);

	const dispatch = useAppDispatch();

	const setLightTheme = (): void => {
		dispatch(setThemeType(ThemeType.LIGHT));
		dispatch(setBackgroundColor(ThemeColor.WHITE));
		dispatch(setTextColor(ThemeColor.BLACK));
	};

	const setDarkTheme = (): void => {
		dispatch(setThemeType(ThemeType.DARK));
		dispatch(setBackgroundColor(ThemeColor.BLACK));
		dispatch(setTextColor(ThemeColor.WHITE));
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
	};
};
