import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@store';
import { ErrorBoundary } from '@components';
import { Global } from '@theme';
import { useCalculator } from '@hooks';

import { App } from './App';

const container = document.getElementById('root');

if (container === null) {
	throw new Error('Container element not found');
}

const root = createRoot(container);

const RootComponent = (): JSX.Element => {
	useCalculator();

	return <App />;
};

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ErrorBoundary>
					<Global />
					<RootComponent />
				</ErrorBoundary>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
