import React from 'react';
import { HistoryMonitor } from '@components';
import { HistoryWrapper, StyledHistoryTitle } from './styled';
import { useAppSelector } from '@store';

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
