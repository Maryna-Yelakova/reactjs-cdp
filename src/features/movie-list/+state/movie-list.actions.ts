import { type } from '../../../type';

export const ActionTypes = {
  GET_MOVIES: type(
    'Get movie'
  )
}

export function getMoviesAction (){
  return dispatch => fetch( 'https://reactjs-cdp.herokuapp.com/movies') // Redux Thunk handles these
     .then(res => {
       console.log(res, 'RES')
       return res.json()
     })
     .then(
       data => dispatch({ type: ActionTypes.GET_MOVIES, data }),
       err => dispatch({ type: ActionTypes.GET_MOVIES, err })
     );


  // return {
  //   type = ActionTypes.GET_MOVIES,
  //   payload:payload
  // }
}
