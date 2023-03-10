import React from 'react';
import { Round, SwitchWrapper } from './styled';
import { type SwitchProps } from './Switch.props';

export const Switch = ({ onClick, active, ...props }: SwitchProps): JSX.Element => {
	return (
		<SwitchWrapper {...props} onClick={onClick}>
			<Round active={active} />
		</SwitchWrapper>
	);
};
