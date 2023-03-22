import React from 'react';

import { connect } from 'react-redux';

import { toggleTheme } from '@store';
import type { RootState, AppDispatch } from '@store';

import { Round, SwitchWrapper } from '../styled';

import type { ConnectedProps } from 'react-redux';
import type { MapDispatchProps, MapStateProps } from './interfaces';

export class SwitchClass extends React.PureComponent<SwitchProps> {
	render(): JSX.Element {
		const { toggleTheme, theme } = this.props;

		return (
			<SwitchWrapper data-test-id="theme-switch" onClick={toggleTheme}>
				<Round active={theme === 'dark'} />
			</SwitchWrapper>
		);
	}
}

const mapState = (state: RootState): MapStateProps => ({
	theme: state.theme.themeName,
});

const mapDispatch = (dispatch: AppDispatch): MapDispatchProps => ({
	toggleTheme: (): void => {
		dispatch(toggleTheme());
	},
});

const switchConnector = connect(mapState, mapDispatch);

type SwitchProps = ConnectedProps<typeof switchConnector>;

export const SwitchCC = switchConnector(SwitchClass);
