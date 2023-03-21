import React from 'react';

import { Round, SwitchWrapper } from '../styled';

import type { SwitchProps } from '../interfaces';

export const SwitchFC = ({ active, ...props }: SwitchProps): JSX.Element => {
	return (
		<SwitchWrapper {...props}>
			<Round active={active} />
		</SwitchWrapper>
	);
};
