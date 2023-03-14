import React from 'react';

import { connect } from 'react-redux';

import { type RootState } from '@store';

import { type HistoryMonitorProps, type MapStateToProps } from './interfaces';

import { MonitorItem, MonitorList, MonitorWrapper } from '../styled';

export class HistoryMonitorClass extends React.Component<HistoryMonitorProps> {
	render(): JSX.Element {
		const { history } = this.props;

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
	}
}

const mapState = (state: RootState): MapStateToProps => ({
	history: state.calculator.history,
});

export const historyMonitorConnector = connect(mapState);

export const HistoryMonitorCC = historyMonitorConnector(HistoryMonitorClass);
