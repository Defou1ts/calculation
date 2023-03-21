import React from 'react';

import { DisplayFC, KeypadFC } from '@components';

import { CalculatorWrapper } from '../styled';

export const CalculatorFC = (): JSX.Element => {
	return (
		<CalculatorWrapper>
			<DisplayFC />
			<KeypadFC />
		</CalculatorWrapper>
	);
};
