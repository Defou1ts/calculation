import styled from 'styled-components';

export const ControlPanel = styled.main`
	display: grid;
	grid-template-columns: repeat(auto-fill, 150px);
	grid-template-rows: 54px 54px;
	grid-auto-rows: 54px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.contentColor};
	padding: 27px 16px;
	align-items: center;
	justify-items: center;
	gap: 35px 35px;
`;
