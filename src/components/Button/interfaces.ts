export interface ButtonProps {
	type: 'open history' | 'clear history' | 'close history';
}

export interface MapDispatchToProps {
	handleClearHistory: () => void;
	handleToggleIsOpenedHistory: () => void;
}