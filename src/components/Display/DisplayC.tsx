import React from 'react';
import { DisplayText, DisplayWrapper } from './styled';

export class DisplayC extends React.Component {
	render(): JSX.Element {
		return (
			<DisplayWrapper>
				<DisplayText>123/2*6</DisplayText>
			</DisplayWrapper>
		);
	}
}
