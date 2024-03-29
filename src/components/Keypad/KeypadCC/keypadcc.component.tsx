import React from 'react';

import { connect } from 'react-redux';

import { keypadSchema } from '@constants';
import { setCommand } from '@store';
import type { AppDispatch } from '@store';

import { KeypadWrapper, StyledKeyButton } from '../styled';

import type { ConnectedProps } from 'react-redux';
import type { MapDispatchToProps } from './interfaces';

export class KeypadClass extends React.PureComponent<KeypadProps> {
	onKeyClick = (value: string) => () => {
		this.props.onKeyClick(value);
	};

	render(): JSX.Element {
		return (
			<KeypadWrapper>
				{keypadSchema.map((key) => (
					<StyledKeyButton data-test-id="key" key={key} onClick={this.onKeyClick(key)}>
						{key}
					</StyledKeyButton>
				))}
			</KeypadWrapper>
		);
	}
}

export const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => ({
	onKeyClick: (value: string) => {
		dispatch(setCommand({ value }));
	},
});

export const keypadConnector = connect(null, mapDispatchToProps);

export const KeypadCC = keypadConnector(KeypadClass);

type KeypadProps = ConnectedProps<typeof keypadConnector>;
