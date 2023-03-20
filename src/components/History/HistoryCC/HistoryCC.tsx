import React from 'react';

import { connect } from 'react-redux';

import type { RootState } from '@store';

import { HistoryWrapper, MonitorItem, MonitorList, MonitorWrapper, StyledHistoryTitle } from '../styled';

import type { HistoryProps, MapStateToProps } from './interfaces';

export class HistoryClass extends React.Component<HistoryProps> {
	render(): JSX.Element | null {
		const { isOpenedHistory, history } = this.props;

		if (!isOpenedHistory) {
			return null;
		}

		return (
			<HistoryWrapper>
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
	}
}

const mapState = (state: RootState): MapStateToProps => ({
	isOpenedHistory: state.global.isOpenedHistory,
	history: state.calculator.history,
});

export const historyConnector = connect(mapState);

export const HistoryCC = historyConnector(HistoryClass);
