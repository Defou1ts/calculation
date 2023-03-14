import React, { PureComponent } from 'react';

import { type ButtonProps } from './interfaces';
import { StyledButton } from './styled';

export class ButtonC extends PureComponent<ButtonProps> {
	render(): JSX.Element {
		const { children, className, ...props } = this.props;

		return (
			<StyledButton className={className} {...props}>
				{children}
			</StyledButton>
		);
	}
}
