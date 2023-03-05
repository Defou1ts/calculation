import React from 'react';
import { KeyC } from '@components';
import { keypadSchema } from './Keypad';
import { KeypadWrapper } from './styled';

class Keypad extends React.Component<Record<string, void>, Record<string, void>> {
	render(): JSX.Element {
		const renderedKeypad = keypadSchema.map((key) => <KeyC key={key} keyName={key} />);

		return <KeypadWrapper>{renderedKeypad}</KeypadWrapper>;
	}
}

export const KeypadC = React.memo(Keypad);
