import type { ConnectedProps } from 'react-redux';
import type { historyConnector } from './historycc.component';

export interface MapStateToProps {
	isOpenedHistory: boolean;
	history: string[];
}

export type HistoryProps = ConnectedProps<typeof historyConnector>;
