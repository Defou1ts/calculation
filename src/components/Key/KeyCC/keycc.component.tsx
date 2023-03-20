import React, { Component } from 'react';

import { StyledKeyButton } from '../styled';

import type { KeyProps } from '../interfaces';

export class KeyCC extends Component<KeyProps> {
	render(): JSX.Element {
		const { keyName, ...props } = this.props;

		return (
			<StyledKeyButton data-test-id="key" {...props}>
				{keyName}
			</StyledKeyButton>
		);
	}
}
