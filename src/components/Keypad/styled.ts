import styled from 'styled-components';

export const KeypadWrapper = styled.div`
	display: grid;
	background: ${({ theme }) => theme.themeType.themeContentColor};
	grid-template-rows: repeat(5, ${({ theme }) => theme.width[1]}px);
	grid-template-columns: repeat(4, auto);
	justify-content: space-between;
	gap: ${({ theme }) => theme.gap[4]}px ${({ theme }) => theme.gap[0]}px;
`;
