import { combineReducers } from 'redux';

import { movieReducer } from '../movie/+state/movie.reducer';
import { movieListReducer } from '../movie-list/+state/movie-list.reducer';

export const RootReducer =  combineReducers({
  movieReducer,
  movieListReducer
})
