import React from 'react';
import { HistoryMonitorC } from '@components';
import { HistoryWrapper, StyledHistoryTitle } from './styled';

export class HistoryC extends React.Component {
	render(): JSX.Element {
		return (
			<HistoryWrapper>
				<StyledHistoryTitle>History</StyledHistoryTitle>
				<HistoryMonitorC />
			</HistoryWrapper>
		);
	}
}
