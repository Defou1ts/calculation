import { type ConnectedProps } from 'react-redux';

import { type historyConnector } from './HistoryCC';

export interface MapStateToProps {
	isOpenedHistory: boolean;
	history: string[];
}

export type HistoryProps = ConnectedProps<typeof historyConnector>;
