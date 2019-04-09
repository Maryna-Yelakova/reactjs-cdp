import * as movieList from './movie-list.actions';
import { movieListInitialState } from './movie-list.init';
import { MovieModel } from '../../../core/models/app.interface';

export function movieListReducer(
  state: Array<MovieModel> = movieListInitialState,
  action
){
  switch (action.type) {

  case movieList.ActionTypes.GET_MOVIES: {
    return [...state, action.payload];
  }
  default: {
    return state;
  }
 }
}
