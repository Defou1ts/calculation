import styled from 'styled-components';

export const HistoryWrapper = styled.div`
	display: grid;
	grid-template-columns: 352px;
	grid-template-rows: 30px 1fr;
	gap: 14px;
	padding: 30px 27px;

	background-color: var(--content);
	border-radius: 20px;
`;

export const StyledHistoryTitle = styled.h2`
	font-weight: 400;
	font-size: 24px;
	line-height: 33px;
	color: var(--text);
`;
