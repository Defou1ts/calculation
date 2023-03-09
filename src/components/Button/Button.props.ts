import { type ReactNode } from 'react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
