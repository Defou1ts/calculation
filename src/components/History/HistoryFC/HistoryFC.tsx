import React from 'react';

import { useAppSelector } from '@store';

import { HistoryWrapper, MonitorItem, MonitorList, MonitorWrapper, StyledHistoryTitle } from '../styled';

export const HistoryFC = (): JSX.Element | null => {
	const isOpenedHistory = useAppSelector((state) => state.global.isOpenedHistory);
	const history = useAppSelector((state) => state.calculator.history);

	if (!isOpenedHistory) {
		return null;
	}

	return (
		<HistoryWrapper>
			<StyledHistoryTitle>History</StyledHistoryTitle>
			<MonitorWrapper>
				<MonitorList>
					{history.map((value) => (
						<MonitorItem data-test-id="history-monitor" key={value}>
							{value}
						</MonitorItem>
					))}
				</MonitorList>
			</MonitorWrapper>
		</HistoryWrapper>
	);
};
