import React from 'react';
import { connect, type ConnectedProps } from 'react-redux';
import { SwitchC } from '@components';
import { SettingsWrapper } from './styled';
import {
	type AppDispatch,
	setBackgroundColor,
	setButtonColor,
	setContentColor,
	setMonitorColor,
	setTextColor,
	setThemeType,
	type RootState,
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

	render(): JSX.Element {
		const { theme } = this.props;

		return (
			<SettingsWrapper>
				<SwitchC onClick={this.handleToggleTheme} active={theme === ThemeType.DARK} />
				<span>clearHistory</span>
			</SettingsWrapper>
		);
	}
}

interface MapStateProps {
	theme: ThemeType;
}

const mapState = (state: RootState): MapStateProps => ({
	theme: state.theme.theme,
});

interface MapDispatchProps {
	setLightTheme: () => void;
	setDarkTheme: () => void;
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
});

const connector = connect(mapState, mapDispatch);

type SettingsProps = ConnectedProps<typeof connector>;

export const SettingsC = connector(SettingsClass);
