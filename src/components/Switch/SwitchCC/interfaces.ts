export interface MapStateProps {
	theme: 'light' | 'dark';
}

export interface MapDispatchProps {
	toggleTheme: () => void;
}
