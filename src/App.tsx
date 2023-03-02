import React from 'react';
import { Global } from '@styles';
import { useAppSelector } from '@store';
import { useTheme } from '@utils';

function App(): JSX.Element {
	const theme = useAppSelector((state) => state.theme);

	const { toggleTheme } = useTheme();

	return (
		<div>
			<Global {...theme} />
			<button onClick={toggleTheme}>Switch Theme</button>
		</div>
	);
}

export default App;
