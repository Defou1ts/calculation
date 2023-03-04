import React from 'react';
import { KeyboardC } from '@components';
import { CalculatorWrapper } from './styled';

export class CalculatorC extends React.Component {
	render(): JSX.Element {
		return (
			<CalculatorWrapper>
				<h1>Monitor</h1>
				<KeyboardC />
			</CalculatorWrapper>
		);
	}
}
