import styled from 'styled-components';

export const StyledButton = styled.button`
	height: ${({ theme }) => theme.height[0]}px;
	padding: ${({ theme }) => theme.padding[0]}px ${({ theme }) => theme.padding[1]}px;
	background-color: ${({ theme }) => theme.colors.red};
	border-radius: ${({ theme }) => theme.borderRadius[0]}px;

	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;

	transition: all 0.2s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.lightRed};
	}
`;
