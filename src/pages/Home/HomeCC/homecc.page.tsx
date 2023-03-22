import React from 'react';

import { CalculatorCC, HistoryCC } from '@components';

import { HomeWrapper } from '../styled';

export class HomeСC extends React.Component {
	render(): JSX.Element {
		return (
			<HomeWrapper>
				<CalculatorCC />
				<HistoryCC />
			</HomeWrapper>
		);
	}
}
