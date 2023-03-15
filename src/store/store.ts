import { configureStore, type ThunkAction, type Action, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import themeReducer from './slices/theme.slice';
import calculatorReducer from './slices/calculator.slice';
import globalReducer from './slices/global.slice';

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
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
