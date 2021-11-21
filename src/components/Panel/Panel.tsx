import React, { ReactNode } from 'react'
import classNames from 'classnames'
import './Panel.scss'

interface IProps {
  children: ReactNode
  className?: string
  [index: string]: any
}

function Panel ({ children, className, ...attrs }: IProps) {
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

export default Panel
