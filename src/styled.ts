import styled from 'styled-components';

export const AppWrapper = styled.div`
	background: ${({ theme }) => theme.themeType.themeBackgroundColor};
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;
