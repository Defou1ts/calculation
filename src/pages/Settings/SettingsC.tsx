import React from 'react';
import { SettingsWrapper } from './styled';

export class SettingsC extends React.Component {
	render(): JSX.Element {
		return (
			<SettingsWrapper>
				<span>switch</span>
				<span>clearHistory</span>
			</SettingsWrapper>
		);
	}
}
