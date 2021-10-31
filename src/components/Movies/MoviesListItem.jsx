import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MoviesListItem ({ movie }) {
  const year = new Date(movie.release_date).getFullYear()
  const genresRow = (movie.genres || []).join(', ')

  return (
    <Link to={`/movies/${movie.id}`} className="movies-list-item movie-card">
      <img
        className="movie-card__poster"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className="movie-card__info">
        <div className="movie-card__title">
          {movie.title}

          <time className="movie-card__date" dateTime={movie.release_date}>{year}</time>
        </div>

        {!!genresRow && <div className="movie-card__genres">{genresRow}</div>}
      </div>
    </Link>
  )
}

MoviesListItem.propTypes = {
  movie: PropTypes.object
}

MoviesListItem.defaultProps = {
  movie: {
    title: 'Тест',
    poster_path: ''
  }
}

export default MoviesListItem
