import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Panel.scss'

function Panel ({ children, className, ...attrs }) {
  const classes = classNames(
    'panel',
    className
  )

  return (
    <div className={classes} {...attrs}>
      <div className="container container_sm panel__content">
        {children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Panel
