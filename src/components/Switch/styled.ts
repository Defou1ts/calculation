import styled from 'styled-components';

import { type SwitchWrapperProps, type SwitchRoundProps } from './interfaces';

export const SwitchWrapper = styled.button<SwitchWrapperProps>`
	cursor: pointer;
	width: ${({ theme }) => theme.width[6]}px;
	border-radius: ${({ theme }) => theme.borderRadius[2]}px;
	padding: ${({ theme }) => theme.padding[0]}px;
	border: 1px solid ${({ theme }) => theme.themeType.themeButtonColor};
`;

export const Round = styled.div<SwitchRoundProps>`
	width: ${({ theme }) => theme.width[5]}px;
	height: ${({ theme }) => theme.height[2]}px;
	border-radius: ${({ theme }) => theme.borderRadius[2]}%;
	background-color: ${({ theme }) => theme.themeType.themeButtonColor};
	transition: all 0.2s ease;
	transform: translateX(${({ active }) => (active ? 55 : 0)}px);
`;
