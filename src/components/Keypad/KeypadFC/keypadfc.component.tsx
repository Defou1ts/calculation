import React, { memo } from 'react';

import { keypadSchema } from '@constants';

import { KeypadWrapper, StyledKeyButton } from '../styled';

import type { KeypadProps } from '../interfaces';

export const KeypadFC = memo(function Keypad({ handleClick }: KeypadProps): JSX.Element {
	const onKeyClick = (key: string) => () => {
		handleClick(key);
	};

	return (
		<KeypadWrapper>
			{keypadSchema.map((key) => (
				<StyledKeyButton data-test-id="key" key={key} onClick={onKeyClick(key)}>
					{key}
				</StyledKeyButton>
			))}
		</KeypadWrapper>
	);
});
