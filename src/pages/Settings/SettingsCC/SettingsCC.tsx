import React from 'react';

import { connect } from 'react-redux';

import { ButtonCC, SwitchCC } from '@components';
import {  setTheme } from '@store';
import type { AppDispatch, RootState } from '@store';
import { ThemeName } from '@types';
import { darkTheme, lightTheme } from '@theme';

import { ControlPanel } from '../styled';

import type { ConnectedProps } from 'react-redux';

export class SettingsClass extends React.Component<SettingsProps> {
	handleToggleTheme = (): void => {
		const { theme, setLightTheme, setDarkTheme } = this.props;

		if (theme === ThemeName.DARK) {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	};

	render(): JSX.Element {
		const { theme, isOpenedHistory } = this.props;

		return (
			<ControlPanel>
				<SwitchCC
					data-test-id="theme-switch"
					onClick={this.handleToggleTheme}
					active={theme === ThemeName.DARK}
				/>
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
	theme: state.theme.theme.themeName,
	isOpenedHistory: state.global.isOpenedHistory,
});

interface MapDispatchProps {
	setLightTheme: () => void;
	setDarkTheme: () => void;
}

const mapDispatch = (dispatch: AppDispatch): MapDispatchProps => ({
	setLightTheme: (): void => {
		dispatch(setTheme(lightTheme));
	},
	setDarkTheme: (): void => {
		dispatch(setTheme(darkTheme));
	},
});

const connector = connect(mapState, mapDispatch);

type SettingsProps = ConnectedProps<typeof connector>;

export const SettingsCC = connector(SettingsClass);
