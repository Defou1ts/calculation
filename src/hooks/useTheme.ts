import { darkTheme, lightTheme } from '@theme';
import { setTheme, useAppDispatch, useAppSelector } from '@store';
import { ThemeName } from '@types';

export const useTheme = (): Record<string, () => void> => {
	const themeType = useAppSelector((state) => state.theme.theme.themeName);

	const dispatch = useAppDispatch();

	const setLightTheme = (): void => {
		dispatch(setTheme(lightTheme));
	};

	const setDarkTheme = (): void => {
		dispatch(setTheme(darkTheme));
	};

	const toggleTheme = (): void => {
		if (themeType === ThemeName.DARK) {
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
