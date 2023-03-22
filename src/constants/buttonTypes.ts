import type { ButtonType } from '@interfaces';

const buttonTypes: Record<string, ButtonType> = {
	clear: {
		id: 'clear-history',
		title: 'Clear all history',
		type: 'clear',
	},
	close: {
		id: '',
		title: 'Close history',
		type: 'close',
	},
	open: {
		id: '',
		title: 'Open History',
		type: 'open',
	},
} as const;

export const { clear, close, open } = buttonTypes;
