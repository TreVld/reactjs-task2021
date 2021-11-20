import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import Button from '../components/Button/Button'
import ButtonGroup from '../components/ButtonGroup/ButtonGroup'
import SearchField from '../components/SearchField/SearchField'
import MoviesListContainer from './MoviesListContainer'
import Panel from '../components/Panel/Panel'
import Logotype from '../components/Logotype/Logotype'
import PropTypes from 'prop-types'
import { sortMovies } from '../actions'

const SEARCH_BY_LABELS = ['title', 'genres']
const SORT_BY_LABELS = ['release_date', 'vote_average']

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function SearchPage ({ movies, sortMovies }) {
  const query = useQuery()
  const history = useHistory()
  const initialSearchBy = SEARCH_BY_LABELS.find(label => label === query.get('searchBy')) || SEARCH_BY_LABELS[0]

  const [search, setSearch] = useState(query.get('search') || '')
  const [searchBy, setSearchBy] = useState(initialSearchBy)
  const [_searchBy, _setSearchBy] = useState(initialSearchBy)
  const [sortBy, setSortBy] = useState(SORT_BY_LABELS[0])

  useEffect(() => {
    sortMovies(sortBy)
  }, [sortBy, sortMovies])

  const submit = search => {
    setSearch(search)
    setSearchBy(_searchBy)

    history.push(`?searchBy=${_searchBy}&search=${search}`)
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header__content">
          <div className="app-header__toolbar">
            <Logotype/>
          </div>

          <div className="container container_sm">
            <SearchField id="search-movies" onSubmit={submit} />
            <div className="search-filter">
              <ButtonGroup title="Search by">
                <Button
                  primary={_searchBy === 'title'}
                  onClick={() => _setSearchBy('title')}
                >
                  title
                </Button>
                <Button
                  primary={_searchBy === 'genres'}
                  onClick={() => _setSearchBy('genres')}
                >
                  genres
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <Panel>
            { !!search.length && !!movies.length && <strong>{movies.length} movie found</strong>}
            <ButtonGroup className="ml-auto" title="Sort by">
              <Button
                primary={sortBy === SORT_BY_LABELS[0]}
                onClick={() => setSortBy(SORT_BY_LABELS[0])}
              >
                Release date
              </Button>
              <Button
                primary={sortBy === SORT_BY_LABELS[1]}
                onClick={() => setSortBy(SORT_BY_LABELS[1])}
              >
                Rating
              </Button>
            </ButtonGroup>
          </Panel>
        </div>
      </header>

      <div className="app-body">
        <div className="container">
          <MoviesListContainer search={search} searchBy={searchBy} />
        </div>
      </div>
    </>
  )
}

SearchPage.propTypes = {
  movies: PropTypes.array,
  sortMovies: PropTypes.func
}

SearchPage.defaultProps = {
  movies: [],
  sortMovies: () => {}
}

export default connect(
  (state) => ({
    movies: state.moviesReducer.movies
  }),
  { sortMovies }
)(SearchPage)
