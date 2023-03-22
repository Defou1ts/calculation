import React from 'react';

import { CalculatorFC, HistoryFC } from '@components';

import { HomeWrapper } from '../styled';

export const HomeFC = (): JSX.Element => {
	return (
		<HomeWrapper>
			<CalculatorFC />
			<HistoryFC />
		</HomeWrapper>
	);
};
