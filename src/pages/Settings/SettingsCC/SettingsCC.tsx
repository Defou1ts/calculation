import React from 'react';

import { connect, type ConnectedProps } from 'react-redux';

import { ButtonCC, SwitchCC } from '@components';
import { type AppDispatch, type RootState, setHistory, toggleIsOpenedHistory, setTheme } from '@store';
import { ThemeName } from '@types';
import { darkTheme, lightTheme } from '@constants';

import { ControlPanel } from '../styled';

export class SettingsClass extends React.Component<SettingsProps> {
	handleToggleTheme = (): void => {
		const { theme, setLightTheme, setDarkTheme } = this.props;

		if (theme === ThemeName.DARK) {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	};

	handleToggleIsOpenedHistory = (): void => {
		const { toggleIsOpenedHistory } = this.props;

		toggleIsOpenedHistory();
	};

	render(): JSX.Element {
		const { theme, clearHistory, isOpenedHistory } = this.props;

		return (
			<ControlPanel>
				<SwitchCC
					data-test-id="theme-switch"
					onClick={this.handleToggleTheme}
					active={theme === ThemeName.DARK}
				/>
				<ButtonCC data-test-id="clear-history" onClick={clearHistory}>
					Clear all history
				</ButtonCC>
				<ButtonCC onClick={this.handleToggleIsOpenedHistory}>
					{isOpenedHistory ? 'Close history' : 'Open history'}
				</ButtonCC>
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
	clearHistory: () => void;
	toggleIsOpenedHistory: () => void;
}

const mapDispatch = (dispatch: AppDispatch): MapDispatchProps => ({
	setLightTheme: (): void => {
		dispatch(setTheme(lightTheme));
	},
	setDarkTheme: (): void => {
		dispatch(setTheme(darkTheme));
	},
	clearHistory: (): void => {
		dispatch(setHistory([]));
	},
	toggleIsOpenedHistory: (): void => {
		dispatch(toggleIsOpenedHistory());
	},
});

const connector = connect(mapState, mapDispatch);

type SettingsProps = ConnectedProps<typeof connector>;

export const SettingsCC = connector(SettingsClass);
