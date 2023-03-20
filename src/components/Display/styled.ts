import styled from 'styled-components';

export const DisplayWrapper = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 1fr 1fr;
	justify-content: space-between;

	background-color: ${({ theme }) => theme.themeType.themeMonitorColor};
	padding: ${({ theme }) => theme.padding[8]}px ${({ theme }) => theme.padding[4]}px;
	border-radius: ${({ theme }) => theme.borderRadius[0]}px;
	width: 100%;
`;

export const DisplayText = styled.p`
	font-weight: ${({ theme }) => theme.fontWeight[0]}px;
	font-size: ${({ theme }) => theme.fontSize[2]}px;
	line-height: ${({ theme }) => theme.lineHeight[2]}px;
	color: ${({ theme }) => theme.themeType.themeTextColor};
	width: 100%;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
