import React from 'react';

import { connect } from 'react-redux';

import { ButtonCC, SwitchCC } from '@components';
import { toggleTheme } from '@store';
import type { AppDispatch, RootState } from '@store';
import { ThemeName } from '@constants';

import { ControlPanel } from '../styled';

import type { ConnectedProps } from 'react-redux';

export class SettingsClass extends React.Component<SettingsProps> {
	render(): JSX.Element {
		const { theme, isOpenedHistory, toggleTheme } = this.props;

		return (
			<ControlPanel>
				<SwitchCC data-test-id="theme-switch" onClick={toggleTheme} active={theme === ThemeName.DARK} />
				<ButtonCC type="clear history" />
				<ButtonCC type={isOpenedHistory ? 'close history' : 'open history'} />
			</ControlPanel>
		);
	}
}

interface MapStateProps {
	theme: ThemeName;
	isOpenedHistory: boolean;
}

const mapState = (state: RootState): MapStateProps => ({
	theme: state.theme.themeName,
	isOpenedHistory: state.history.isOpenedHistory,
});

interface MapDispatchProps {
	toggleTheme: () => void;
}

const mapDispatch = (dispatch: AppDispatch): MapDispatchProps => ({
	toggleTheme: (): void => {
		dispatch(toggleTheme());
	},
});

const connector = connect(mapState, mapDispatch);

type SettingsProps = ConnectedProps<typeof connector>;

export const SettingsCC = connector(SettingsClass);
