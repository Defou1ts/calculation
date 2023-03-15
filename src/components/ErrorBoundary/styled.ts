import styled from 'styled-components';

export const ErrorWrapper = styled.div`
	display: grid;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.contentColor};
	padding: 27px 16px;
	text-align: center;
	color: ${({ theme }) => theme.textColor};
`;
