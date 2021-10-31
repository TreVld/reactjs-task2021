import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MovieInfoTime from '../MovieInfoTime/MovieInfoTime'
import './MovieInfo.scss'

function MovieInfo ({ movie, className, ...attrs }) {
  const classes = classNames(
    'movie-info',
    className
  )

  const year = new Date(movie.release_date).getFullYear()

  return (
    <div className={classes} {...attrs}>
      <img
        className="movie-info__poster"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div>
        <h1 className="movie-info__title">
          { movie.title }
          <div className="movie-info__rating">{ movie.vote_average }</div>
        </h1>
        <div className="movie-info__tagline">{ movie.tagline }</div>

        <div className="movie-info__time">
          <MovieInfoTime value={year} label="year"/>
          <MovieInfoTime value={movie.runtime} label="min"/>
        </div>

        <p className="movie-info__desc">{ movie.overview }</p>
      </div>
    </div>
  )
}

MovieInfo.propTypes = {
  className: PropTypes.string,
  movie: PropTypes.object.isRequired
}

export default MovieInfo
