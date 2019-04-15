import { type } from '../../../type';

export const ActionTypes = {
  SELECT_MOVIE: type('Select movie'),
};


export const selectedMovieAction = (movie) => {
  return {
    type: ActionTypes.SELECT_MOVIE,
    payload: movie,
  };
};

export const selectMovieAction = (id) => dispatch => (
  fetch('https://reactjs-cdp.herokuapp.com/movies/' + id + '/')
    .then(res => {
      return res.json();
    }).then(
      data => {
      return  dispatch(selectedMovieAction(data))
      },
      err => dispatch({ type: ActionTypes.SELECT_MOVIE, err })
    )
);
