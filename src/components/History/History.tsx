import React from 'react';
import { HistoryMonitor } from '@components';
import { HistoryWrapper, StyledHistoryTitle } from './styled';

export const History = (): JSX.Element => (
	<HistoryWrapper>
		<StyledHistoryTitle>History</StyledHistoryTitle>
		<HistoryMonitor />
	</HistoryWrapper>
);
