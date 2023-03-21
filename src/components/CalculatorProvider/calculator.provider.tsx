import React from 'react';

import { useCalculator } from '@hooks';

import { type CaulculatorProviderProps } from './interfaces';

export const CalculatorProvider = ({ children }: CaulculatorProviderProps): JSX.Element => {
	useCalculator();

	return <>{children}</>;
};
