import React, { type ContextType } from 'react';

import { DisplayC, KeypadC } from '@components';
import { CalculatorContext } from '@interfaces';

import { CalculatorWrapper } from './styled';

export class CalculatorC extends React.Component {
	static contextType = CalculatorContext;
	context!: ContextType<typeof CalculatorContext>;

	render(): JSX.Element {
		const { handleKeyboardClick } = this.context;

		return (
			<CalculatorWrapper>
				<DisplayC />
				<KeypadC handleClick={handleKeyboardClick} />
			</CalculatorWrapper>
		);
	}
}
