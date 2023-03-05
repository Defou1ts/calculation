import styled from 'styled-components';

export const MonitorWrapper = styled.div`
	padding: 20px;
	background-color: var(--monitor);
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
	color: var(--text);

`;
