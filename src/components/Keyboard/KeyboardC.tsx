import { KeyC } from '@components';
import React from 'react';
import { keyboardSchema } from './Keyboard';
import { KeyboardWrapper } from './styled';

class Keyboard extends React.Component<Record<string, void>, Record<string, void>> {
	render(): JSX.Element {
		const renderedKeyboard = keyboardSchema.map((key) => <KeyC key={key} keyName={key} />);

		return <KeyboardWrapper>{renderedKeyboard}</KeyboardWrapper>;
	}
}

export const KeyboardC = React.memo(Keyboard);
