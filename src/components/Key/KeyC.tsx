import React from 'react';
import { type KeyProps } from './Key.props';
import { StyledKeyButton } from './styled';

export class KeyC extends React.Component<KeyProps> {
	render(): JSX.Element {
		const { keyName, ...props } = this.props;

		return <StyledKeyButton {...props}>{keyName}</StyledKeyButton>;
	}
}
