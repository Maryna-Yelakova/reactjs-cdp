import { type } from '../../../type';

export const ActionTypes = {
  SELECT_MOVIE: type('Select movie'),
};

export function selectMovieAction(payload) {
  return {
    type: ActionTypes.SELECT_MOVIE,
    payload: payload,
  }
};
