import React from 'react';

import { type ButtonProps } from '../interfaces';
import { StyledButton } from '../styled';

export const ButtonFC = ({ children, ...props }: ButtonProps): JSX.Element => {
	return <StyledButton {...props}>{children}</StyledButton>;
};
