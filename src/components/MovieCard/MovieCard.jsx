import React from 'react'
import PropTypes from 'prop-types'

import './MovieCard.scss'

function MovieCard ({ movie }) {
  return (
    <div className="movie-card">
      <img
        className="movie-card__poster"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>{movie.title}</div>
    </div>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.object
}

MovieCard.defaultProps = {
  movie: {
    title: 'Тест',
    poster_path: ''
  }
}

export default MovieCard
