import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../core/models/app.interface';
import { MovieList } from '../../features/movie-list/movie-list.component';
import { MovieModel } from '../../core/models/app.interface';

import { MockMovieList, MockMovie} from '../../core/models/mockdata';
import { Search } from '../../features/search/search.component';
import { Movie } from '../../features/movie/movie.component';
import { getMoviesAction } from '../../features/movie-list/+state/movie-list.actions';
import { selectMovieAction } from '../../features/movie/+state/movie.actions';
import * as movieListActions from '../../features/movie-list/+state/movie-list.actions';
import { searchMovieAction, setFieldNameAction } from '../../features/search/+state/search.actions';
import { store } from '../../core/store/rootReducer';


export interface ListPropsModel {
  listing: any[],
  movie: any,
  // query: string,
  field: string,
  getMoviesAction: () => {},
  selectMovieAction: (arg) => {},
  searchMovieAction: (arg) => {},
  setFieldNameAction: (arg) => {},
}


export class MovieListPageComponent extends React.Component<ListPropsModel, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      // query: '',
      field:'',
      list: [],
      movie: MockMovie
    };

    this.onChange = this.onChange.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.setFieldName =this.setFieldName.bind(this);
  }

  componentDidMount() {
    this.props.getMoviesAction();
  }

  onChange(e) {
    const val = e.target.value;
    this.props.searchMovieAction(val);
    const foundedMovies = this.search(this.props.listing,val,'title');
    store.dispatch(movieListActions.fetchedMoviesAction(foundedMovies))
  }

  search(arr, query, field) {
    if (!query || typeof query !== 'string' ) {
      return arr;
    }else{
      query = query.toLowerCase();
    }
    let results = [];
    arr.forEach((item) => {
        if (item && item[field].toLowerCase().indexOf(query) !== -1) {
          results.push(item);
        }
    });
    return results;
  };


  selectMovie(movieId) {
    this.props.selectMovieAction(movieId);
  }

  setFieldName(field){
    this.props.setFieldNameAction(field);
  }

  render() {
    const { listing } = this.props;

    return (
      <div>
        <Search
          // query={this.state.query}
          onChange={this.onChange}
          setFieldName={this.setFieldName}
        />
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
      movie: state.movie,
      // query: state.query
    };
  };

  export default connect(
    mapStateToProps,
    { getMoviesAction, selectMovieAction, searchMovieAction, setFieldNameAction },
  )(MovieListPageComponent);
