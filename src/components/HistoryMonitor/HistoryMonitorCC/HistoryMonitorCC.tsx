import React from 'react';

import { connect, type ConnectedProps } from 'react-redux';

import { type RootState } from '@store';

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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
	history: state.calculator.history,
});

const connector = connect(mapState);

type HistoryMonitorProps = ConnectedProps<typeof connector>;

export const HistoryMonitorCC = connector(HistoryMonitorClass);
