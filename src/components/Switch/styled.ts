import styled from 'styled-components';

import { type SwitchProps } from './interfaces';

export const SwitchWrapper = styled.button<Pick<SwitchProps, 'onClick'>>`
	cursor: pointer;
	width: 110px;
	border-radius: 50px;
	padding: 8px;
	border: 1px solid ${({ theme }) => theme.buttonColor};
`;

export const Round = styled.div<Pick<SwitchProps, 'active'>>`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.buttonColor};
	transition: all 0.2s ease;
	transform: translateX(${({ active }) => (active ? 55 : 0)}px);
`;
