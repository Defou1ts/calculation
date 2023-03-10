// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="cypress" />

import { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE } from '@constants';
import {
	checkCalculate,
	checkClearExpression,
	checkClearHistory,
	checkDivision,
	checkKeypadButtons,
	checkMultiply,
	checkNavigationLinks,
	checkRemoveLastCharacter,
	checkSubstract,
	checkSum,
	checkThemeSwitch,
} from '../support/calculator';

describe('Home Page Function Components', () => {
	beforeEach(() => {
		cy.visit(HOME_FC_ROUTE);
	});

	checkKeypadButtons();
	checkSum();
	checkSubstract();
	checkMultiply();
	checkDivision();
	checkCalculate();
	checkClearExpression();
	checkRemoveLastCharacter();
});

describe('Home Page Class Components', () => {
	beforeEach(() => {
		cy.visit(HOME_CC_ROUTE);
	});

	checkKeypadButtons();
	checkSum();
	checkSubstract();
	checkMultiply();
	checkDivision();
	checkCalculate();
	checkClearExpression();
	checkRemoveLastCharacter();
});

describe('Settings Page Function Components', () => {
	beforeEach(() => {
		cy.visit(SETTINGS_FC_ROUTE);
	});

	checkThemeSwitch();
});

describe('Settings Page Class Components', () => {
	beforeEach(() => {
		cy.visit(SETTINGS_CC_ROUTE);
	});

	checkThemeSwitch();
});

describe('Clear history function fomponent', () => {
	checkClearHistory(HOME_FC_ROUTE, SETTINGS_FC_ROUTE);
});

describe('Clear history class fomponent', () => {
	checkClearHistory(HOME_CC_ROUTE, SETTINGS_CC_ROUTE);
});

describe('Check navigation', () => {
	checkNavigationLinks();
});

export {};
