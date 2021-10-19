import React from 'react'
import PropTypes from 'prop-types'

import './Footer.scss'

function Footer ({ name }) {
  return (
    <footer className="app-footer">
      <div className="container">{ name }</div>
    </footer>
  )
}

Footer.propTypes = {
  name: PropTypes.string
}

export default Footer
