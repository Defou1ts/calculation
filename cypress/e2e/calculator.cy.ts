/// <reference types="cypress" />

import { ROUTES } from '@constants';

import {
	checkAddNumberAfterResult,
	checkCalculate,
	checkClearExpression,
	checkClearHistory,
	checkDivision,
	checkDoubleBracketsError,
	checkIncorrectNullsError,
	checkKeypadButtons,
	checkManySameHistoryItems,
	checkMultiply,
	checkNavigationLinks,
	checkOpenAndCloseHistory,
	checkOperatorAfterResult,
	checkRandomValuesInvalidExpression,
	checkRemoveLastCharacter,
	checkSubstract,
	checkSum,
	checkThemeSwitch,
} from '../support/calculator';

const { HOME_CC_ROUTE, HOME_FC_ROUTE, SETTINGS_CC_ROUTE, SETTINGS_FC_ROUTE, HOME_ROUTE } = ROUTES;

describe('Home Page Function Components', () => {
	beforeEach(() => {
		cy.visit(HOME_ROUTE)
			.get('[data-test-id=nav-link]')
			.contains('Home FC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(HOME_FC_ROUTE);
			});
	});

	checkKeypadButtons();
	checkSum();
	checkSubstract();
	checkMultiply();
	checkDivision();
	checkCalculate();
	checkClearExpression();
	checkRemoveLastCharacter();
	checkIncorrectNullsError();
	checkDoubleBracketsError();
	checkOperatorAfterResult();
	checkAddNumberAfterResult();
	checkRandomValuesInvalidExpression();
	checkManySameHistoryItems();
});

describe('Home Page Class Components', () => {
	beforeEach(() => {
		cy.visit(HOME_ROUTE)
			.get('[data-test-id=nav-link]')
			.contains('Home CC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(HOME_CC_ROUTE);
			});
	});

	checkKeypadButtons();
	checkSum();
	checkSubstract();
	checkMultiply();
	checkDivision();
	checkCalculate();
	checkClearExpression();
	checkRemoveLastCharacter();
	checkIncorrectNullsError();
	checkDoubleBracketsError();
	checkOperatorAfterResult();
	checkAddNumberAfterResult();
	checkRandomValuesInvalidExpression();
	checkManySameHistoryItems();
});

describe('Settings Page Function Components', () => {
	beforeEach(() => {
		cy.visit(HOME_ROUTE)
			.get('[data-test-id=nav-link]')
			.contains('Settings FC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(SETTINGS_FC_ROUTE);
			});
	});

	checkThemeSwitch();
});

describe('Settings Page Class Components', () => {
	beforeEach(() => {
		cy.visit(HOME_ROUTE)
			.get('[data-test-id=nav-link]')
			.contains('Settings CC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(SETTINGS_CC_ROUTE);
			});
	});

	checkThemeSwitch();
});

describe('Clear history function fomponent', () => {
	checkClearHistory(HOME_FC_ROUTE, SETTINGS_FC_ROUTE);
	checkOpenAndCloseHistory(HOME_FC_ROUTE, SETTINGS_FC_ROUTE);
});

describe('Clear history class fomponent', () => {
	checkClearHistory(HOME_CC_ROUTE, SETTINGS_CC_ROUTE);
	checkOpenAndCloseHistory(HOME_CC_ROUTE, SETTINGS_CC_ROUTE);
});

describe('Check navigation', () => {
	checkNavigationLinks();
});

export {};
