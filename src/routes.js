import MoviesPage from './containers/MoviesPage'
import MoviePage from './containers/MoviePage/MoviePage'
import NotFound from './components/NotFound'
import { getMovie, getMovies } from './actions'

export const routes = [
  {
    path: '/movies/:id',
    component: MoviePage,
    loadData: async (store, url, route) => {
      await store.dispatch(getMovie(route.params.id))
      const { movie } = store.getState().movieReducer
      const query = `&searchBy=genres&search=${movie.genres[0]}`
      await store.dispatch(getMovies(query))
    }
  },
  {
    path: '/movies',
    component: MoviesPage,
    loadData: async (store) => {
      await store.dispatch(getMovies())
    }
  },
  {
    path: '*',
    component: NotFound,
    loadData: () => {}
  }
]
