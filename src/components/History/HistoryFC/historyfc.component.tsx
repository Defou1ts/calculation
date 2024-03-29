import React from 'react';

import { useAppSelector } from '@store';

import { HistoryWrapper, MonitorItem, MonitorList, MonitorWrapper, StyledHistoryTitle } from '../styled';

export const HistoryFC = (): JSX.Element | null => {
	const isOpenedHistory = useAppSelector((state) => state.history.isOpenedHistory);
	const history = useAppSelector((state) => state.calculator.history);

	if (!isOpenedHistory) {
		return null;
	}

	return (
		<HistoryWrapper data-test-id='history-wrapper'>
			<StyledHistoryTitle>History</StyledHistoryTitle>
			<MonitorWrapper>
				<MonitorList>
					{history.map((value, index) => (
						<MonitorItem data-test-id="history-monitor" key={index}>
							{value}
						</MonitorItem>
					))}
				</MonitorList>
			</MonitorWrapper>
		</HistoryWrapper>
	);
};
