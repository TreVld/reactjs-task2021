import React from 'react'
import { Link } from 'react-router-dom'
import './Logotype.scss'

export default function Logotype () {
  return (
    <Link to="/" className="logotype">
      <span>netflix</span>
      <span>roulette</span>
    </Link>
  )
}
