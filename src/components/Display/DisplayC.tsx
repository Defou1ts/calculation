import React from 'react';
import { type DisplayProps } from './Display.props';
import { DisplayText, DisplayWrapper } from './styled';

export class DisplayC extends React.Component<DisplayProps> {
	render(): JSX.Element {
		const { displayValue, result } = this.props;
		const truncatedDisplayValue = displayValue.length > 18 ? displayValue.slice(0, 18) + '...' : displayValue;

		return (
			<DisplayWrapper>
				<DisplayText>{truncatedDisplayValue}</DisplayText>
				<DisplayText>{result}</DisplayText>
			</DisplayWrapper>
		);
	}
}
