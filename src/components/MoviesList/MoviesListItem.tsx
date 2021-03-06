import React from 'react'
import { Link } from 'react-router-dom'

interface IProps {
  movie: any
}

function MoviesListItem ({ movie }: IProps) {
  const year = new Date(movie.release_date).getFullYear()
  const genresRow = (movie.genres || []).join(', ')

  return (
    <Link to={`/movies/${movie.id}`} className="movies-list-item">
      <img
        className="movies-list-item__poster"
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className="movies-list-item__info">
        <div className="movies-list-item__title">
          {movie.title}

          <time className="movies-list-item__date" dateTime={movie.release_date}>{year}</time>
        </div>

        {!!genresRow && <div className="movies-list-item__genres">{genresRow}</div>}
      </div>
    </Link>
  )
}

MoviesListItem.defaultProps = {
  movie: {
    title: 'Тест',
    poster_path: ''
  }
}

export default MoviesListItem
