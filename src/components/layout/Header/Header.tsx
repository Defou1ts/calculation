import React from 'react';

import { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } from '@constants';

import { HeaderWrapper, Navigation, StyledNavLink } from './styled';

export const Header = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Navigation>
				<StyledNavLink data-test-id="nav-link" to={HOME_FC_ROUTE}>
					Home FC
				</StyledNavLink>
				<StyledNavLink data-test-id="nav-link" to={HOME_CC_ROUTE}>
					Home CC
				</StyledNavLink>
				<span></span>
				<StyledNavLink data-test-id="nav-link" to={SETTINGS_FC_ROUTE}>
					Settings FC
				</StyledNavLink>
				<StyledNavLink data-test-id="nav-link" to={SETTINGS_CC_ROUTE}>
					Settings CC
				</StyledNavLink>
			</Navigation>
		</HeaderWrapper>
	);
};
