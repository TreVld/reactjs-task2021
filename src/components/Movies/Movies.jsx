import React from "react";
import MovieCard from "../MovieCard/MovieCard";

import './Movies.scss'

class Movies extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			movies: [],
			isLoaded: false
		}
	}

	componentDidMount() {
		const URL = 'https://reactjs-cdp.herokuapp.com/movies'
		
		fetch(URL)
			.then(response => response.json())
			.then((response) => {
				this.setState({
					isLoaded: true,
					movies: response.data || []
				})				
			}, (error) => {
				this.setState({
					isLoaded: true,
					error
				})
			})
	}

	render () {
		const { error, isLoaded, movies } = this.state;

		if (error) {
			return <div>Ошибка: {error.message}</div>;
		}

		if (!isLoaded) {
			return <div>Загрузка...</div>
		}

		return (
			<>			
				<h1>Movies</h1>
				<div className="movies">
					{ movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
				</div>
			</>
		)
	}
}

export default Movies 
