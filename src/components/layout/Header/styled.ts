import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
	display: grid;
	align-items: center;

	padding: 37px 24px;
	background: var(--content);
	border-radius: 20px;
`;

export const Navigation = styled.nav`
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: auto auto 1fr auto auto;
	gap: 17px;
`;

export const StyledNavLink = styled(NavLink)`
	color: var(--text);
	&.active {
		text-shadow: 1px 1px 1px black;
	}
`;
