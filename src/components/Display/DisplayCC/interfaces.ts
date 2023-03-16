import { type ConnectedProps } from 'react-redux';

import { type displayConnector } from './DisplayCC';

export interface MapStateToProps {
	displayValue: string;
	result: number | '';
}

export type DisplayProps = ConnectedProps<typeof displayConnector>;
