import { useContext } from 'react';

import { CalculatorContext, type ICalculatorContext } from '@interfaces';

export const useCalculatorContext = (): ICalculatorContext => useContext(CalculatorContext);
