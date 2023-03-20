import React, { PureComponent } from 'react';

import { StyledButton } from '../styled';

import type { ButtonProps } from '../interfaces';

export class ButtonCC extends PureComponent<ButtonProps> {
	render(): JSX.Element {
		const { children, ...props } = this.props;

		return <StyledButton {...props}>{children}</StyledButton>;
	}
}
