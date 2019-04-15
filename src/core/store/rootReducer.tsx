import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// reducers
import { movieReducer } from '../../features/movie/+state/movie.reducer';
import { movieListReducer } from '../../features/movie-list/+state/movie-list.reducer';

// middleware
const middleware = [
  thunk,
];

export const rootReducer = combineReducers({
  movie: movieReducer,
  movieList: movieListReducer,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
