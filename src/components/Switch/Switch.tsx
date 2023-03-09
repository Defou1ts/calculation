import React from 'react';
import { Round, SwitchWrapper } from './styled';
import { type SwitchProps } from './Switch.props';

export const Switch = ({ onClick, active }: SwitchProps): JSX.Element => {
	return (
		<SwitchWrapper onClick={onClick}>
			<Round active={active} />
		</SwitchWrapper>
	);
};
