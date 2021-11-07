import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Button from '../components/Button/Button'
import ButtonGroup from '../components/ButtonGroup/ButtonGroup'
import SearchField from '../components/SearchField/SearchField'
import MoviesListContainer from './MoviesListContainer'
import Panel from '../components/Panel/Panel'
import Logotype from '../components/Logotype/Logotype'
import PropTypes from 'prop-types'

const SEARCH_BY_LABELS = ['title', 'genres']
const SORT_BY_LABELS = ['release_date', 'vote_average']

function useQuery () {
  return new URLSearchParams(useLocation().search)
}

function MoviesPage ({ movies }) {
  const query = useQuery()

  const [search, setSearch] = useState(query.get('search') || '')
  const [searchBy, setSearchBy] = useState(SEARCH_BY_LABELS[0])
  const [sortBy, setSortBy] = useState(SORT_BY_LABELS[0])

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
                  primary={searchBy === 'genres'}
                  onClick={() => setSearchBy('genres')}
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
          </Panel>
        </div>
      </header>

      <div className="app-body">
        <div className="container">
          <MoviesListContainer search={search} searchBy={searchBy} sortBy={sortBy} />
        </div>
      </div>
    </>
  )
}

MoviesPage.propTypes = {
  movies: PropTypes.array
}

MoviesPage.defaultProps = {
  movies: []
}

export default connect(
  (state) => ({
    movies: state.moviesReducer.movies
  })
)(MoviesPage)
