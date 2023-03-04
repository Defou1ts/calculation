import { Calculator } from '@components';
import React from 'react';
import { Main } from './styled';

export const Home = (): JSX.Element => {
	return (
		<Main>
			<Calculator />
			History
		</Main>
	);
};
