import { darkTheme, lightTheme } from '@constants';
import { setTheme, useAppDispatch, useAppSelector } from '@store';
import { ThemeType } from '@types';

export const useTheme = (): Record<string, () => void> => {
	const themeType = useAppSelector((state) => state.theme.theme.themeType);

	const dispatch = useAppDispatch();

	const setLightTheme = (): void => {
		dispatch(setTheme(lightTheme));
	};

	const setDarkTheme = (): void => {
		dispatch(setTheme(darkTheme));
	};

	const toggleTheme = (): void => {
		if (themeType === ThemeType.DARK) {
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
