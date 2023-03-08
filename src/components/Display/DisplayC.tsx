import React from 'react';
import { type RootState } from '@store';
import { connect, type ConnectedProps } from 'react-redux';
import { DisplayText, DisplayWrapper } from './styled';

export class DisplayClass extends React.Component<DisplayProps> {
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

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
	displayValue: state.calculator.displayValue,
	result: state.calculator.result,
});

const connector = connect(mapState);

type DisplayProps = ConnectedProps<typeof connector>;

export const DisplayC = connector(DisplayClass);
