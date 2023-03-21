import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { CalculatorProvider } from 'components/CalculatorProvider/calculator.provider';

import { persistor, store } from '@store';
import { ErrorBoundary } from '@components';
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
				<CalculatorProvider>
					<ErrorBoundary>
						<Global />
						<App />
					</ErrorBoundary>
				</CalculatorProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
);
