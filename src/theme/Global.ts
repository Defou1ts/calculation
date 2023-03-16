import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
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
		background: ${({ theme }) => theme.themeType.backgroundColor};
		color: ${({ theme }) => theme.themeType.textColor};
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
	}
`;
