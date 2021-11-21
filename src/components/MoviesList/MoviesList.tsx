import React from 'react'
import MoviesListItem from './MoviesListItem'
import Placeholder from '../Placeholder/Placeholder'
import './MoviesList.scss'

interface IProps {
  movies: Array<any>
}

function MoviesList ({ movies }: IProps) {
  if (!movies?.length) {
    return <Placeholder title="No films found" />
  }

  return (
    <div className="movies-list">
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

MoviesList.defaultProps = {
  movies: []
}

export default MoviesList
