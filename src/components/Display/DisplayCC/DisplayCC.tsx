import React from 'react';

import { connect } from 'react-redux';

import { type RootState } from '@store';

import { type DisplayProps, type MapStateToProps } from './interfaces';

import { DisplayText, DisplayWrapper } from '../styled';

export class DisplayClass extends React.Component<DisplayProps> {
	render(): JSX.Element {
		const { displayValue, result } = this.props;

		return (
			<DisplayWrapper>
				<DisplayText data-test-id="display-value">{displayValue}</DisplayText>
				<DisplayText data-test-id="display-result-value">{result}</DisplayText>
			</DisplayWrapper>
		);
	}
}

const mapStateToProps = (state: RootState): MapStateToProps => ({
	displayValue: state.calculator.displayValue,
	result: state.calculator.result,
});

export const displayConnector = connect(mapStateToProps);

export const DisplayCC = displayConnector(DisplayClass);
