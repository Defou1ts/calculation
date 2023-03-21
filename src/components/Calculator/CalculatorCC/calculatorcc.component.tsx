import React from 'react';

import { DisplayCC, KeypadCC } from '@components';

import { CalculatorWrapper } from '../styled';

export class CalculatorCC extends React.Component {
	render(): JSX.Element {
		return (
			<CalculatorWrapper>
				<DisplayCC />
				<KeypadCC />
			</CalculatorWrapper>
		);
	}
}
