import React from 'react';
import { KeyC } from '@components';
import { keypadSchema } from '@constants';
import { KeypadWrapper } from './styled';
import { type KeypadProps } from './Keypad.props';

export class KeypadC extends React.Component<KeypadProps> {
	render(): JSX.Element {
		const { handleClick } = this.props;

		return (
			<KeypadWrapper>
				{keypadSchema.map((key) => (
					<KeyC
						key={key}
						keyName={key}
						onClick={() => {
							handleClick(key);
						}}
					/>
				))}
			</KeypadWrapper>
		);
	}
}
