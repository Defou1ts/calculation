import styled from 'styled-components';

export const StyledKeyButton = styled.button`
	display: grid;
	justify-content: center;
	align-items: center;

	width: 70px;
	height: 70px;
	border-radius: 50%;

	background: ${({ theme }) => theme.buttonColor};
	transition: 0.2 all ease;

	cursor: pointer;

	font-size: 24px;

	&:hover {
		transform: scale(1.01);
	}
`;
