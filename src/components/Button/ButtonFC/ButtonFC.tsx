import React from 'react';

import { StyledButton } from '../styled';

import type { ButtonProps } from '../interfaces';

export const ButtonFC = ({ children, ...props }: ButtonProps): JSX.Element => {
	return <StyledButton {...props}>{children}</StyledButton>;
};
