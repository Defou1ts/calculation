import React from 'react';

import { navigationElements } from '@utils';

import { HeaderWrapper, Navigation, StyledNavLink } from './styled';

export const Header = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Navigation>
				{navigationElements.map(({ name, path }) => (
					<StyledNavLink key={name} to={path}>
						{name}
					</StyledNavLink>
				))}
			</Navigation>
		</HeaderWrapper>
	);
};
