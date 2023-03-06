import React from 'react';
import { Key } from '@components';
import { keypadSchema } from '@constants';
import { KeypadWrapper } from './styled';

export const Keypad = (): JSX.Element => {
	return (
		<KeypadWrapper>
			{keypadSchema.map((key) => (
				<Key key={key} keyName={key} />
			))}
		</KeypadWrapper>
	);
};
