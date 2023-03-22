import type { ButtonType } from '@interfaces';

export interface ButtonProps {
	type: ButtonType;
}

export interface MapDispatchToProps {
	handleClick: (buttonType: ButtonType) => () => void;
}
