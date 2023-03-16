import styled from 'styled-components';

export const HistoryWrapper = styled.div`
	display: grid;
	grid-template-columns: minmax(352px, 600px);
	grid-template-rows: 30px 1fr;
	gap: 14px;
	padding: 30px 27px;

	background-color: ${({ theme }) => theme.contentColor};
	border-radius: 20px;

	@media screen and (max-width: 1100px) {
		grid-template-columns: 1fr;
	}
`;

export const StyledHistoryTitle = styled.h2`
	font-weight: 400;
	font-size: 24px;
	line-height: 33px;
	color: ${({ theme }) => theme.textColor};
`;

export const MonitorWrapper = styled.div`
	padding: 20px;
	background-color: ${({ theme }) => theme.monitorColor};
	border-radius: 20px;
`;

export const MonitorList = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	gap: 11px;
`;

export const MonitorItem = styled.li`
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	color: ${({ theme }) => theme.textColor};
`;

