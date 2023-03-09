import React from 'react';
import { CalculatorFC, History } from '@components';
import { HomeWrapper } from './styled';

export const Home = (): JSX.Element => {
	return (
		<HomeWrapper>
			<CalculatorFC />
			<History />
		</HomeWrapper>
	);
};
