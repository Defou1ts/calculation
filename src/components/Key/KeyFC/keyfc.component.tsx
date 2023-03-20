import React from 'react';

import { StyledKeyButton } from '../styled';

import type { KeyProps } from '../interfaces';

export const KeyFC = ({ keyName, ...props }: KeyProps): JSX.Element => {
	return (
		<StyledKeyButton data-test-id="key" {...props}>
			{keyName}
		</StyledKeyButton>
	);
};
