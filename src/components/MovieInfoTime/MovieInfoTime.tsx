import React from 'react'
import classNames from 'classnames'
import './MovieInfoTime.scss'

interface IProps {
  value: string | number
  label?: string
  className?: string
  [index: string]: any
}

function MovieInfoTime ({ value, label, className, ...attrs }: IProps) {
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

MovieInfoTime.defaultProps = {
  label: ''
}

export default MovieInfoTime
