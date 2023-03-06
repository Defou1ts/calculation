import React from 'react';
import { KeyC } from '@components';
import { keypadSchema } from '@constants';
import { KeypadWrapper } from './styled';

export class KeypadC extends React.Component<Record<string, void>, Record<string, void>> {
	render(): JSX.Element {
		return (
			<KeypadWrapper>
				{keypadSchema.map((key) => (
					<KeyC key={key} keyName={key} />
				))}
			</KeypadWrapper>
		);
	}
}
