import { type ThemeState } from '@store';
import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle<ThemeState>`
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
		background: ${(props) => props.backgroundColor};
		color: ${(props) => props.textColor};
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
