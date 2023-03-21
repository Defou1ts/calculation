import type { HTMLAttributes } from 'react';

export interface SwitchProps extends HTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	active: boolean;
}
