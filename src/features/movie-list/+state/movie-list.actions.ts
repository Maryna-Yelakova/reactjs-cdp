import { type } from '../../../type';

export const ActionTypes = {
  GET_MOVIES: type('Get movie'),
};

export const fetchedMoviesAction = (movies) => {
  return {
    type: ActionTypes.GET_MOVIES,
    payload: movies,
  };
};

export const getMoviesAction = () => dispatch => (
  fetch('https://reactjs-cdp.herokuapp.com/movies')
    .then(res => {
      return res.json();
    }).then(
      data => dispatch(fetchedMoviesAction(data.data)),
      err => dispatch({ type: ActionTypes.GET_MOVIES, err })
    )
);
