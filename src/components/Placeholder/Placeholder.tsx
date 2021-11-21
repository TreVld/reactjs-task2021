import React from 'react'
import classNames from 'classnames'
import './Placeholder.scss'

interface IProps {
  title: string
  className?: string
  [index: string]: any
}

function Placeholder ({ title, className, ...attrs }: IProps) {
  const classes = classNames(
    'placeholder',
    className
  )

  return <div className={classes} {...attrs}>{ title }</div>
}

export default Placeholder
