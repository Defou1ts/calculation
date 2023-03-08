import React from 'react';
import { KeyC } from '@components';
import { keypadSchema } from '@constants';
import { KeypadWrapper } from './styled';
import { type KeypadProps } from './Keypad.props';

export class KeypadC extends React.Component<KeypadProps> {
	onKeyClick = (key: string) => () => {
		this.props.handleClick(key);
	};

	render(): JSX.Element {
		return (
			<KeypadWrapper>
				{keypadSchema.map((key) => (
					<KeyC key={key} keyName={key} onClick={this.onKeyClick(key)} />
				))}
			</KeypadWrapper>
		);
	}
}
