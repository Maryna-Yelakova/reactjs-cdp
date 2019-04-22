import * as search from './search.actions';
import { searchParamsInitialState } from './search.init';


export function searchReducer(
  state = searchParamsInitialState,
  action
) {
  switch (action.type) {

    case search.ActionTypes.SET_QUERY:
      return {
        ...state,
        query: {
          query: action.payload
        }
      };

    case search.ActionTypes.SET_FIELD:
      return  {
          ...state,
          field: {
            field: action.payload
          }
        };


    default:
      return state;
  }
}
