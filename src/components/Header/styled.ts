import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
	display: grid;
	align-items: center;

	padding: ${({ theme }) => theme.padding[10]}px ${({ theme }) => theme.padding[5]}px;
	background: ${({ theme }) => theme.themeType.themeContentColor};
	border-radius: ${({ theme }) => theme.borderRadius[1]}px;
`;

export const Navigation = styled.nav`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: auto auto auto auto;
	justify-content: left;
	gap: ${({ theme }) => theme.gap[3]}px;
`;

export const StyledNavLink = styled(NavLink)`
	color: ${({ theme }) => theme.themeType.themeTextColor};
	&.active {
		text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.black};
	}
`;
