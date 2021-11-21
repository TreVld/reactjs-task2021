import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './ButtonGroup.scss'

interface IProps {
  children?: ReactNode
  title?: string
  className?: string
  [index: string]: any
}

function ButtonGroup ({
  children, title, className, ...attrs
}: IProps) {
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

ButtonGroup.defaultProps = {
  title: ''
}

export default ButtonGroup
