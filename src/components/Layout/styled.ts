import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: 107px auto;
	grid-template-columns: 1fr;
	background-color: ${({ theme }) => theme.themeType.backgroundColor};
	gap: 17px;

	padding: 150px;

	min-height: 100vh;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
		padding: 25px;
	}
`;
