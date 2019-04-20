import { type } from '../../../type';

export const ActionTypes = {
  SET_QUERY: type('Search movie'),
};


export const searchMovieAction = (query) => {
  return {
    type: ActionTypes.SET_QUERY,
    payload: query,
  };
};
