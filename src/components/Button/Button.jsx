import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

function Button ({ children, lg, primary, ...attrs }) {
  const className = classNames('btn', {
    btn_lg: lg,
    btn_primary: primary
  })

  return <button className={className} {...attrs}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  lg: PropTypes.bool,
  primary: PropTypes.bool
}

Button.defaultProps = {
  lg: false
}

export default Button
