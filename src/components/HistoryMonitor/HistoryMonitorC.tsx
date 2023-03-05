import React from 'react';
import { MonitorItem, MonitorList, MonitorWrapper } from './styled';

export class HistoryMonitorC extends React.Component {
	render(): JSX.Element {
		return (
			<MonitorWrapper>
				<MonitorList>
					<MonitorItem>25+7=16</MonitorItem>
					<MonitorItem>25+7=16</MonitorItem>
					<MonitorItem>25+7=16</MonitorItem>
					<MonitorItem>25+7=16</MonitorItem>
				</MonitorList>
			</MonitorWrapper>
		);
	}
}
