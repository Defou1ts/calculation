import React from 'react';
import { useAppSelector } from '@store';
import { DisplayText, DisplayWrapper } from './styled';

export const Display = (): JSX.Element => {
	const displayValue = useAppSelector((state) => state.calculator.displayValue);
	const result = useAppSelector((state) => state.calculator.result);

	const truncatedDisplayValue = displayValue.length > 18 ? displayValue.slice(0, 18) + '...' : displayValue;

	return (
		<DisplayWrapper>
			<DisplayText data-test-id="display-value">{truncatedDisplayValue}</DisplayText>
			<DisplayText data-test-id="display-result-value">{result}</DisplayText>
		</DisplayWrapper>
	);
};
