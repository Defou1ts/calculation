import styled from 'styled-components';

export const StyledButton = styled.button`
	height: 35px;
	padding: 7px 14px;
	background-color: ${({ theme }) => theme.colors.red};
	border-radius: 10px;

	color: ${({ theme }) => theme.colors.white};
	cursor: pointer;

	transition: all 0.2s ease;

	&:hover {
		background-color: ${({ theme }) => theme.colors.lightRed};
	}
`;
