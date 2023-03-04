import { Key } from '@components';
import React, { useMemo } from 'react';

import { KeyboardWrapper } from './styled';

export const keyboardSchema = [
	'1','2','3','*',
	'4','5','6', '/',
	'7', '8', '9', '+',
	'C', '0', '.', '-',
	'CE', '(', ')', '='
]

export const Keyboard = (): JSX.Element => {
	const renderedKeyboard = useMemo<JSX.Element[]>(() => {
		return keyboardSchema.map((key) => <Key key={key} keyName={key} />);
	}, []);

	return <KeyboardWrapper>{renderedKeyboard}</KeyboardWrapper>;
};
