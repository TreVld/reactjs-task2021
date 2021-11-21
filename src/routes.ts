import SearchPage from './containers/SearchPage'
import MoviePage from './containers/MoviePage/MoviePage'
import NotFound from './components/NotFound'
import { getMovie, getMovies } from './actions'
import { Store } from 'redux'
import { match } from 'react-router'

export const routes = [
  {
    path: '/movies/:id',
    component: MoviePage,
    loadData: async (store: Store, url: URL, route: any) => {
      await store.dispatch(getMovie(route.params.id) as any)
      const { movie } = store.getState().movieReducer
      const query = `&searchBy=genres&search=${movie.genres[0]}`
      await store.dispatch(getMovies(query) as any)
    }
  },
  {
    path: '/search',
    component: SearchPage,
    loadData: async (store: Store) => {
      await store.dispatch(getMovies() as any)
    }
  },
  {
    path: '*',
    component: NotFound,
    loadData: () => {}
  }
]
