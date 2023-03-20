import type { HTMLAttributes } from 'react';

export interface KeyProps extends HTMLAttributes<HTMLButtonElement> {
	keyName: string;
}
