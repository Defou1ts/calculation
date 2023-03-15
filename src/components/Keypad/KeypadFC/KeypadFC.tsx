import React, { memo } from 'react';

import { KeyFC } from '@components';
import { keypadSchema } from '@constants';

import { KeypadWrapper } from '../styled';
import { type KeypadProps } from '../interfaces';

export const KeypadFC = memo(function Keypad({ handleClick }: KeypadProps): JSX.Element {
	const onKeyClick = (key: string) => () => {
		handleClick(key);
	};

	return (
		<KeypadWrapper>
			{keypadSchema.map((key) => (
				<KeyFC key={key} keyName={key} onClick={onKeyClick(key)} />
			))}
		</KeypadWrapper>
	);
});
