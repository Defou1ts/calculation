import { useAppSelector } from '@store';
import React from 'react';
import { DisplayText, DisplayWrapper } from './styled';

export const Display = (): JSX.Element => {
	const displayValue = useAppSelector((state) => state.calculator.displayValue);
	const result = useAppSelector((state) => state.calculator.result);

	const truncatedDisplayValue = displayValue.length > 18 ? displayValue.slice(0, 18) + '...' : displayValue;

	return (
		<DisplayWrapper>
			<DisplayText>{truncatedDisplayValue}</DisplayText>
			<DisplayText>{result}</DisplayText>
		</DisplayWrapper>
	);
};
