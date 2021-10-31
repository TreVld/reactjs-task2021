import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Placeholder.scss'

function Placeholder ({ title, className, ...attrs }) {
  const classes = classNames(
    'placeholder',
    className
  )

  return <div className={classes} {...attrs}>{ title }</div>
}

Placeholder.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
}

export default Placeholder
