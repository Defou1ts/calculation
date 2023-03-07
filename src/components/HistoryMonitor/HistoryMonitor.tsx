import { useAppSelector } from '@store';
import React from 'react';
import { MonitorItem, MonitorList, MonitorWrapper } from './styled';

export const HistoryMonitor = (): JSX.Element => {
	const history = useAppSelector((state) => state.calculator.history);

	return (
		<MonitorWrapper>
			<MonitorList>
				{history.map((value) => (
					<MonitorItem key={value}>{value}</MonitorItem>
				))}
			</MonitorList>
		</MonitorWrapper>
	);
};
