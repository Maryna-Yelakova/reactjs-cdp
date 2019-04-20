import * as search from './search.actions';

export function searchReducer(
  state = '',
  action
) {
  switch (action.type) {

    case search.ActionTypes.SET_QUERY:
      return action.payload;

    default:
      return state;
  }
}
