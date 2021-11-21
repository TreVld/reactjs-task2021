import React, { SyntheticEvent, useRef } from 'react'
import classNames from 'classnames'
import Button from '../Button/Button'
import './SearchField.scss'

interface IProps {
  id: string
  className?: string
  label?: string
  value?: string
  onSubmit?: Function
  [index: string]: any
}

function SearchField ({ 
  id, className, label, onSubmit, value, ...attrs 
}: IProps) {
  const searchInputEl = useRef(null)
  const classes = classNames(
    'search-field',
    className
  )

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    return onSubmit(searchInputEl.current.value)
  }

  return (
    <form className={classes} onSubmit={handleSubmit} {...attrs}>
      <label className="search-field__label" htmlFor={id}>{label}</label>
      <div className="search-field__body">
        <input
          id={id}
          className="search-field__input"
          placeholder="Search"
          type="search"
          autoFocus
          defaultValue={value}
          ref={searchInputEl}
        />
        <Button
          lg
          primary
          type="submit"
        >
          Search
        </Button>
      </div>
    </form>
  )
}

SearchField.defaultProps = {
  className: '',
  label: 'Find your movie',
  value: '',
  onSubmit: () => {}
}

export default SearchField
