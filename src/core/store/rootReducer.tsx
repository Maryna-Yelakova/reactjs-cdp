import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// reducers
import { movieReducer } from '../../features/movie/+state/movie.reducer';
import { movieListReducer } from '../../features/movie-list/+state/movie-list.reducer';
import { searchReducer } from '../../features/search/+state/search.reducer';

// middleware
const middleware = [
  thunk,
];

// const initialState = window.__REDUX_STATE__;
const initialState = {};

export const rootReducer = combineReducers({
  movie: movieReducer,
  movieList: movieListReducer,
  search: searchReducer
});

export const store = createStore(rootReducer,initialState, applyMiddleware(...middleware));
