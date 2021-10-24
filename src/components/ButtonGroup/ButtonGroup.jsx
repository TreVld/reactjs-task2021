import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './ButtonGroup.scss'

function ButtonGroup (props) {
  const className = classNames('btn-group', {
    'btn-group__right': props.right
  })

  return (
    <div className={className}>
      { !!props.title && <div className="btn-group__title">{props.title}</div> }
      <div className="btn-group__inner">
        { props.children }
      </div>
    </div>
  )
}

ButtonGroup.propTypes = {
  title: PropTypes.string,
  right: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element)
}

ButtonGroup.defaultProps = {
  right: false
}

export default ButtonGroup
