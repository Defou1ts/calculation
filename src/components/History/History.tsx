import React from 'react';

import { HistoryMonitor } from '@components';
import { useAppSelector } from '@store';

import { HistoryWrapper, StyledHistoryTitle } from './styled';

export const History = (): JSX.Element | null => {
	const isOpenedHistory = useAppSelector((state) => state.global.isOpenedHistory);

	if (!isOpenedHistory) {
		return null;
	}

	return (
		<HistoryWrapper>
			<StyledHistoryTitle>History</StyledHistoryTitle>
			<HistoryMonitor />
		</HistoryWrapper>
	);
};
