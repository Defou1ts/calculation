import { Key } from '@components';
import React, { useMemo } from 'react';
import { KeypadWrapper } from './styled';

export const keypadSchema = [
	'1',
	'2',
	'3',
	'*',
	'4',
	'5',
	'6',
	'/',
	'7',
	'8',
	'9',
	'+',
	'C',
	'0',
	'.',
	'-',
	'CE',
	'(',
	')',
	'=',
];

export const Keypad = (): JSX.Element => {
	const renderedKeypad = useMemo<JSX.Element[]>(() => {
		return keypadSchema.map((key) => <Key key={key} keyName={key} />);
	}, []);

	return <KeypadWrapper>{renderedKeypad}</KeypadWrapper>;
};
