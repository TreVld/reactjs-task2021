import React from 'react'
import PropTypes from 'prop-types'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  render () {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так.</h1>
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
}

export default ErrorBoundary
