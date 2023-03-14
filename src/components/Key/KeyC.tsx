import React, { Component } from 'react';

import { type KeyProps } from './interfaces';
import { StyledKeyButton } from './styled';

export class KeyC extends Component<KeyProps> {
	render(): JSX.Element {
		const { keyName, ...props } = this.props;

		return (
			<StyledKeyButton data-test-id="key" {...props}>
				{keyName}
			</StyledKeyButton>
		);
	}
}
