import React from 'react';
import { DisplayC, KeypadC } from '@components';
import { CalculatorWrapper } from './styled';

export class CalculatorC extends React.Component {
	render(): JSX.Element {
		return (
			<CalculatorWrapper>
				<DisplayC />
				<KeypadC />
			</CalculatorWrapper>
		);
	}
}
