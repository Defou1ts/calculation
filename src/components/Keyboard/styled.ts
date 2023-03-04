import styled from 'styled-components';

export const KeyboardWrapper = styled.div`
	display: grid;
	background: var(--content);
	grid-template-rows: repeat(5, 70px);
	grid-template-columns: repeat(4, 70px);
	gap: 21px 112px;
`;
