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

	button {
		border: none;
	}

	:root {
		--font-family: "Nunito", sans-serif;

		--background: ${(props) => props.backgroundColor};
		--content: ${(props) => props.contentColor};
		--text: ${(props) => props.textColor};
		--monitor: ${(props) => props.monitorColor};
		--button: ${(props) => props.buttonColor};
	}
`;
