import React, { JSXElementConstructor, ReactComponentElement, ReactElement, ReactNode } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import './Button.scss'

interface IProps {
  children: ReactNode
  lg?: boolean
  primary?: boolean
  icon?: boolean
  [index: string]: any
}

function Button ({
  children, lg, primary, icon, ...attrs
}: IProps) {
  const classes = classNames('btn', {
    btn_lg: lg,
    btn_primary: primary,
    btn_icon: icon
  })

  const Tag: any = attrs.to ? Link : 'button'

  return <Tag className={classes} {...attrs}>{children}</Tag>
}

Button.defaultProps = {
  lg: false,
  primary: false,
  icon: false
}

export default Button
