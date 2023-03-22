import { darkTheme, lightTheme } from '@theme';
import { useAppSelector } from '@store';
import type { ThemeType } from '@interfaces';

export const useTheme = (): { theme: ThemeType } => {
	const themeName = useAppSelector((state) => state.theme.themeName);

	const theme: ThemeType = themeName === 'light' ? lightTheme : darkTheme;

	return {
		theme,
	};
};
