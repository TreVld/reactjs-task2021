import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './MovieInfoTime.scss'

function MovieInfoTime ({ value, label, className, ...attrs }) {
  const classes = classNames(
    'movie-info-time',
    className
  )

  return (
    <div className={classes} {...attrs}>
      <time className="movie-info-time__value">{value}</time>
      {!!label && <label className="movie-info-time__label">{label}</label> }
    </div>
  )
}

MovieInfoTime.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}

MovieInfoTime.defaultProps = {
  label: ''
}

export default MovieInfoTime
