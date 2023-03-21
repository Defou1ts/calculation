import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { persistor, store } from '@store';
import { CalculatorProvider, ErrorBoundary } from '@components';
import { Global } from '@theme';

import { App } from './App';

const container = document.getElementById('root');

if (container === null) {
	throw new Error('Container element not found');
}

const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ErrorBoundary>
					<CalculatorProvider>
						<Global />
						<App />
					</CalculatorProvider>
				</ErrorBoundary>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
