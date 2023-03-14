import React from 'react';

import { connect, type ConnectedProps } from 'react-redux';

import { HistoryMonitorC } from '@components';
import { type RootState } from '@store';

import { HistoryWrapper, StyledHistoryTitle } from './styled';

export class HistoryClass extends React.Component<HistoryProps> {
	render(): JSX.Element | null {
		const { isOpenedHistory } = this.props;

		if (!isOpenedHistory) {
			return null;
		}

		return (
			<HistoryWrapper>
				<StyledHistoryTitle>History</StyledHistoryTitle>
				<HistoryMonitorC />
			</HistoryWrapper>
		);
	}
}

interface MapStateProps {
	isOpenedHistory: boolean;
}

const mapState = (state: RootState): MapStateProps => ({
	isOpenedHistory: state.global.isOpenedHistory,
});

const connector = connect(mapState);

type HistoryProps = ConnectedProps<typeof connector>;

export const HistoryC = connector(HistoryClass);
