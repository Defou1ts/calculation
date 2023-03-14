import { type HTMLAttributes, type ReactNode } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
