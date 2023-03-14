import { type ConnectedProps } from 'react-redux';

import { type historyConnector } from './HistoryCC';

export interface MapStateToProps {
	isOpenedHistory: boolean;
}

export type HistoryProps = ConnectedProps<typeof historyConnector>;
