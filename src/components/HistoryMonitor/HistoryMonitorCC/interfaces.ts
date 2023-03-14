import { type ConnectedProps } from 'react-redux/es/exports';

import { type historyMonitorConnector } from './HistoryMonitorCC';

export interface MapStateToProps {
	history: string[];
}

export type HistoryMonitorProps = ConnectedProps<typeof historyMonitorConnector>;
