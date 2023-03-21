import { darkTheme, lightTheme } from '@theme';
import { useAppSelector } from '@store';
import type { ThemeType } from '@interfaces';
import { ThemeName } from '@constants';

export const useTheme = (): { theme: ThemeType } => {
	const themeName = useAppSelector((state) => state.theme.themeName);

	const theme: ThemeType = themeName === ThemeName.LIGHT ? lightTheme : darkTheme;

	return {
		theme,
	};
};
