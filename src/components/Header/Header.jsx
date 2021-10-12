import React from "react"
import PropTypes from 'prop-types';
import Button from "../Button/Button"
function Header ({ search, setSearch }) {
	const handleInput = e => setSearch(e.target.value)

	return (
		<header className="header">
			<div className="container">
				<h1>Mini netflix</h1>
				<div>
					<label htmlFor="movie-search">Find your movie</label>
					<input id="movie-search" type="search" value={search} onInput={handleInput} />
				</div>
				<div>
					<div>
						Search by 
						<span>title</span>
						<span>genre</span>
					</div>
					<Button>Search</Button>
				</div>
			</div>
		</header>
	)
}

Header.propTypes = {
	search: PropTypes.string.isRequired,
	setSearch: PropTypes.func.isRequired
}

export default Header
