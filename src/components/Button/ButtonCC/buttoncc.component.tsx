import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import { setHistory, toggleIsOpenedHistory } from '@store';
import type { AppDispatch } from '@store';

import { StyledButton } from '../styled';

import type { ConnectedProps } from 'react-redux';
import type { ButtonProps, MapDispatchToProps } from '../interfaces';

export class ButtonClass extends PureComponent<ButtonPropsWithHandlers> {
	render(): JSX.Element {
		const { type, handleToggleIsOpenedHistory, handleClearHistory } = this.props;

		switch (type) {
			case 'open history':
				return <StyledButton onClick={handleToggleIsOpenedHistory}>Open history</StyledButton>;
			case 'clear history':
				return (
					<StyledButton data-test-id="clear-history" onClick={handleClearHistory}>
						Clear all history
					</StyledButton>
				);
			case 'close history':
				return <StyledButton onClick={handleToggleIsOpenedHistory}>Close history</StyledButton>;

			default:
				return <></>;
		}
	}
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToProps => ({
	handleClearHistory: (): void => {
		dispatch(setHistory([]));
	},
	handleToggleIsOpenedHistory: () => {
		dispatch(toggleIsOpenedHistory());
	},
});

const connector = connect(null, mapDispatchToProps);

type ButtonPropsWithHandlers = ConnectedProps<typeof connector> & ButtonProps;

export const ButtonCC = connector(ButtonClass);
