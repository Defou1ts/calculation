import React from 'react';

import { useAppSelector } from '@store';

import { MonitorItem, MonitorList, MonitorWrapper } from '../styled';

export const HistoryMonitorFC = (): JSX.Element => {
	const history = useAppSelector((state) => state.calculator.history);

	return (
		<MonitorWrapper>
			<MonitorList>
				{history.map((value) => (
					<MonitorItem data-test-id="history-monitor" key={value}>
						{value}
					</MonitorItem>
				))}
			</MonitorList>
		</MonitorWrapper>
	);
};
