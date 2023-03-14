import { configureStore, type ThunkAction, type Action } from '@reduxjs/toolkit';

import themeReducer from './slices/theme.slice';
import calculatorReducer from './slices/calculator.slice';
import globalReducer from './slices/global.slice';

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		calculator: calculatorReducer,
		global: globalReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
