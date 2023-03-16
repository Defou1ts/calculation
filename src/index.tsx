import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@store';

import { App } from './App';

const container = document.getElementById('root');

if (container === null) {
	throw new Error('Container element not found');
}

const root = createRoot(container);

root.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>
);
