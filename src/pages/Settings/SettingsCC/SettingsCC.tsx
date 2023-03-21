import React from 'react';

import { connect } from 'react-redux';

import { ButtonCC, SwitchCC } from '@components';
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
				<ButtonCC type="clear history" />
				<ButtonCC type={isOpenedHistory ? 'close history' : 'open history'} />
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
