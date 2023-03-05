import React from 'react';
import { Calculator, History } from '@components';
import { Main } from './styled';

export const Home = (): JSX.Element => {
	return (
		<Main>
			<Calculator />
			<History />
		</Main>
	);
};
