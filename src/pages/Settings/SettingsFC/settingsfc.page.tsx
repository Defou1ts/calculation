import React from 'react';

import { ButtonFC, SwitchFC } from '@components';
import { useAppSelector } from '@store';
import { clear, close, open } from '@constants';

import { ControlPanel } from '../styled';

export const SettingsFC = (): JSX.Element => {
	const isOpenedHistory = useAppSelector((state) => state.history.isOpenedHistory);

	return (
		<ControlPanel>
			<SwitchFC />
			<ButtonFC type={clear} />
			<ButtonFC type={isOpenedHistory ? close : open} />
		</ControlPanel>
	);
};
