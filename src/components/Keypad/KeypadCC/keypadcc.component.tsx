import React from 'react';

import { keypadSchema } from '@constants';

import { KeypadWrapper, StyledKeyButton } from '../styled';

import type { KeypadProps } from '../interfaces';

export class KeypadCC extends React.PureComponent<KeypadProps> {
	onKeyClick = (key: string) => () => {
		this.props.handleClick(key);
	};

	render(): JSX.Element {
		return (
			<KeypadWrapper>
				{keypadSchema.map((key) => (
					<StyledKeyButton key={key} onClick={this.onKeyClick(key)}>
						{key}
					</StyledKeyButton>
				))}
			</KeypadWrapper>
		);
	}
}
