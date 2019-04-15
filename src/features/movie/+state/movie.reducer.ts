import * as movie from './movie.actions';
import { movieInitialState } from './movie.init';
import { MovieModel } from '../../../core/models/app.interface';

export function movieReducer(
  state: MovieModel = movieInitialState,
  action
) {
  switch (action.type) {

    case movie.ActionTypes.SELECT_MOVIE:
      return action.payload;

    default:
      return state;
  }
}
