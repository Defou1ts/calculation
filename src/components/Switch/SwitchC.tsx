import React from 'react';
import { Round, SwitchWrapper } from './styled';
import { type SwitchProps } from './Switch.props';

export class SwitchC extends React.PureComponent<SwitchProps> {
	render(): JSX.Element {
		const { onClick, active, ...props } = this.props;

		return (
			<SwitchWrapper {...props} onClick={onClick}>
				<Round active={active} />
			</SwitchWrapper>
		);
	}
}
