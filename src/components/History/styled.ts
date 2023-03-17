import styled from 'styled-components';

export const HistoryWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(352px, 600px);
	grid-template-rows: 30px 1fr;
	gap: 14px;
	padding: 30px 27px;

	background-color: ${({ theme }) => theme.themeType.themeContentColor};
	border-radius: 20px;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledHistoryTitle = styled.h2`
	font-weight: 400;
	font-size: ${({ theme }) => theme.fontSize[1]}px;
	line-height: 33px;
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;

export const MonitorWrapper = styled.div`
	padding: 20px;
	background-color: ${({ theme }) => theme.themeType.themeMonitorColor};
	border-radius: 20px;
`;

export const MonitorList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 11px;
`;

export const MonitorItem = styled.li`
	font-weight: ${({ theme }) => theme.fontWeight[0]};
	font-size: ${({ theme }) => theme.fontSize[0]}px;
	line-height: 22px;
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;
