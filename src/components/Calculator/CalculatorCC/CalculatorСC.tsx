import React from 'react';
import type { ContextType } from 'react';

import { DisplayCC, KeypadCC } from '@components';
import { CalculatorContext } from '@interfaces';

import { CalculatorWrapper } from '../styled';

export class CalculatorCC extends React.Component {
	static contextType = CalculatorContext;
	context!: ContextType<typeof CalculatorContext>;

	render(): JSX.Element {
		const { handleKeyboardClick } = this.context;

		return (
			<CalculatorWrapper>
				<DisplayCC />
				<KeypadCC handleClick={handleKeyboardClick} />
			</CalculatorWrapper>
		);
	}
}
