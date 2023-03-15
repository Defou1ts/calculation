import React from 'react';

import { HistoryMonitorFC } from '@components';
import { useAppSelector } from '@store';

import { HistoryWrapper, StyledHistoryTitle } from '../styled';

export const HistoryFC = (): JSX.Element | null => {
	const isOpenedHistory = useAppSelector((state) => state.global.isOpenedHistory);

	if (!isOpenedHistory) {
		return null;
	}

	return (
		<HistoryWrapper>
			<StyledHistoryTitle>History</StyledHistoryTitle>
			<HistoryMonitorFC />
		</HistoryWrapper>
	);
};
