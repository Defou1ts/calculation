import React from 'react';

import { type KeyProps } from './Key.props';
import { StyledKeyButton } from './styled';

export const Key = ({ keyName, ...props }: KeyProps): JSX.Element => {
	return (
		<StyledKeyButton data-test-id="key" {...props}>
			{keyName}
		</StyledKeyButton>
	);
};
