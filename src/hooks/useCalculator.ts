import { useContext } from 'react';

import { CalculatorContext } from '@components';
import { type ICalculatorContext } from '@interfaces';

export const useCalculator = (): ICalculatorContext => useContext(CalculatorContext);
