import { type } from '../../../type';

export const ActionTypes = {
  SET_QUERY: type('Search movie'),
  SET_FIELD: type('Set field name for searching')
};


export const searchMovieAction = (query) => {
  return {
    type: ActionTypes.SET_QUERY,
    payload: query,
  };
};

export const setFieldNameAction = (field) => {
  return {
    type: ActionTypes.SET_FIELD,
    payload: field
  }
}
