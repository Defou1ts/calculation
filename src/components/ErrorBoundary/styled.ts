import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	display: grid;
	border-radius: ${({ theme }) => theme.borderRadius[1]};
	background-color: ${({ theme }) => theme.themeType.themeContentColor};
	padding: ${({ theme }) => theme.padding[8]}px ${({ theme }) => theme.padding[2]}px;
	text-align: center;
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;
