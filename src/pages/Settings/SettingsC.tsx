import React from 'react';
import { connect, type ConnectedProps } from 'react-redux';
import { ButtonC, SwitchC } from '@components';
import { ControlPanel } from './styled';
import {
	type AppDispatch,
	setBackgroundColor,
	setButtonColor,
	setContentColor,
	setMonitorColor,
	setTextColor,
	setThemeType,
	type RootState,
	setHistory,
	toggleIsOpenedHistory,
} from '@store';
import {
	ThemeBackgroundColor,
	ThemeButtonColor,
	ThemeContentColor,
	ThemeMonitorColor,
	ThemeTextColor,
	ThemeType,
} from '@types';

export class SettingsClass extends React.Component<SettingsProps> {
	handleToggleTheme = (): void => {
		const { theme, setLightTheme, setDarkTheme } = this.props;

		if (theme === ThemeType.DARK) {
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
				<SwitchC
					data-test-id="theme-switch"
					onClick={this.handleToggleTheme}
					active={theme === ThemeType.DARK}
				/>
				<ButtonC data-test-id="clear-history" onClick={clearHistory}>
					Clear all history
				</ButtonC>
				<ButtonC onClick={this.handleToggleIsOpenedHistory}>
					{isOpenedHistory ? 'Close history' : 'Open history'}
				</ButtonC>
			</ControlPanel>
		);
	}
}

interface MapStateProps {
	theme: ThemeType;
	isOpenedHistory: boolean;
}

const mapState = (state: RootState): MapStateProps => ({
	theme: state.theme.theme,
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
		dispatch(setThemeType(ThemeType.LIGHT));
		dispatch(setBackgroundColor(ThemeBackgroundColor.LIGHT));
		dispatch(setTextColor(ThemeTextColor.LIGHT));
		dispatch(setContentColor(ThemeContentColor.LIGHT));
		dispatch(setMonitorColor(ThemeMonitorColor.LIGHT));
		dispatch(setButtonColor(ThemeButtonColor.LIGHT));
	},
	setDarkTheme: (): void => {
		dispatch(setThemeType(ThemeType.DARK));
		dispatch(setBackgroundColor(ThemeBackgroundColor.DARK));
		dispatch(setTextColor(ThemeTextColor.DARK));
		dispatch(setContentColor(ThemeContentColor.DARK));
		dispatch(setMonitorColor(ThemeMonitorColor.DARK));
		dispatch(setButtonColor(ThemeButtonColor.DARK));
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

export const SettingsC = connector(SettingsClass);
