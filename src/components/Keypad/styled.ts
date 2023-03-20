import styled from 'styled-components';

export const KeypadWrapper = styled.div`
	display: grid;
	background: ${({ theme }) => theme.themeType.themeContentColor};
	grid-template-rows: repeat(5, ${({ theme }) => theme.width[1]}px);
	grid-template-columns: repeat(4, auto);
	justify-content: space-between;
	gap: ${({ theme }) => theme.gap[4]}px ${({ theme }) => theme.gap[0]}px;
`;

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
