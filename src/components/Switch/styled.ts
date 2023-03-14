import styled from 'styled-components';

import { type SwitchProps } from './Switch.props';

export const SwitchWrapper = styled.button<Pick<SwitchProps, 'onClick'>>`
	cursor: pointer;
	width: 110px;
	border-radius: 50px;
	padding: 8px;
	border: 1px solid var(--button);
`;

export const Round = styled.div<Pick<SwitchProps, 'active'>>`
	width: 38px;
	height: 38px;
	border-radius: 50%;
	background-color: var(--button);
	transition: all 0.2s ease;
	transform: translateX(${(props) => (props.active ? '55px' : '0px')});
`;
