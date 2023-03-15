import styled from 'styled-components';

export const KeypadWrapper = styled.div`
	display: grid;
	background: ${({ theme }) => theme.contentColor};
	grid-template-rows: repeat(5, 70px);
	grid-template-columns: repeat(4, auto);
	justify-content: space-between;
	gap: 21px 10px;
`;
