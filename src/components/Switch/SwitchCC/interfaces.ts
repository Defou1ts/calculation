import type { ThemeName } from '@constants';

export interface MapStateProps {
	theme: ThemeName;
}

export interface MapDispatchProps {
	toggleTheme: () => void;
}
