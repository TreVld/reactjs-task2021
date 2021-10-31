import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Button from '../Button/Button'
import ButtonGroup from '../ButtonGroup/ButtonGroup'
import SearchField from '../SearchField/SearchField'
import MoviesList from './MoviesList'
import Logotype from '../Logotype/Logotype'
import './Movies.scss'

const SEARCH_BY_LABELS = ['title', 'genre']
const SORT_BY_LABELS = ['release_date', 'vote_average']

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

export default function Movies () {
  const query = useQuery()
  const history = useHistory()

  const initialSortBy = SORT_BY_LABELS.find(value => value === query.get('sortBy')) || SORT_BY_LABELS[0]
  const initialSearchBy = SEARCH_BY_LABELS.find(value => value === query.get('searchBy')) || SEARCH_BY_LABELS[0]

  const [search, setSearch] = useState(query.get('search') || '')
  const [searchBy, setSearchBy] = useState(initialSearchBy)
  const [sortBy, setSortBy] = useState(initialSortBy)

  useEffect(() => {
    let _query = `?sortBy=${sortBy}&searchBy=${searchBy}`

    if (search) {
      _query += `&search=${search}`
    }

    history.push(_query)
  }, [history, search, searchBy, sortBy])

  return (
    <>
      <header className="app-header">
        <div className="app-header__content">
          <div className="app-header__toolbar">
            <Logotype/>
          </div>

          <div className="container container_sm">
            <SearchField id="search-movies" onSubmit={setSearch} />
            <div className="search-filter">
              <ButtonGroup title="Search by">
                <Button
                  primary={searchBy === 'title'}
                  onClick={() => setSearchBy('title')}
                >
                  title
                </Button>
                <Button
                  primary={searchBy === 'genre'}
                  onClick={() => setSearchBy('genre')}
                >
                  genre
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="sort-wrapper">
            <div className="container container_sm">
              <ButtonGroup title="Sort by">
                <Button
                  primary={sortBy === 'release_date'}
                  onClick={() => setSortBy('release_date')}
                >
                  Release date
                </Button>
                <Button
                  primary={sortBy === 'vote_average'}
                  onClick={() => setSortBy('vote_average')}
                >
                  Rating
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </header>

      <div className="app-body">
        <div className="container">
          <MoviesList search={search} searchBy={searchBy} sortBy={sortBy} />
        </div>
      </div>
    </>
  )
}
