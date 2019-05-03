import * as React from 'react';
import { connect } from 'react-redux';

import { Movie } from '../../features/movie/movie.component';
import { store } from '../../core/store/rootReducer';

function MoviePageComponent(props) {
  return (
    props.movie
      ? <Movie
    {...props.movie}
      />
      : <div>Please select movie</div>
  )
}

  const mapStateToProps = state => {
    return {
      movie: state.movie,
    };
  };

  export default connect(
    mapStateToProps,
  )(MoviePageComponent);
