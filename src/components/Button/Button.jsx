import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './Button.scss'

function Button ({
  children, lg, primary, icon, ...attrs
}) {
  const classes = classNames('btn', {
    btn_lg: lg,
    btn_primary: primary,
    btn_icon: icon
  })

  const Tag = attrs.to ? Link : 'button'

  return <Tag className={classes} {...attrs}>{children}</Tag>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  lg: PropTypes.bool,
  primary: PropTypes.bool,
  icon: PropTypes.bool
}

Button.defaultProps = {
  lg: false,
  primary: false,
  icon: false
}

export default Button
