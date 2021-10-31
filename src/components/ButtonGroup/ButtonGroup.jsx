import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ButtonGroup.scss'

function ButtonGroup ({
  children, title, className, ...attrs
}) {
  const classes = classNames(
    'btn-group',
    className
  )

  return (
    <div className={classes} {...attrs}>
      { !!title && <div className="btn-group__title">{title}</div> }
      <div className="btn-group__inner">{ children }</div>
    </div>
  )
}

ButtonGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

ButtonGroup.defaultProps = {
  title: ''
}

export default ButtonGroup
