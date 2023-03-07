import React from 'react';
import { CalculatorFC, History } from '@components';
import { Main } from './styled';

export const Home = (): JSX.Element => {
	return (
		<Main>
			<CalculatorFC />
			<History />
		</Main>
	);
};
