import styled from 'styled-components';

export const HistoryWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(352px, 600px);
	grid-template-rows: 30px 1fr;
	gap: 14px;
	padding: ${({ theme }) => theme.padding[9]}px ${({ theme }) => theme.padding[8]}px;

	background-color: ${({ theme }) => theme.themeType.themeContentColor};
	border-radius: ${({ theme }) => theme.borderRadius[1]}px;

	@media screen and (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledHistoryTitle = styled.h2`
	font-weight: ${({ theme }) => theme.fontWeight[0]}px;
	font-size: ${({ theme }) => theme.fontSize[1]}px;
	line-height: ${({ theme }) => theme.lineHeight[1]}px;
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;

export const MonitorWrapper = styled.div`
	padding: ${({ theme }) => theme.padding[3]}px;
	background-color: ${({ theme }) => theme.themeType.themeMonitorColor};
	border-radius: ${({ theme }) => theme.borderRadius[1]}px;
`;

export const MonitorList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: ${({ theme }) => theme.gap[1]}px;
`;

export const MonitorItem = styled.li`
	font-weight: ${({ theme }) => theme.fontWeight[0]};
	font-size: ${({ theme }) => theme.fontSize[0]}px;
	line-height: ${({ theme }) => theme.lineHeight[0]}px;
	color: ${({ theme }) => theme.themeType.themeTextColor};
`;
