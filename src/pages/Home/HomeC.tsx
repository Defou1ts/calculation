import React from 'react';
import { CalculatorC, HistoryC } from '@components';
import { HomeWrapper } from './styled';

export class HomeС extends React.Component {
	render(): JSX.Element {
		return (
			<HomeWrapper>
				<CalculatorC />
				<HistoryC />
			</HomeWrapper>
		);
	}
}
