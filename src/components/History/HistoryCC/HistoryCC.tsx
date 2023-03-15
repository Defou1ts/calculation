import React from 'react';

import { connect } from 'react-redux';

import { HistoryMonitorCC } from '@components';
import { type RootState } from '@store';

import { type HistoryProps, type MapStateToProps } from './interfaces';

import { HistoryWrapper, StyledHistoryTitle } from '../styled';

export class HistoryClass extends React.Component<HistoryProps> {
	render(): JSX.Element | null {
		const { isOpenedHistory } = this.props;

		if (!isOpenedHistory) {
			return null;
		}

		return (
			<HistoryWrapper>
				<StyledHistoryTitle>History</StyledHistoryTitle>
				<HistoryMonitorCC />
			</HistoryWrapper>
		);
	}
}

const mapState = (state: RootState): MapStateToProps => ({
	isOpenedHistory: state.global.isOpenedHistory,
});

export const historyConnector = connect(mapState);

export const HistoryCC = historyConnector(HistoryClass);
