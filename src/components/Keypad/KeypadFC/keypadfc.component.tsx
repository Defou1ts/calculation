import React, { memo } from 'react';

import { useDispatch } from 'react-redux';

import { keypadSchema } from '@constants';
import { setCommand } from '@store';

import { KeypadWrapper, StyledKeyButton } from '../styled';

export const KeypadFC = memo(function Keypad(): JSX.Element {
	const dispatch = useDispatch();

	const onKeyClick = (value: string) => () => {
		dispatch(setCommand({ value }));
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
