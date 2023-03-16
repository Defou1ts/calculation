import styled from 'styled-components';

export const HomeWrapper = styled.main`
	display: grid;
	grid-template-columns: 1fr auto;
	gap: 15px;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
	}
`;
