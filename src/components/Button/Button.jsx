import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss'

function Button (props) {
  return <button className="btn">{props.children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired
}

export default Button
