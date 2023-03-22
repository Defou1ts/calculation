import React from 'react';

import { ButtonFC, SwitchFC } from '@components';
import { useAppSelector } from '@store';

import { ControlPanel } from '../styled';

export const SettingsFC = (): JSX.Element => {
	const isOpenedHistory = useAppSelector((state) => state.history.isOpenedHistory);

	return (
		<ControlPanel>
			<SwitchFC />
			<ButtonFC type="clear history" />
			<ButtonFC type={isOpenedHistory ? 'close history' : 'open history'} />
		</ControlPanel>
	);
};
