import type { ConnectedProps } from 'react-redux';
import type { displayConnector } from './DisplayCC';

export interface MapStateToProps {
	displayValue: string;
	result: string;
}

export type DisplayProps = ConnectedProps<typeof displayConnector>;
