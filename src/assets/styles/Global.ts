import { createGlobalStyle } from 'styled-components';

import { type ThemeState } from '@store';

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
		background: ${({ theme }) => theme.backgroundColor};
		color: ${({ theme }) => theme.textColor};
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	button {
		border: none;
	}

	li {
		list-style-type: none; 
	}
	
	ul {
		margin-left: 0;
		padding-left: 0; 
	}

	:root {
		--font-family: "Nunito", sans-serif;

		--red: #FF6060;
		--light-red: #FF7070;
	}
`;
