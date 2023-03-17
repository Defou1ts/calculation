import styled from 'styled-components';

export const LayoutWrapper = styled.div`
	display: grid;
	grid-template-rows: ${({ theme }) => theme.width[2]}px auto;
	grid-template-columns: 1fr;
	background-color: ${({ theme }) => theme.themeType.themeBackgroundColor};
	gap: ${({ theme }) => theme.gap[3]}px;

	padding: ${({ theme }) => theme.padding[11]}px;

	min-height: 100vh;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
		padding: ${({ theme }) => theme.padding[6]}px;
	}
`;
