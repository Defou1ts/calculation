import { useContext } from 'react';

import { CalculatorContext } from '@interfaces';
import type { ICalculatorContext } from '@interfaces';

export const useCalculatorContext = (): ICalculatorContext => useContext(CalculatorContext);
