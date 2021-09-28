import React from 'react';
import Movies from './components/Movies/Movies';
import ErrorBoundary from './components/ErrorBoundary';

function App ({name}) {
	return (
		<React.StrictMode>
			<ErrorBoundary>
				<header>Mini netflix</header>
				<main>
					<Movies />
				</main>
				<footer></footer>
			</ErrorBoundary>
		</React.StrictMode>
	)
}

export default App
