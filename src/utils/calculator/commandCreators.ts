import {
	AddPlus,
	AddMinus,
	AddMultiplier,
	AddDivision,
	AddOpenParent,
	AddCloseParent,
	AddDot,
	AddNumber,
} from '@utils';

export const addPlus = (): AddPlus => new AddPlus();
export const addMinus = (): AddMinus => new AddMinus();
export const addMultiplier = (): AddMultiplier => new AddMultiplier();
export const addDivision = (): AddDivision => new AddDivision();
export const addOpenParent = (): AddOpenParent => new AddOpenParent();
export const addCloseParent = (): AddCloseParent => new AddCloseParent();
export const addDot = (): AddDot => new AddDot();
export const addNumber = (number: number): AddNumber => new AddNumber(number);
