import { ROUTES } from '@constants';

const { SETTINGS_CC_ROUTE, HOME_FC_ROUTE, HOME_CC_ROUTE, SETTINGS_FC_ROUTE } = ROUTES;

export function checkKeypadButtons(): void {
	it('Check keypad buttons', () => {
		cy.get('[data-test-id=key]')
			.contains('1')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('3')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=key]')
			.contains('4')
			.click()
			.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains('6')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('7')
			.click()
			.get('[data-test-id=key]')
			.contains('8')
			.click()
			.get('[data-test-id=key]')
			.contains('9')
			.click()
			.get('[data-test-id=key]')
			.contains('+')
			.click()
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('0')
			.click()
			.get('[data-test-id=key]')
			.contains('3')
			.click()
			.get('[data-test-id=key]')
			.contains('.')
			.click()
			.get('[data-test-id=key]')
			.contains('-')
			.click()
			.get('[data-test-id=key]')
			.contains('CE')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains(')')
			.click()
			.get('[data-test-id=key]')
			.contains('=');
	});
}

export function checkSum(): void {
	it('Check sum', () => {
		cy.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('+')
			.click()
			.get('[data-test-id=key]')
			.contains('6')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-value]')
			.contains('2+6')
			.get('[data-test-id=display-result-value]')
			.contains('8');
	});
}

export function checkSubstract(): void {
	it('Check substract', () => {
		cy.get('[data-test-id=key]')
			.contains('8')
			.click()
			.get('[data-test-id=key]')
			.contains('-')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-value]')
			.contains('8-2')
			.get('[data-test-id=display-result-value]')
			.contains('6');
	});
}

export function checkMultiply(): void {
	it('Check multiply', () => {
		cy.get('[data-test-id=key]')
			.contains('9')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=key]')
			.contains('4')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-value]')
			.contains('9*4')
			.get('[data-test-id=display-result-value]')
			.contains('36');
	});
}

export function checkDivision(): void {
	it('Check division', () => {
		cy.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-value]')
			.contains('5/2')
			.get('[data-test-id=display-result-value]')
			.contains('2.5');
	});
}

export function checkCalculate(): void {
	it('Check calculate', () => {
		cy.get('[data-test-id=key]')
			.get('[data-test-id=key]')
			.contains('-')
			.click()
			.get('[data-test-id=key]')
			.contains('.')
			.click()
			.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains('-')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('+')
			.click()
			.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains(')')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-value]')
			.contains('-.5*(-2+5)')
			.get('[data-test-id=display-result-value]')
			.contains('-1.5');
	});
}

export function checkIncorrectNullsError(): void {
	it('Check incorrect nulls', () => {
		cy.get('[data-test-id=key]')
			.contains('0')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('0')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression')
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('1')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('0')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression')
			.get('[data-test-id=key]')
			.contains('C');
	});
}

export function checkDoubleBracketsError(): void {
	it('Check double brackets error', () => {
		cy.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains(')')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression')
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression')
			.get('[data-test-id=key]')
			.contains('C');
	});
}

export function checkOperatorAfterResult(): void {
	it('Check operator after result', () => {
		cy.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=display-value]')
			.contains('1*')
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('1')
			.click()
			.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('3')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=display-value]')
			.contains('5*')
			.get('[data-test-id=key]')
			.contains('C')
			.click();
	});
}

export function checkAddNumberAfterResult(): void {
	it('Check add number after result', () => {
		cy.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('8')
			.click()
			.get('[data-test-id=display-value]')
			.contains('8')
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('4')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=display-value]')
			.contains('2')
			.get('[data-test-id=key]')
			.contains('C')
			.click();
	});
}

export function checkRandomValuesInvalidExpression(): void {
	it('Check random values invalid expressions', () => {
		cy.get('[data-test-id=key]')
			.contains('.')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('9')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression')
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('(')
			.click()
			.get('[data-test-id=key]')
			.contains('.')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression')
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=key]')
			.contains('+')
			.click()
			.get('[data-test-id=key]')
			.contains('*')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=display-result-value]')
			.contains('Invalid expression');
	});
}

export function checkManySameHistoryItems(): void {
	it('Check many same history items', () => {
		cy.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('+')
			.click()
			.get('[data-test-id=key]')
			.contains('6')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=history-monitor]')
			.contains('2+6=8')
			.should('have.length', 1);
	});
}

export function checkClearExpression(): void {
	it('Check clear expression', () => {
		cy.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=key]')
			.contains('C')
			.click()
			.get('[data-test-id=display-value]')
			.should('have.text', '')
			.get('[data-test-id=display-result-value]')
			.should('have.text', '');
	});
}

export function checkRemoveLastCharacter(): void {
	it('Check remove last character', () => {
		cy.get('[data-test-id=key]')
			.contains('5')
			.click()
			.get('[data-test-id=key]')
			.contains('/')
			.click()
			.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('CE')
			.click()
			.get('[data-test-id=display-value]')
			.should('have.text', '5/');
	});
}

export function checkThemeSwitch(): void {
	it('Check theme switch', () => {
		cy.get('[data-test-id=theme-switch]')
			.click()
			.get('[data-test-id=layout-wrapper]')
			.should('have.css', 'background-color', 'rgb(249, 249, 249)')
			.get('[data-test-id=theme-switch]')
			.click()
			.get('[data-test-id=layout-wrapper]')
			.should('have.css', 'background-color', 'rgb(46, 45, 45)');
	});
}

export function checkClearHistory(homeRoute: string, settingsRoute: string): void {
	it('Check Clear History', () => {
		cy.visit(homeRoute);
		cy.get('[data-test-id=key]')
			.contains('2')
			.click()
			.get('[data-test-id=key]')
			.contains('+')
			.click()
			.get('[data-test-id=key]')
			.contains('6')
			.click()
			.get('[data-test-id=key]')
			.contains('=')
			.click()
			.get('[data-test-id=history-monitor]')
			.contains('2+6=8')
			.visit(settingsRoute)
			.get('[data-test-id=clear-history')
			.click()
			.visit(homeRoute)
			.get('[data-test-id=history-monitor]')
			.should('not.exist');
	});
}

export function checkOpenAndCloseHistory(homeRoute: string, settingsRoute: string): void {
	it('Check open and close history', () => {
		cy.visit(homeRoute)
			.get('[data-test-id=history-wrapper]')
			.visit(settingsRoute)
			.get('[data-test-id=close-history]')
			.click()
			.visit(homeRoute)
			.get('[data-test-id=history-wrapper]')
			.should('not.exist')
			.visit(settingsRoute)
			.get('[data-test-id=open-history]')
			.click()
			.visit(homeRoute)
			.get('[data-test-id=history-wrapper]');
	});
}

export function checkNavigationLinks(): void {
	it('check navigation links', () => {
		cy.visit(SETTINGS_CC_ROUTE);
		cy.get('[data-test-id=nav-link]')
			.contains('Home FC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(HOME_FC_ROUTE);
			})
			.get('[data-test-id=nav-link]')
			.contains('Home CC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(HOME_CC_ROUTE);
			})
			.get('[data-test-id=nav-link]')
			.contains('Settings FC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(SETTINGS_FC_ROUTE);
			})
			.get('[data-test-id=nav-link]')
			.contains('Settings CC')
			.click()
			.location()
			.should((location) => {
				expect(location.pathname).to.equal(SETTINGS_CC_ROUTE);
			});
	});
}

export {};
