import styled from 'styled-components';

export const CalculatorWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 152px 450px;
	gap: 29px;

	padding: 30px 26px;

	border-radius: 20px;
	background: ${({ theme }) => theme.contentColor};
`;
