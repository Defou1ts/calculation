import { createGlobalStyle } from 'styled-components';
import type { GlobalProps } from './Global.props';

export const Global = createGlobalStyle<GlobalProps>`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		margin: 0;
		padding: 0;
		font-family: var(--font-family);
		background: var(--white);
		color: var(--black);
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	:root {
		--font-family: "Nunito", sans-serif;

		--green: #6bc2bb;
		--white: #ffffff;
		--black: #000000;
	}
`;
