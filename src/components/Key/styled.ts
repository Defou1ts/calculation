import styled from 'styled-components';

export const StyledKeyButton = styled.button`
	display: grid;
	justify-content: center;
	align-items: center;

	width: ${({ theme }) => theme.width[1]}px;
	height: ${({ theme }) => theme.height[1]}px;
	border-radius: ${({ theme }) => theme.borderRadius[2]}%;

	background: ${({ theme }) => theme.themeType.themeButtonColor};
	transition: 0.2 all ease;

	cursor: pointer;

	font-size: ${({ theme }) => theme.fontSize[1]}px;

	&:hover {
		transform: scale(1.01);
	}
`;
