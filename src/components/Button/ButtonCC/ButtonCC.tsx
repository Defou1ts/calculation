import React, { PureComponent } from 'react';

import { type ButtonProps } from '../interfaces';
import { StyledButton } from '../styled';

export class ButtonCC extends PureComponent<ButtonProps> {
	render(): JSX.Element {
		const { children, ...props } = this.props;

		return <StyledButton {...props}>{children}</StyledButton>;
	}
}
