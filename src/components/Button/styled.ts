import styled from 'styled-components';

export const StyledButton = styled.button`
	height: 35px;
	padding: 7px 14px;
	background-color: var(--red);
	border-radius: 10px;

	color: #f9f9f9;
	cursor: pointer;

	transition: all 0.2s ease;

	&:hover {
		background-color: var(--light-red);
	}
`;
