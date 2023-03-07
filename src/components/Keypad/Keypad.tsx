import React from 'react';
import { Key } from '@components';
import { keypadSchema } from '@constants';
import { KeypadWrapper } from './styled';
import { type KeypadProps } from './Keypad.props';

export const Keypad = ({ handleClick }: KeypadProps): JSX.Element => {
	return (
		<KeypadWrapper>
			{keypadSchema.map((key) => (
				<Key
					key={key}
					keyName={key}
					onClick={() => {
						handleClick(key);
					}}
				/>
			))}
		</KeypadWrapper>
	);
};
