import React from 'react';

import { type KeyProps } from '../interfaces';
import { StyledKeyButton } from '../styled';

export const KeyFC = ({ keyName, ...props }: KeyProps): JSX.Element => {
	return (
		<StyledKeyButton data-test-id="key" {...props}>
			{keyName}
		</StyledKeyButton>
	);
};
