import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { setHistory, toggleIsOpenedHistory } from '@store';
import type { AppDispatch } from '@store';

import { StyledButton } from '../styled';

import type { ConnectedProps } from 'react-redux';
import type { ButtonProps, MapDispatchToProps } from '../interfaces';

export class ButtonClass extends PureComponent<ButtonPropsWithHandlers> {
	render(): JSX.Element {
		const { type, handleClick } = this.props;

		return (
			<StyledButton data-test-id={type.id} onClick={handleClick(type)}>
				{type.title}
			</StyledButton>
		);
	}
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => ({
	handleClick: (buttonType) => () => {
		const { type } = buttonType;
		if (type === 'clear') {
			dispatch(setHistory([]));
		}
		if (type === 'close' || type === 'open') {
			dispatch(toggleIsOpenedHistory());
		}
	},
});

const connector = connect(null, mapDispatchToProps);

type ButtonPropsWithHandlers = ConnectedProps<typeof connector> & ButtonProps;

export const ButtonCC = connector(ButtonClass);
