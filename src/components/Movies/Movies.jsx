import React, { useState, useEffect, useMemo } from "react";
import MovieCard from "../MovieCard/MovieCard";
import Header from "../Header/Header";

import './Movies.scss'

function filterByTitle(search='', movies=[]) {
	return movies.filter(movie => (
		(movie.title || '')
			.toUpperCase()
			.includes(search.toUpperCase())
		)
	)
}

function filteredByGenres(search='', movies=[]) {
	return movies.filter(movie => (
		(movie.genres || [])
			.some(genre => genre.toUpperCase().includes(search.toUpperCase()))
		)
	)
}

function computeMovies (search='', searchBy='title', movies=[]) {
	if(searchBy === 'genre') {
		return filteredByGenres(search, movies)
	}

	return filterByTitle(search, movies)
}

export default function Movies () {
	const [ error, setError ] = useState(null)
	const [ initialMovies, setInitialMovies ] = useState([])
	const [ isLoaded, setLoaded ] = useState(false)
	const [ search, setSearch ] = useState('')
	const [ searchBy, setSearchBy ] = useState('title')

	const URL = 'https://reactjs-cdp.herokuapp.com/movies'
		
	useEffect(() => {
		fetch(URL)
			.then(response => response.json())
			.then((response) => {
				setInitialMovies(response.data || [])
				setLoaded(true)				
			}, (error) => {
				setError(error)
				setLoaded(true)
			})
	}, [])

	const movies = useMemo(() => computeMovies(search, searchBy, initialMovies), [search, searchBy, initialMovies]);

	if (error) {
		return <div>Ошибка: {error.message}</div>;
	}

	if (!isLoaded) {
		return <div>Загрузка...</div>
	}

	return (
		<>	
			<Header search={search} setSearch={setSearch} setSearchBy={setSearchBy} />		
			<h1>Movies</h1>
			{
				movies?.length 
				? <div className="movies">
						{ movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
					</div>
				: <div>No films found</div>
			}
		</>
	)
}
