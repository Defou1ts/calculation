import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import themeReducer from './slices/theme.slice';
import calculatorReducer from './slices/calculator.slice';
import globalReducer from './slices/global.slice';

import type { ThunkAction, Action } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	theme: themeReducer,
	calculator: calculatorReducer,
	global: globalReducer,
});

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
