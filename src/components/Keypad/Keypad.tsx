import React, { memo } from 'react';

import { Key } from '@components';
import { keypadSchema } from '@constants';

import { KeypadWrapper } from './styled';
import { type KeypadProps } from './Keypad.props';

export const Keypad = memo(function Keypad({ handleClick }: KeypadProps): JSX.Element {
	const onKeyClick = (key: string) => () => {
		handleClick(key);
	};

	return (
		<KeypadWrapper>
			{keypadSchema.map((key) => (
				<Key key={key} keyName={key} onClick={onKeyClick(key)} />
			))}
		</KeypadWrapper>
	);
});
