import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: ${({ theme }) => theme.width[3]}px ${({ theme }) => theme.width[4]}px;
	gap: ${({ theme }) => theme.gap[5]}px;

	padding: ${({ theme }) => theme.padding[9]}px ${({ theme }) => theme.padding[7]}px;

	border-radius: ${({ theme }) => theme.borderRadius[1]}px;
	background: ${({ theme }) => theme.themeType.themeContentColor};
`;
