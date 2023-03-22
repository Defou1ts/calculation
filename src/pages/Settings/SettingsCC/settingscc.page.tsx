import React from 'react';

import { connect } from 'react-redux';

import { ButtonCC, SwitchCC } from '@components';
import { clear, close, open } from '@constants';
import type { RootState } from '@store';

import { ControlPanel } from '../styled';

import type { MapStateProps } from './interfaces';
import type { ConnectedProps } from 'react-redux';

export class SettingsClass extends React.Component<SettingsProps> {
	render(): JSX.Element {
		const { isOpenedHistory } = this.props;

		return (
			<ControlPanel>
				<SwitchCC />
				<ButtonCC type={clear} />
				<ButtonCC type={isOpenedHistory ? close : open} />
			</ControlPanel>
		);
	}
}

const mapState = (state: RootState): MapStateProps => ({
	isOpenedHistory: state.history.isOpenedHistory,
});

const connector = connect(mapState);

type SettingsProps = ConnectedProps<typeof connector>;

export const SettingsCC = connector(SettingsClass);
