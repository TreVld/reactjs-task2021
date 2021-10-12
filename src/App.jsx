import React from 'react';
import Movies from './components/Movies/Movies';
import ErrorBoundary from './components/ErrorBoundary';

function App ({name}) {
	return (
		<React.StrictMode>
			<ErrorBoundary>
				<main className="container">
					<Movies />
				</main>
				<footer className="footer">
					<div className="container">
						Mini netflix
					</div>
				</footer>
			</ErrorBoundary>
		</React.StrictMode>
	)
}

export default App
