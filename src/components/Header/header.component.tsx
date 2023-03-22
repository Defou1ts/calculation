import React from 'react';

import { navigationElements } from '@constants';

import { HeaderWrapper, Navigation, StyledNavLink } from './styled';

export const Header = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Navigation>
				{navigationElements.map(({ name, path }) => (
					<StyledNavLink data-test-id="nav-link" key={name} to={path}>
						{name}
					</StyledNavLink>
				))}
			</Navigation>
		</HeaderWrapper>
	);
};
