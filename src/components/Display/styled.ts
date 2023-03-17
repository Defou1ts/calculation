import styled from 'styled-components';

export const DisplayWrapper = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 1fr 1fr;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.themeType.themeMonitorColor};
	padding: 27px 22px;
	border-radius: 10px;
	width: 100%;
`;

export const DisplayText = styled.p`
	font-weight: 400;
	font-size: ${({ theme }) => theme.fontSize[2]}px;
	line-height: 49px;
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;
