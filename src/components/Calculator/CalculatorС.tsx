import React from 'react';
import { DisplayC, KeyboardC } from '@components';
import { CalculatorWrapper } from './styled';

export class CalculatorC extends React.Component {
	render(): JSX.Element {
		return (
			<CalculatorWrapper>
				<DisplayC />
				<KeyboardC />
			</CalculatorWrapper>
		);
	}
}
