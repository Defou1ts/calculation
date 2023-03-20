import React from 'react';

import { useAppSelector } from '@store';

import { DisplayText, DisplayWrapper } from '../styled';

export const DisplayFC = (): JSX.Element => {
	const displayValue = useAppSelector((state) => state.calculator.displayValue);
	const result = useAppSelector((state) => state.calculator.result);

	return (
		<DisplayWrapper>
			<DisplayText data-test-id="display-value">{displayValue}</DisplayText>
			<DisplayText data-test-id="display-result-value">{result}</DisplayText>
		</DisplayWrapper>
	);
};
