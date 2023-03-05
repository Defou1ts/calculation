import React from 'react';
import { HistoryWrapper, StyledHistoryTitle } from './styled';

export class HistoryC extends React.Component {
	render(): JSX.Element {
		return (
			<HistoryWrapper>
				<StyledHistoryTitle>History</StyledHistoryTitle>
			</HistoryWrapper>
		);
	}
}
