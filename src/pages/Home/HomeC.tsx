import React from 'react';
import { CalculatorC, HistoryC } from '@components';
import { Main } from './styled';

export class HomeС extends React.Component {
	render(): JSX.Element {
		return (
			<Main>
				<CalculatorC />
				<HistoryC />
			</Main>
		);
	}
}
