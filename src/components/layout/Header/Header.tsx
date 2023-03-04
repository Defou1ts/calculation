import React from 'react';
import { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } from '@constants';
import { HeaderWrapper, Navigation, StyledNavLink } from './styled';

export const Header = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Navigation>
				<StyledNavLink to={HOME_FC_ROUTE}>Home FC</StyledNavLink>
				<StyledNavLink to={HOME_CC_ROUTE}>Home CC</StyledNavLink>
				<span></span>
				<StyledNavLink to={SETTINGS_FC_ROUTE}>Settings FC</StyledNavLink>
				<StyledNavLink to={SETTINGS_CC_ROUTE}>Settings CC</StyledNavLink>
			</Navigation>
		</HeaderWrapper>
	);
};
