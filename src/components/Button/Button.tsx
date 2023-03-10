import React from 'react';
import { type ButtonProps } from './Button.props';
import { StyledButton } from './styled';

export const Button = ({ children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<StyledButton className={className} {...props}>
			{children}
		</StyledButton>
	);
};
