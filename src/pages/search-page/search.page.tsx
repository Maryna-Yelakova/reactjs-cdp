import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../core/models/app.interface';
import { MovieList } from '../../features/movie-list/movie-list.component';
import { MockMovieList, MockMovie} from '../../core/models/mockdata';
import { selectMovieAction } from '../../features/movie/+state/movie.actions';
import { store } from '../../core/store/rootReducer';


export interface SearchPropsModel {
  listing: any[],
  selectMovieAction: (arg) => {},
}


export class SearchPageComponent extends React.Component<SearchPropsModel, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      field:'',
      list: [],
      movie: MockMovie
    };

    this.selectMovie = this.selectMovie.bind(this);
  }

  selectMovie(movieId) {
    this.props.selectMovieAction(movieId);
  }

  render() {
    const { listing } = this.props;

    return (
      <div>
        {
          listing &&
          listing.length &&
          <MovieList
            selectMovie={this.selectMovie}
            list={listing}
          />
        }
      </div>
     )
  }

}

  const mapStateToProps = state => {
    return {
      listing: state.movieList,
    };
  };


  export default connect(
    mapStateToProps,
    { selectMovieAction },
  )(SearchPageComponent);
